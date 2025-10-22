import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { ShopSocialModel, ShopSocialWhereInput } from "../types";
import { Brackets, getRepository, Like } from "typeorm";
import { ShopSocial } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";

export class ShopSocialService {
  static async createShopSocial({
    data,
    req,
  }: {
    data: ShopSocialModel;
    req: Request;
  }): Promise<Response<ShopSocial | null>> {
    const shopSocialRepository = getRepository(ShopSocial);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.link) {
        return handleError("Validation Error", 400, null);
      }

      const newShopSocial = shopSocialRepository.create({
        ...data,
        created_by: shopDataFromToken?.id,
        shop_id: shopDataFromToken?.id,
      } as any);

      const savedShopSocial = await shopSocialRepository.save(newShopSocial);

      return handleSuccess(savedShopSocial as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateShopSocial({
    data,
    req,
  }: {
    data: ShopSocialModel;
    req: Request;
  }): Promise<Response<ShopSocial | null>> {
    const shopSocialRepository = getRepository(ShopSocial);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopSocial = await shopSocialRepository.findOne({
        where: { id: data.id, shop_id: shopDataFromToken?.id } as any,
      });

      if (!shopSocial) {
        return handleError("Link not found", 404, null);
      }

      shopSocial.updated_by = shopDataFromToken?.id;

      shopSocialRepository.merge(shopSocial, data as any);

      const updatedShopSocial = await shopSocialRepository.save(shopSocial);

      return handleSuccess(updatedShopSocial);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteShopSocial({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const shopSocialRepository = getRepository(ShopSocial);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopSocial = await shopSocialRepository.findOne({
        where: { id: id, shop_id: shopDataFromToken?.id } as any,
      });

      if (!shopSocial) {
        return handleError("Link not found", 404, null);
      }

      await shopSocialRepository.remove(shopSocial);

      return handleSuccess(shopSocial as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopSocials({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<ShopSocialWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<ShopSocial[] | null>> {
    const shopSocialRepository = getRepository(ShopSocial);

    try {
      const order = this.order(sortedBy);

      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      const queryBuilder =
        shopSocialRepository.createQueryBuilder("shopSocial");

      if (where?.keyword) {
        queryBuilder.where(
          new Brackets((qb) => {
            qb.where("shopSocial.name ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            }).orWhere("shopSocial.link ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("shopSocial.status = :status", {
          status: where.status,
        });
      }

      if (shopDataFromToken?.id) {
        queryBuilder.andWhere("shopSocial.shop_id = :shopId", {
          shopId: shopDataFromToken?.id,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(shopSocial.created_at) BETWEEN :startDate AND :endDate",
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

      const [shopSocials, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(shopSocials, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopSocial({
    id,
  }: {
    id: string;
  }): Promise<Response<ShopSocial | null>> {
    const shopSocialRepository = getRepository(ShopSocial);

    try {
      const shopSocila = await shopSocialRepository.findOneById(id);

      if (!shopSocila) {
        return handleError("Link not found", 404, null);
      }

      return handleSuccess(shopSocila);
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
