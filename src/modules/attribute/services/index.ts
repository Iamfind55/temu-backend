import { Request } from "express";
import { getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { AttributeValue } from "../../attributeValue/entity";
import { Attribute } from "../entity";
import { AttributeWhereInput, EAttribute } from "../types";
import { BaseOrderByInput } from "../../../utils/base/baseType";

export class AttributeService {
  static async create({
    data,
    req,
  }: {
    data: EAttribute;
    req: Request;
  }): Promise<Response<EAttribute | null>> {
    const attributeRepository = getRepository(Attribute);
    const attributeValueRepository = getRepository(AttributeValue);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      if (!data.name) {
        return handleError("Validation Error", 400, null);
      }

      // Create Attribute
      const attribute = new Attribute();
      attribute.name = data.name;
      attribute.description = data.description;
      await attributeRepository.save(attribute);

      // Create Attribute Values if provided
      if (data.values && data.values.length > 0) {
        for (const val of data.values) {
          const attributeValue = new AttributeValue();
          attributeValue.value = val;
          attributeValue.attribute = attribute;
          await attributeValueRepository.save(attributeValue);
        }
      }

      return handleSuccess(attribute as any);
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
    data: EAttribute;
    req: Request;
  }): Promise<Response<EAttribute | null>> {
    const attributeRepository = getRepository(Attribute);
    const attributeValueRepository = getRepository(AttributeValue);

    try {
      // Verify staff token
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      // Find existing attribute
      const attribute = await attributeRepository.findOne({
        where: { id },
        relations: ["values"],
      });

      if (!attribute) {
        return handleError("Attribute not found", 404, null);
      }
      console.log(attribute);

      // Update attribute fields
      if (data.name) attribute.name = data.name;
      attribute.description = data.description ?? undefined;

      await attributeRepository.save(attribute);

      // Update AttributeValues if provided
      if (data.values) {
        const existingValues = attribute.values.map((v) => v.value);
        const toDelete = attribute.values.filter(
          (v) => !data.values!.includes(v.value)
        );
        if (toDelete.length > 0) {
          await attributeValueRepository.remove(toDelete);
        }

        // Add new values that don’t exist yet
        const toAdd = data.values.filter(
          (val) => !existingValues.includes(val)
        );
        const newValues: AttributeValue[] = [];
        for (const val of toAdd) {
          const attributeValue = new AttributeValue();
          attributeValue.value = val;
          attributeValue.attribute = attribute;
          newValues.push(attributeValue);
        }
        if (newValues.length > 0) {
          await attributeValueRepository.save(newValues);
        }
      }

      return handleSuccess(attribute as any);
    } catch (error: any) {
      console.error(error);
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
    const attributeRepository = getRepository(Attribute);
    const attributeValueRepository = getRepository(AttributeValue);

    try {
      // Verify staff token
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      // Find the attribute with its values
      const attribute = await attributeRepository.findOne({
        where: { id },
        relations: ["values"],
      });

      if (!attribute) {
        return handleError("Attribute not found", 404, null);
      }

      // Delete related AttributeValues first (if cascade is not enabled)
      if (attribute.values && attribute.values.length > 0) {
        await attributeValueRepository.remove(attribute.values);
      }

      // Delete the Attribute
      await attributeRepository.remove(attribute);

      return handleSuccess(null, "Attribute deleted successfully");
    } catch (error: any) {
      console.error(error);
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
    where: AttributeWhereInput;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }) {
    const attributeRepository = getRepository(Attribute);
    const attributeValueRepository = getRepository(AttributeValue);

    try {
      const queryBuilder = attributeRepository
      .createQueryBuilder("attribute")
      .leftJoinAndSelect("attribute.values", "attributeValue");
      // Filtering
      if (where) {
        if (where.keyword) {
          queryBuilder.andWhere("attribute.name ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          });
        }
        if (where.id) {
          queryBuilder.andWhere("attribute.id = :id", { id: where.id });
        }
      }

      // Sorting
      if (sortedBy) {
        const lastUnderscore = sortedBy.lastIndexOf("_");
        const field = sortedBy.substring(0, lastUnderscore);
        const rawOrder = sortedBy.substring(lastUnderscore + 1);
        const order = rawOrder.toUpperCase() === "DESC" ? "DESC" : "ASC";

        if (field) {
          queryBuilder.orderBy(`attribute.${field}`, order);
        }
      } else {
        queryBuilder.orderBy("attribute.created_at", "DESC");
      }
      // Pagination
      const [items, total] = await queryBuilder
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
    }): Promise<Response<Attribute | null>> {
      const attributeRepository = getRepository(Attribute);
      try {
        const attribute = await attributeRepository.findOne({
          where: { id, is_active: true },
          relations: ["values"],
        });
        if (!attribute) {
          return handleError("Attribute not found", 404);
        }
  
        return handleSuccess(attribute);
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
