import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { OrderDetailWhereInput } from "../types";
import { Brackets, getRepository } from "typeorm";
import { OrderDetail } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Order } from "../../order/entity";
import { Logistics } from "../../logistics";

export class OrderService {
  static async getOrderDetails({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<OrderDetailWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<OrderDetail[] | null>> {
    const orderDetailRepository = getRepository(OrderDetail);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = orderDetailRepository
        .createQueryBuilder("order_detail")
        .where({ is_active: true, order_no: where?.order_no });

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(order.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where?.createdAtBetween?.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [orders, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(orders, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async buildOrderDetailQuery({
    where,
    page,
    limit,
    sortedBy,
    req,
    userType,
  }: {
    where: Partial<OrderDetailWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
    userType: "shop" | "customer" | "admin";
  }): Promise<Response<OrderDetail[] | null>> {
    const orderRepository = getRepository(OrderDetail);

    try {
      // Verify token based on user type
      let userDataFromToken;
      switch (userType) {
        case "shop":
          userDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
          break;
        case "customer":
          userDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
            req
          );
          break;
        case "admin":
          userDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);
          break;
        default:
          return handleError(config.message.invalid_token, 404, null);
      }

      if (!userDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      // Build the base query
      // const queryBuilder = orderRepository
      //   .createQueryBuilder("order_detail")
      //   .leftJoinAndSelect("order_detail.customerData", "customerData")
      //   .leftJoinAndSelect("order_detail.shop", "shop")
      //   .leftJoinAndSelect("order.logistics", "logistics")
      //   .where({ is_active: true });

      const queryBuilder = orderRepository
        .createQueryBuilder("order_detail")
        .leftJoinAndMapOne(
          "order_detail.order",
          Order, // entity class
          "order",
          "order_detail.order_id::uuid = order.id"
        )
        .leftJoinAndMapOne(
          "order_detail.logistics",
          Logistics,
          "logistics",
          "order.logistics_id = logistics.id"
        )
        .leftJoinAndSelect("order_detail.customerData", "customerData")
        .leftJoinAndSelect("order_detail.shop", "shop")
        .where("order_detail.is_active = :active", { active: true });
      // Add user-specific conditions
      if (userType === "shop") {
        queryBuilder.andWhere({ shop_id: userDataFromToken.id });
      } else if (userType === "customer") {
        queryBuilder.andWhere({ customer_id: userDataFromToken.id });
      }

      // Add filters
      if (where?.order_no) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("order_detail.order_no = :order_no", {
              order_no: `${where.order_no}`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(order_detail.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where.createdAtBetween.endDate,
          }
        );
      }

      // Add pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(this.order(sortedBy) as any);

      // Execute the query
      const [orders, total] = await queryBuilder.getManyAndCount();
      console.log("orders", orders);

      return handleSuccessWithTotalData(orders, total);
    } catch (error: any) {
      console.error(`Error in ${userType}GetOrderDetails:`, error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Shop-specific orders
  static async shopGetOrderDetails({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<OrderDetailWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<OrderDetail[] | null>> {
    return this.buildOrderDetailQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "shop",
    });
  }

  // Customer-specific orders
  static async customerGetOrderDetails({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<OrderDetailWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<OrderDetail[] | null>> {
    return this.buildOrderDetailQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "customer",
    });
  }

  // Admin-specific orders
  static async adminGetOrderDetails({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<OrderDetailWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<OrderDetail[] | null>> {
    return this.buildOrderDetailQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "admin",
    });
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { "order_detail.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "order_detail.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "order_detail.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "order_detail.updated_at": "DESC" };
      default:
        return { "order_detail.created_at": "DESC" }; // Default order
    }
  }
}
