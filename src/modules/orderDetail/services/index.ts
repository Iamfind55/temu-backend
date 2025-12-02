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
import { Product } from "../../product/entity";
import { Branding } from "../../branding";

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
        .leftJoinAndMapOne(
          "order_detail.product",
          Product,
          "product",
          "order_detail.product_id::uuid = product.id"
        )
        .leftJoinAndSelect("order_detail.customerData", "customerData")
        .leftJoinAndSelect("order_detail.shop", "shop")
        .where("order_detail.is_active = :active", { active: true });

      // Add brand join for admin
      if (userType === "admin") {
        queryBuilder.leftJoinAndMapOne(
          "order_detail.brand",
          Branding,
          "brand",
          "product.brand_id::uuid = brand.id"
        );
      }

      // Add specific field selection for admin
      if (userType === "admin") {
        queryBuilder.select([
          // Order detail fields
          "order_detail.id",
          "order_detail.created_at",
          "order_detail.updated_at",
          "order_detail.order_no",
          "order_detail.product_name",
          "order_detail.product_cover_image",
          "order_detail.sku",
          "order_detail.spu",
          "order_detail.quantity",
          "order_detail.price",
          "order_detail.discount",
          "order_detail.profit",
          "order_detail.shop_id",
          "order_detail.product_id",
          "order_detail.category_id",
          "order_detail.order_id",
          "order_detail.customer_id",
          "order_detail.address_id",
          "order_detail.status",
          "order_detail.payment_status",
          "order_detail.order_status",
          "order_detail.inventory",
          "order_detail.delivery_type",
          "order_detail.sign_in_status",
          "order_detail.canelled_by_shop",
          "order_detail.updated_by_admin",
          "order_detail.canelled_by_customer",

          // Order fields
          "order.id",
          "order.order_no",
          "order.total_quantity",
          "order.total_products",
          "order.total_price",
          "order.total_discount",
          "order.profit",
          "order.expected_revenue",
          "order.shop_id",
          "order.customer_id",
          "order.address_id",
          "order.payment_slip",
          "order.status",
          "order.payment_status",
          "order.order_status",
          "order.delivery_type",
          "order.sign_in_status",
          "order.logistics_id",
          "order.created_at",
          "order.updated_at",

          // Logistics fields
          "logistics.id",
          "logistics.company_name",
          "logistics.logo",
          "logistics.cost",
          "logistics.transport_modes",

          // Product fields
          "product.id",
          "product.name",
          "product.description",
          "product.image_url",
          "product.images",
          "product.origin_image_url",
          "product.cover_image",
          "product.price",
          "product.market_price",
          "product.discount",
          "product.quantity",
          "product.sku",
          "product.spu",
          "product.sell_count",
          "product.total_star",
          "product.total_comment",

          // Brand fields
          "brand.id",
          "brand.name",
          "brand.image",

          // Customer fields
          "customerData.id",
          "customerData.firstName",
          "customerData.lastName",
          "customerData.phone_number",
          "customerData.email",

          // Shop fields
          "shop.id",
          "shop.store_name",
          "shop.fullname",
          "shop.phone_number",
          "shop.email",
        ]);
      }

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
