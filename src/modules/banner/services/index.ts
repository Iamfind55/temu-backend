import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { BannerModel, BannerWhereInput } from "../types";
import { Brackets, getRepository, Like } from "typeorm";
import { Banner } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";

export class BannerService {
  static async createBanner({
    data,
    req,
  }: {
    data: BannerModel;
    req: Request;
  }): Promise<Response<Banner | null>> {
    const bannerRepository = getRepository(Banner);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.image || !data.position) {
        return handleError("Validation Error", 400, null);
      }

      const newBanner = bannerRepository.create({
        ...data,
        status: data.status || BaseStatus.ACTIVE,
        created_by: staffDataFromToken?.id,
      } as any);

      const savedBanner = await bannerRepository.save(newBanner);

      return handleSuccess(savedBanner as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateBanner({
    data,
    req,
  }: {
    data: BannerModel;
    req: Request;
  }): Promise<Response<Banner | null>> {
    const bannerRepository = getRepository(Banner);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const banner = await bannerRepository.findOneById(data.id);

      if (!banner) {
        return handleError("Banner not found", 404, null);
      }

      banner.updated_by = staffDataFromToken?.id;

      bannerRepository.merge(banner, data as any);

      const updatedBanner = await bannerRepository.save(banner);

      return handleSuccess(updatedBanner);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteBanner({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const bannerRepository = getRepository(Banner);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const banner = await bannerRepository.findOneById(id);

      if (!banner) {
        return handleError("Banner not found", 404, null);
      }

      await bannerRepository.remove(banner);

      return handleSuccess(banner as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getBanners({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<BannerWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<Response<Banner[] | null>> {
    const bannerRepository = getRepository(Banner);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = bannerRepository
        .createQueryBuilder("banner")
        .where({ is_active: true });

      if (where?.name) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("banner.name ILIKE :name", {
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
          "DATE(banner.created_at) BETWEEN :startDate AND :endDate",
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

      const [banners, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(banners, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getBanner({
    id,
  }: {
    id: string;
  }): Promise<Response<Banner | null>> {
    const bannerRepository = getRepository(Banner);

    try {
      const banner = await bannerRepository.findOne({
        where: { id, is_active: true },
      });

      if (!banner) {
        return handleError("Banner not found", 404, null);
      }

      return handleSuccess(banner);
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
      case BaseOrderByInput.position_ASC:
        return { position: "ASC" };
      case BaseOrderByInput.position_DESC:
        return { position: "DESC" };
      default:
        return { created_at: "DESC" }; // Default order
    }
  }
}
