import { Brackets, getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { Branding } from "../entity";
import { BrandingModel, BrandingWhereInput } from "../types";
import { Request } from "express";

export class BrandingService {
  static async createBranding({
    data,
    req,
  }: {
    data: BrandingModel;
    req: Request;
  }): Promise<Response<Branding | null>> {
    const brandingRepository = getRepository(Branding);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data?.name) {
        return handleError("Validation Error", 400, null);
      }

      // Check if brand with the same name already exists
      const existingBrand = await brandingRepository
        .createQueryBuilder("branding")
        .andWhere("branding.is_active = :isActive", { isActive: true })
        .andWhere("branding.name = :name", { name: data.name })
        .getOne();

      if (existingBrand) {
        return handleError(
          "Brand with the same name already exists",
          400,
          null
        );
      }

      const newBranding = brandingRepository.create({
        ...data,
        created_by: staffDataFromToken?.id,
      } as any);

      const savedBranding = await brandingRepository.save(newBranding);

      return handleSuccess(savedBranding as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateBranding({
    data,
    req,
  }: {
    data: BrandingModel;
    req: Request;
  }): Promise<Response<Branding | null>> {
    const brandingRepository = getRepository(Branding);
    console.log(req.headers);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      console.log(staffDataFromToken);


      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const branding = await brandingRepository.findOneById(data.id);

      if (!branding) {
        return handleError("Branding not found", 404, null);
      }

      // Check if another brand already has the same name
      if (data.name) {
        // Check if another brand has the same name_en (or another relevant language field)
        const existingBranding = await brandingRepository
          .createQueryBuilder("branding")
          .where("branding.id != :id", { id: data.id })
          .andWhere("branding.is_active = :isActive", { isActive: true })
          .andWhere("branding.name = :name", {
            name: data.name,
          })
          .getOne();

        if (existingBranding) {
          return handleError(
            "Brand with the same name already exists",
            400,
            null
          );
        }
      }

      branding.updated_by = staffDataFromToken?.id;

      brandingRepository.merge(branding, data as any);

      const updatedBranding = await brandingRepository.save(branding);

      return handleSuccess(updatedBranding);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteBranding({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const brandingRepository = getRepository(Branding);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const branding = await brandingRepository.findOneById(id);

      if (!branding) {
        return handleError("Branding not found", 404, null);
      }

      // await brandingRepository.remove(branding);
      brandingRepository.merge(branding, { is_active: false });
      await brandingRepository.save(branding);

      return handleSuccess(branding as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getBrandings({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<BrandingWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<Response<Branding[] | null>> {
    const brandingRepository = getRepository(Branding);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = brandingRepository
        .createQueryBuilder("branding")
        .where({ is_active: true });

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("branding.name ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(branding.created_at) BETWEEN :startDate AND :endDate",
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

      const [brandings, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(brandings, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getBranding({
    id,
  }: {
    id: string;
  }): Promise<Response<Branding | null>> {
    const brandingRepository = getRepository(Branding);

    try {
      const branding = await brandingRepository.findOne({
        where: { id, is_active: true },
      });

      if (!branding) {
        return handleError("Branding not found", 404, null);
      }

      return handleSuccess(branding);
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
