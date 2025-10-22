import { Request } from "express";
import { getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { Logistics } from "../entity";
import { ELogistics, LogisticsWhereInput } from "../types";

export class LogisticsService {
  static async create({
    data,
    req,
  }: {
    data: ELogistics;
    req: Request;
  }): Promise<Response<Logistics | null>> {
    const logisticRepository = getRepository(Logistics);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      if (!data.company_name) {
        return handleError("Validation Error", 400, null);
      }

      // Check if logistics with the same name already exists
      const existing = await logisticRepository.findOne({
        where: { company_name: data.company_name, is_active: true },
      });
      if (existing) {
        return handleError(
          "Logistics already exists",
          400,
          "Error"
        );
      }

      const newLogistic = logisticRepository.create({
        ...data,
        created_by: staffDataFromToken.id,
      } as any);

      const savedLogistic = await logisticRepository.save(newLogistic);

      return handleSuccess(savedLogistic as any);
    } catch (error: any) {
      console.log(error);
      
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async update({
    id,
    data,
    req,
  }: {
    id: string;
    data: ELogistics;
    req: Request;
  }): Promise<Response<Logistics | null>> {
    const logisticRepository = getRepository(Logistics);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);
      if (!id) {
        return handleError("Logistic ID required", 404, null);
      }
      const logistic = await logisticRepository.findOne({
        where: { id: id },
      });

      if (!logistic) {
        return handleError("Logistic not found", 404, null);
      }

      // Check if another logistic already has the same name
      if (data.company_name) {
        // Check if another catelogisticgory has the same name_en (or another relevant language field)
        const existing = await logisticRepository.findOne({
          where: { company_name: data.company_name, is_active: true },
        });

        if (existing) {
          return handleError(
            "Logistics with the same name already exists",
            400,
            null
          );
        }
      }

      logistic.updated_by = staffDataFromToken.id;
      logisticRepository.merge(logistic, data as any);

      const updatedlogistic = await logisticRepository.save(logistic);

      return handleSuccess(updatedlogistic);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async delete({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const logisticRepository = getRepository(Logistics);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const logistic = await logisticRepository.findOne({
        where: { id: id },
      });

      if (!logistic) {
        return handleError("logistic not found", 404, null);
      }

      // await logisticRepository.remove(logistic);
      logisticRepository.merge(logistic, { is_active: false });
      await logisticRepository.save(logistic);

      return handleSuccess(logistic as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async findAll({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: LogisticsWhereInput;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }) {
    const logisticRepository = getRepository(Logistics);
    try {
      const query = logisticRepository.createQueryBuilder("logistics");

      // Filtering
      if (where) {
        if (where.keyword) {
          query.andWhere("logistics.company_name ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          });
        }
        if (where.status) {
          query.andWhere("logistics.status = :status", {
            status: where.status,
          });
        }
        if (where.id) {
          query.andWhere("logistics.id = :id", { id: where.id });
        }
      }

      // Sorting
      if (sortedBy) {
        const lastUnderscore = sortedBy.lastIndexOf("_");
        const field = sortedBy.substring(0, lastUnderscore);
        const rawOrder = sortedBy.substring(lastUnderscore + 1);
        const order = rawOrder.toUpperCase() === "DESC" ? "DESC" : "ASC";

        if (field) {
          query.orderBy(`logistics.${field}`, order);
        }
      } else {
        query.orderBy("logistics.created_at", "DESC");
      }
      // Pagination
      const [items, total] = await query
        .skip((page - 1) * limit)
        .take(limit)
        .getManyAndCount();

      return handleSuccessWithTotalData(items as any, total);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async findOne({
    id,
  }: {
    id: string;
  }): Promise<Response<Logistics | null>> {
    const logisticRepository = getRepository(Logistics);
    try {
      const logistic = await logisticRepository.findOne({
        where: { id, is_active: true },
      });
      if (!logistic) {
        return handleError("Logistics not found", 404);
      }

      return handleSuccess(logistic);
    } catch (error: any) {
      console.log(error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
}
