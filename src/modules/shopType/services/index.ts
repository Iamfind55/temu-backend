import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { ShopTypeModel, ShopTypeWhereInput } from "../types";
import { Brackets, getRepository, Like } from "typeorm";
import { ShopType } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";

export class ShopTypeService {
  static async createShopType({
    data,
    req,
  }: {
    data: ShopTypeModel;
    req: Request;
  }): Promise<Response<ShopType | null>> {
    const shopTypeRepository = getRepository(ShopType);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.name || !data.image) {
        return handleError("Validation Error", 400, null);
      }

      const newShopType = shopTypeRepository.create({
        name: data.name,
        image: data.image,
        status: data.status || BaseStatus.ACTIVE,
        created_by: staffDataFromToken?.id,
      });

      const savedShopType = await shopTypeRepository.save(newShopType);

      return handleSuccess(savedShopType);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateShopType({
    data,
    req,
  }: {
    data: ShopTypeModel;
    req: Request;
  }): Promise<Response<ShopType | null>> {
    const shopTypeRepository = getRepository(ShopType);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopType = await shopTypeRepository.findOneById(data.id);

      if (!shopType) {
        return handleError("Shop type not found", 404, null);
      }

      shopType.updated_by = staffDataFromToken?.id;

      shopTypeRepository.merge(shopType, data as any);

      const updatedShopType = await shopTypeRepository.save(shopType);

      return handleSuccess(updatedShopType);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteShopType({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const shopTypeRepository = getRepository(ShopType);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopType = await shopTypeRepository.findOneById(id);

      if (!shopType) {
        return handleError("Shop type not found", 404, null);
      }

      await shopTypeRepository.remove(shopType);

      return handleSuccess(shopType as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopTypes({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<ShopTypeWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<Response<ShopType[] | null>> {
    const shopTypeRepository = getRepository(ShopType);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = shopTypeRepository
        .createQueryBuilder("shopType")
        .where({ is_active: true });

      if (where?.name) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("shopType.name ILIKE :name", {
              name: `%${where.name}%`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(shopType.created_at) BETWEEN :startDate AND :endDate",
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

      const [shopTypes, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(shopTypes, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopType({
    id,
  }: {
    id: string;
  }): Promise<Response<ShopType | null>> {
    const shopTypeRepository = getRepository(ShopType);

    try {
      const shopType = await shopTypeRepository.findOneById(id);

      if (!shopType) {
        return handleError("Shop type not found", 404, null);
      }

      return handleSuccess(shopType);
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
