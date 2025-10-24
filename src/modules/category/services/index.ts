import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { CategoryModel, CategoryWhereInput } from "../types";
import { Brackets, getRepository } from "typeorm";
import { Category } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { GraphQLResolveInfo } from "graphql";
import { CategoryAttribute } from "../../categoryAttribute";
import { Attribute } from "../../attribute";

export class CategoryService {
  // User only clone data from dhlshopping api
  static async createLoopCategory() {
    const requestOptions: RequestInit = {
      method: "POST",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://dhlshopping.com/api/customer/index/get-all-category",
        requestOptions
      );
      const result = await response.json();

      if (result.code !== 200 || !result?.data) {
        console.error("Unexpected response:", result);
        return;
      }

      // Helper function to map category data
      const mapCategoryData = (
        category: any,
        parentId: string | null = null
      ) => ({
        image: category.image
          ? `https://227_cdn.pionexprocoin.cc${category.image}`
          : "",
        name: {
          name_vi: category?.name?.name_vi || "",
          name_en: category?.name?.name_en || "",
          name_ms: category?.name?.name_ms || "",
          name_th: category?.name?.name_th || "",
          name_es: category?.name?.name_es || "",
          name_jp: category?.name?.name_jp || "",
          name_zh: category?.name?.name_zh || "",
          name_zh_tw: category?.name?.["name_zh-tw"] || "",
        },
        parent_id: parentId,
      });

      // Recursive function to create categories
      const processCategory = async (
        category: any,
        parentId: string | null = null
      ) => {
        const data: any = mapCategoryData(category, parentId);
        const parentCategory = await this.createCategory({ data } as any);
        console.log("Created category:", parentCategory?.data?.id);

        if (category?.child?.length > 0) {
          for (const childCategory of category.child) {
            await processCategory(childCategory, parentCategory?.data?.id);
          }
        }
      };

      for (const category of result.data) {
        await processCategory(category);
      }

      console.log("All categories processed successfully.");
    } catch (error) {
      console.error("Error processing categories:", error);
    }
  }

  static async createCategory({
    data,
    req,
  }: {
    data: CategoryModel;
    req: Request;
  }): Promise<Response<Category | null>> {
    const categoryRepository = getRepository(Category);
    const categoryAttributeRepository = getRepository(CategoryAttribute);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.name?.name_en) {
        return handleError("Validation Error", 400, null);
      }

      // Check if category with the same name already exists
      const existingCategory = await categoryRepository
        .createQueryBuilder("category")
        .andWhere("category.is_active = :isActive", { isActive: true })
        .andWhere("category.name->>'name_en' = :name_en", {
          name_en: data.name.name_en,
        })
        .getOne();

      if (existingCategory) {
        return handleError(
          "Category with the same name already exists",
          400,
          null
        );
      }

      const newCategory = categoryRepository.create({
        ...data,
        created_by: staffDataFromToken.id,
      });

      const savedCategory = await categoryRepository.save(newCategory);
      
      if (savedCategory && data?.attributes && data?.attributes?.length > 0) {
        const categoryAttributes: CategoryAttribute[] = data.attributes.map(
          (attributeId) => {
            const ca = new CategoryAttribute();
            ca.category = { id: savedCategory.id } as Category;
            ca.attribute = { id: attributeId } as Attribute;
            return ca;
          }
        );

        await categoryAttributeRepository.save(categoryAttributes);
      }
      return handleSuccess(savedCategory as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateCategory({
    data,
    req,
  }: {
    data: CategoryModel;
    req: Request;
  }): Promise<Response<Category | null>> {
    const categoryRepository = getRepository(Category);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const category = await categoryRepository.findOne({
        where: { id: data.id },
      });

      if (!category) {
        return handleError("Category not found", 404, null);
      }

      // Check if another category already has the same name
      if (data.name?.name_en) {
        // Check if another category has the same name_en (or another relevant language field)
        const existingCategory = await categoryRepository
          .createQueryBuilder("category")
          .where("category.id != :id", { id: data.id })
          .andWhere("category.is_active = :isActive", { isActive: true })
          .andWhere("category.name->>'name_en' = :name_en", {
            name_en: data.name.name_en,
          })
          .getOne();

        if (existingCategory) {
          return handleError(
            "Category with the same name already exists",
            400,
            null
          );
        }
      }

      category.updated_by = staffDataFromToken.id;
      categoryRepository.merge(category, data as any);

      const updatedCategory = await categoryRepository.save(category);

      return handleSuccess(updatedCategory);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteCategory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const categoryRepository = getRepository(Category);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const category = await categoryRepository.findOne({
        where: { id: id },
      });

      if (!category) {
        return handleError("Category not found", 404, null);
      }

      // await categoryRepository.remove(category);
      categoryRepository.merge(category, { is_active: false });
      await categoryRepository.save(category);

      return handleSuccess(category as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCategories(
    {
      where,
      page,
      limit,
      sortedBy,
    }: {
      where: Partial<CategoryWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Category[] | null>> {
    const categoryRepository = getRepository(Category);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = categoryRepository
        .createQueryBuilder("category")
        .where({ is_active: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getCategories.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "subcategories")
          .filter((field) => field !== "parent_data")
          .map((field) => `category.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("category.name ->> 'name_en' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      if (where?.parent_id) {
        queryBuilder.andWhere("category.parent_id = :parent_id", {
          parent_id: where.parent_id,
        });
      } else {
        queryBuilder.andWhere("category.parent_id IS NULL");
      }

      if (where?.status) {
        queryBuilder.andWhere("category.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(category.created_at) BETWEEN :startDate AND :endDate",
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

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [categories, total] = await queryBuilder.getManyAndCount();

      if (!selectFields?.includes("subcategories")) {
        return handleSuccessWithTotalData(categories, total);
      }

      // Fetch subcategories for each category
      const categoriesWithSubcategories = await Promise.all(
        categories.map(async (category) => {
          const subcategories = await this.getCategoryHierarchy(category.id);

          return {
            id: category.id,
            name: category.name,
            image: category.image,
            status: category.status,
            recommended: category.recommended,
            parent_id: category.parent_id,
            subcategories, // Nested subcategories
          };
        })
      );

      return handleSuccessWithTotalData(
        categoriesWithSubcategories as any,
        total
      );
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetCategories(
    {
      where,
      page,
      limit,
      sortedBy,
    }: {
      where: Partial<CategoryWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Category[] | null>> {
    const categoryRepository = getRepository(Category);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = categoryRepository
        .createQueryBuilder("category")
        .where({ is_active: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getCategories.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "subcategories")
          .filter((field) => field !== "parent_data")
          .map((field) => `category.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("category.name ->> 'name_en' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      if (where?.parent_id) {
        queryBuilder.andWhere("category.parent_id = :parent_id", {
          parent_id: where.parent_id,
        });
      }

      if (where?.status) {
        queryBuilder.andWhere("category.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(category.created_at) BETWEEN :startDate AND :endDate",
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

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [categories, total] = await queryBuilder.getManyAndCount();

      if (!selectFields?.includes("parent_data")) {
        return handleSuccessWithTotalData(categories, total);
      }

      // Fetch subcategories for each category
      const categoriesWithParent = await Promise.all(
        categories.map(async (category) => {
          if (!category.parent_id) return category;

          const parentCategory = await categoryRepository.findOneBy({
            id: category?.parent_id,
            is_active: true,
          });
          if (parentCategory) {
            return {
              id: category.id,
              name: category.name,
              image: category.image,
              status: category.status,
              recommended: category.recommended,
              parent_id: category.parent_id,
              parent_data: parentCategory, // Nested subcategories
            };
          }

          return category;
        })
      );

      return handleSuccessWithTotalData(categoriesWithParent as any, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getAllCategories(
    {
      where,
      page,
      limit,
      sortedBy,
    }: {
      where: Partial<CategoryWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Category[] | null>> {
    const categoryRepository = getRepository(Category);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = categoryRepository
        .createQueryBuilder("category")
        .where({ is_active: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getCategories.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "subcategories")
          .filter((field) => field !== "parent_data")
          .map((field) => `category.${field}`);
        queryBuilder.select(fields);
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [categories, total] = await queryBuilder.getManyAndCount();

      if (!selectFields?.includes("subcategories")) {
        return handleSuccessWithTotalData(categories, total);
      }

      // Fetch subcategories for each category
      const categoriesWithSubcategories = await Promise.all(
        categories.map(async (category) => {
          const subcategories = await this.getCategoryHierarchy(category.id);

          return {
            id: category.id,
            name: category.name,
            image: category.image,
            status: category.status,
            recommended: category.recommended,
            parent_id: category.parent_id,
            subcategories, // Nested subcategories
          };
        })
      );

      return handleSuccessWithTotalData(
        categoriesWithSubcategories as any,
        total
      );
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCategory({
    id,
  }: {
    id: string;
  }): Promise<Response<Category | null>> {
    const categoryRepository = getRepository(Category);

    try {
      const category = await categoryRepository.findOne({
        where: { id, is_active: true },
      });

      if (!category) {
        return handleError("Category not found", 404, null);
      }

      return handleSuccess(category);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCategoriesWithSubcategories(): Promise<
    Response<Category[] | null>
  > {
    try {
      const hierarchy = await this.getCategoryHierarchy(null); // Fetch the entire hierarchy starting from the root

      return handleSuccess(hierarchy);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCategoryHierarchy(parentId: string | null = null) {
    const categoryRepository = getRepository(Category);

    // Fetch categories with the given parent ID
    const categories = await categoryRepository.find({
      where: { parent_id: parentId } as any,
    });

    // Recursively fetch subcategories
    const result: any = await Promise.all(
      categories.map(async (category) => {
        const subcategories = await this.getCategoryHierarchy(category.id); // Recursive call
        1;
        return {
          id: category.id,
          name: category.name,
          image: category.image,
          status: category.status,
          recommended: category.recommended,
          parent_id: category.parent_id,
          subcategories, // Nested subcategories
        };
      })
    );

    return result;
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
