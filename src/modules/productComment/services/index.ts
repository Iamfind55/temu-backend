import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { ProductCommentModel, ProductCommentWhereInput } from "../types";
import { Brackets, getRepository, Like } from "typeorm";
import { ProductComment } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";

export class ProductCommentService {
  static async createProductComment({
    data,
    req,
  }: {
    data: ProductCommentModel;
    req: Request;
  }): Promise<Response<ProductComment | null>> {
    const productCommentgRepository = getRepository(ProductComment);

    try {
      // const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);

      // if (!staffDataFromToken) return handleError(config.message.invalid_token, 404, null);

      if (!data.comment || !data.product_id || !data.customer_id) {
        return handleError("Validation Error", 400, null);
      }

      const newProductComment = productCommentgRepository.create({
        comment: data.comment,
        customer_id: data.customer_id,
        product_id: data.product_id,
        status: data.status || BaseStatus.ACTIVE,
        // created_by: staffDataFromToken?.id,
      });

      const savedProductComment = await productCommentgRepository.save(
        newProductComment
      );

      return handleSuccess(savedProductComment);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateProductComment({
    data,
    req,
  }: {
    data: ProductCommentModel;
    req: Request;
  }): Promise<Response<ProductComment | null>> {
    const productCommentgRepository = getRepository(ProductComment);

    try {
      // const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
      //   req
      // );

      // if (!staffDataFromToken)
      //   return handleError(config.message.invalid_token, 404, null);

      const productComment = await productCommentgRepository.findOneById(
        data.id
      );

      if (!productComment) {
        return handleError("Product star not found", 404, null);
      }

      // productComment.updated_by = staffDataFromToken?.id;

      productCommentgRepository.merge(productComment, data as any);

      const updatedProductComment = await productCommentgRepository.save(
        productComment
      );

      return handleSuccess(updatedProductComment);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteProductComment({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const productCommentgRepository = getRepository(ProductComment);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const productComment = await productCommentgRepository.findOneById(id);

      if (!productComment) {
        return handleError("Product star not found", 404, null);
      }

      await productCommentgRepository.remove(productComment);

      return handleSuccess(productComment as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getProductComments({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<ProductCommentWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<Response<ProductComment[] | null>> {
    const productCommentgRepository = getRepository(ProductComment);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = productCommentgRepository
        .createQueryBuilder("productComment")
        .where({ is_active: true });

      if (where?.comment) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("productComment.comment ILIKE :comment", {
              comment: `%${where.comment}%`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(productComment.created_at) BETWEEN :startDate AND :endDate",
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

      const [productComments, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(productComments, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getProductComment({
    id,
  }: {
    id: string;
  }): Promise<Response<ProductComment | null>> {
    const productCommentgRepository = getRepository(ProductComment);

    try {
      const productComment = await productCommentgRepository.findOneById(id);

      if (!productComment) {
        return handleError("Product star not found", 404, null);
      }

      return handleSuccess(productComment);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { created_at: "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { created_at: "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { updated_at: "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { updated_at: "DESC" };
      default:
        return { created_at: "DESC" }; // Default order
    }
  }
}
