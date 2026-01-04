import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  StaffLoginResponse,
  StaffModel,
  StaffWhereInput,
  StaffWhereLoginInput,
} from "../types";
import { Brackets, getRepository, Like, Not } from "typeorm";
import { Staff } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { comparePassword, hashPassword } from "../../../utils/helper";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";

export class StaffService {
  static async createStaff({
    data,
    req,
  }: {
    data: StaffModel;
    req: Request;
  }): Promise<Response<Staff | null>> {
    const staffRepository = getRepository(Staff);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      // Validation
      if (!data?.username || !data?.password) {
        return handleError("Validation Error", 400, null);
      }

      const existStaff = await staffRepository.findOne({
        where: { username: data?.username, is_active: true },
      });
      if (existStaff) {
        return handleError(config.message.username_already_exist, 404, null);
      }

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      data.created_by = staffDataFromToken?.id;

      // Create and save staff
      const newStaff = staffRepository.create(data as any);
      const savedStaff = await staffRepository.save(newStaff);

      return handleSuccess(savedStaff as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateStaff({
    data,
    req,
  }: {
    data: StaffModel;
    req: Request;
  }): Promise<Response<Staff | null>> {
    const staffRepository = getRepository(Staff);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const staff = await staffRepository.findOne({
        where: { id: data.id, is_active: true },
      });

      if (!staff) {
        return handleError("Staff not found", 404, null);
      }

      // const existStaff = await staffRepository.findOne({
      //   where: {
      //     // username: data?.username,
      //     is_active: true,
      //     id: Not(data?.id),
      //   },
      // });
      // console.log({ existStaff });

      // if (!existStaff) {
      //   return handleError("Not found account", 404, null);
      // }

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      staffRepository.merge(staff, data as any);

      const updatedStaff = await staffRepository.save(staff);

      return handleSuccess(updatedStaff);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteStaff({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const staffRepository = getRepository(Staff);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const staff = await staffRepository.findOne({
        where: { id, is_active: true },
      });

      if (!staff) {
        return handleError("Staff not found", 404, null);
      }

      staffRepository.merge(staff, { is_active: false });

      await staffRepository.save(staff);

      // await staffRepository.remove(staff);

      return handleSuccess(staff as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getStaffs(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<StaffWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Staff[] | null>> {
    const staffRepository = getRepository(Staff);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = this.order(sortedBy);

      const queryBuilder = staffRepository
        .createQueryBuilder("staff")
        .where("staff.is_active = :isActive", { isActive: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields.map((field) => `staff.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("staff.firstName ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("staff.lastName ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("staff.username ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("staff.email ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("staff.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(staff.created_at) BETWEEN :startDate AND :endDate",
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

      const [staffs, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(staffs, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async staffLogin({
    where,
  }: {
    where: StaffWhereLoginInput;
  }): Promise<Response<StaffLoginResponse | null>> {
    const staffRepository = getRepository(Staff);

    try {
      const { username, password } = where;

      // Validate input
      if (!username || !password) {
        return handleError("Username and password are required.", 400, null);
      }

      // Fetch user from database
      const staff = await staffRepository.findOne({
        where: { username, is_active: true },
      });

      if (!staff) {
        return handleError("Invalid username or password.", 404, null);
      }

      // Compare passwords
      const isPasswordValid = await comparePassword(password, staff?.password);
      if (!isPasswordValid) {
        return handleError("Invalid username or password.", 404, null);
      }

      // Generate JWT token
      const token = new AuthMiddlewareService().genStaffToken(staff);

      return handleSuccess({ token, data: staff } as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getStaff({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Staff | null>> {
    const staffRepository = getRepository(Staff);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const staff = await staffRepository.findOne({
        where: { id, is_active: true },
      });

      if (!staff) {
        return handleError("Staff not found", 404, null);
      }

      return handleSuccess(staff);
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
