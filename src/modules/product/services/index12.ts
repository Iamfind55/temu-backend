import { Request } from "express";
import { config } from "../../../config";
import {
  ProductModel,
  ProductWhereInput,
  SimilarProductWhereInput,
} from "../types";
import { Brackets, getRepository } from "typeorm";
import { Product } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Category, CategoryService } from "../../category";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { handleError } from "../../../utils/response/error.handler";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";

export class ProductService {
  // User only clone data from dhlshopping api
  static async createLoopCategoryAndProduct() {
    const baseCategoryUrl =
      "https://dhlshopping.com/api/customer/index/get-all-category";
    const categoryDetailsUrl = (id: string) =>
      `https://dhlshopping.com/api/category/${id}/shop?page=1&pagesize=500&sort=new&brand=&min_price=1&max_price=99990`;
    const productDetailsUrl = (id: string) =>
      `https://dhlshopping.com/api/product/${id}/a`;
    const cdnUrl = "https://227_cdn.pionexprocoin.cc";

    const fetchJson = async (url: string, options: RequestInit) => {
      const response = await fetch(url, options);
      return response.json();
    };

    const mapCategoryData = (
      category: any,
      parentId: string | null = null
    ) => ({
      image: category.image ? `${cdnUrl}${category.image}` : "",
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

    const mapProductData = (product: any, categoryId: string | null) => ({
      name: {
        name_en: product?.name?.name_en || "",
        name_es: product?.name?.name_es || "",
        name_jp: product?.name?.name_jp || "",
        name_ms: product?.name?.name_ms || "",
        name_th: product?.name?.name_th || "",
        name_vi: product?.name?.name_vi || "",
        name_zh: product?.name?.name_zh || "",
        name_zh_tw: product?.name?.["name_zh-tw"] || "",
      },
      description: {
        name_vi: product?.description?.description_vi || "",
        name_en: product?.description?.description_en || "",
        name_ms: product?.description?.description_ms || "",
        name_th: product?.description?.description_th || "",
        name_es: product?.description?.description_es || "",
        name_jp: product?.description?.description_jp || "",
        name_zh: product?.description?.description_zh || "",
        name_zh_tw: product?.description?.["description_zh-tw"] || "",
      },
      cover_image: `${cdnUrl}${product?.image?.main?.image}`,
      images: product?.image?.gallery?.map((image: any) => image?.image),
      category_id: categoryId,
      total_star: parseFloat(product?.score) || 5.0,
      price: parseFloat(product?.price) || 34.99,
      quantity: parseFloat(product?.qty) || 2837,
    });

    const processCategory = async (
      category: any,
      parentId: string | null = null
    ) => {
      const categoryData = mapCategoryData(category, parentId);
      const parentCategory = await CategoryService.createCategory({
        data: categoryData,
      } as any);
      const categoryId = parentCategory?.data?.id;

      if (!categoryId) {
        console.error("Failed to create category:", parentCategory);
        return;
      }

      console.log("Created category:", categoryId);

      try {
        const categoryProducts = await fetchJson(
          categoryDetailsUrl(category.id),
          { method: "GET", redirect: "follow" }
        );

        if (categoryProducts.code === 200 && categoryProducts?.data?.list) {
          // Utility function for delay
          const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

          for (const product of categoryProducts.data.list) {
            try {
              const productDetails = await fetchJson(
                productDetailsUrl(product.id),
                { method: "GET", redirect: "follow" }
              );

              const productData = mapProductData(
                productDetails?.data?.product,
                categoryId
              );

              const createProduct = await this.createProduct({
                data: productData,
              } as any);

              console.log("Created product:", createProduct?.data?.id);

              // Delay for 2 seconds before proceeding to the next product
              await delay(2000);
            } catch (productError) {
              console.error("Error creating product:", productError);
            }
          }
        }
      } catch (categoryError) {
        console.error("Error fetching category products:", categoryError);
      }

      if (category?.child?.length > 0) {
        for (const childCategory of category.child) {
          await processCategory(childCategory, categoryId);
        }
      }
    };

    try {
      const categories = await fetchJson(baseCategoryUrl, {
        method: "POST",
        redirect: "follow",
      });

      if (categories.code !== 200 || !categories?.data) {
        console.error("Unexpected response for categories:", categories);
        return;
      }

      for (const category of categories.data) {
        await processCategory(category);
      }

      console.log("All categories and products processed successfully.");
    } catch (error) {
      console.error("Error processing categories and products:", error);
    }
  }
  
  static async createProduct({
    data,
    req,
  }: {
    data: ProductModel;
    req: Request;
  }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data?.name?.name_en || !data?.cover_image) {
        return handleError(
          "Validation Error: Missing required fields",
          400,
          null
        );
      }

      const categoryIds = data?.category_id
        ? await this.findCategoryParents(data.category_id)
        : [];
      const newProduct = productRepository.create({
        ...data,
        category_ids: categoryIds,
        status: data.status || BaseStatus.ACTIVE,
        created_by: staffDataFromToken.id,
      });

      const savedProduct = await productRepository.save(newProduct);
      return handleSuccess(savedProduct);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateProduct({
    data,
    req,
  }: {
    data: ProductModel;
    req: Request;
  }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(data.id);
      if (!product) return handleError("Product not found", 404, null);

      const categoryIds = data?.category_id
        ? await this.findCategoryParents(data.category_id)
        : [];
      productRepository.merge(product, {
        ...data,
        category_ids: categoryIds,
        updated_by: staffDataFromToken.id,
      });

      const updatedProduct = await productRepository.save(product);
      return handleSuccess(updatedProduct);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteProduct({ id, req }: { id: string; req: Request }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(id);
      if (!product) return handleError("Product not found", 404, null);

      await productRepository.remove(product);
      return handleSuccess(null);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    return this.buildProductQuery(
      { req, where, page, limit, sortedBy },
      info,
      false
    );
  }

  static async adminGetProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    return this.buildProductQuery(
      { req, where, page, limit, sortedBy },
      info,
      true
    );
  }

  static async getBestSellingProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy },
      info
    );
    queryBuilder.orderBy({ sell_count: "DESC" });
    return this.executeQuery(queryBuilder, info);
  }

  static async getSimilarProducts(
    {
      req,
      where,
      page,
      limit,
    }: {
      req: Request;
      where: Partial<SimilarProductWhereInput>;
      page: number;
      limit: number;
    },
    info: GraphQLResolveInfo
  ) {
    const productRepository = getRepository(Product);

    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy: BaseOrderByInput.created_at_DESC },
      info
    );
    if (where?.product_id) {
      const product = await productRepository.findOne({
        where: { id: where.product_id },
        select: ["category_ids"],
      });
      if (product?.category_ids?.length) {
        queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
          category_ids: JSON.stringify(product.category_ids),
        });
      }
    }
    queryBuilder.addOrderBy("RANDOM()").take(limit);
    return this.executeQuery(queryBuilder, info);
  }

  static async searchProducts({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<ProductWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }) {
    const productRepository = getRepository(Product);

    const queryBuilder = productRepository.createQueryBuilder("product");
    if (where?.keyword) {
      queryBuilder.where("product.name ->> 'name_en' ILIKE :keyword", {
        keyword: `%${where.keyword}%`,
      });
    }
    queryBuilder
      .select([
        "product.id",
        "product.name",
        "product.price",
        "product.status",
        "product.cover_image",
        "product.description",
      ])
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(this.order(sortedBy) as any);
    const [products, total] = await queryBuilder.getManyAndCount();
    return handleSuccessWithTotalData(products, total);
  }

  static async getProduct({ id }: { id: string }) {
    try {
      const productRepository = getRepository(Product);
      const categoryRepository = getRepository(Category);

      const product = await productRepository.findOne({ where: { id } });
      if (!product) return handleError("Product not found", 404, null);

      if (product?.category_ids?.length) {
        const categories = await categoryRepository.findByIds(
          product.category_ids
        );
        product.categories = product.category_ids.map((id) =>
          categories.find((category) => category.id === id)
        ) as any;
      }

      return handleSuccess(product);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  private static buildProductQuery(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo,
    isAdmin: boolean
  ) {
    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy },
      info,
      isAdmin
    );
    if (isAdmin) {
      queryBuilder
        .leftJoinAndSelect("product.categoryData", "category")
        .leftJoinAndSelect("product.brandData", "brand");
    }
    return this.executeQuery(queryBuilder, info);
  }

  private static buildBaseQuery(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo,
    isAdmin = false
  ) {
    const productRepository = getRepository(Product);

    const queryBuilder = productRepository.createQueryBuilder("product");
    const selectFields = getRequestedFields(info, "getProducts.data");
    if (selectFields?.length) {
      const fields = selectFields
        .filter((field) => field !== "shopProductStatus")
        .map((field) => `product.${field}`);
      queryBuilder.select(fields);
    }

    if (!isAdmin) {
      try {
        const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
          req
        );
        if (shopDataFromToken?.id) {
          queryBuilder.leftJoinAndSelect(
            "product.shopProducts",
            "shopProduct",
            "shopProduct.shop_id = :shopId",
            { shopId: shopDataFromToken.id }
          );
        }
      } catch (error) {}
    }

    if (where?.keyword) {
      queryBuilder.andWhere(
        new Brackets((qb) => {
          qb.where("product.name ->> 'name_en' ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          }).orWhere("product.description ->> 'name_en' ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          });
        })
      );
    }

    if (where?.status)
      queryBuilder.andWhere("product.status = :status", {
        status: where.status,
      });
    if (where?.category_id)
      queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
        category_id: JSON.stringify([where.category_id]),
      });
    if (where?.brand_id)
      queryBuilder.andWhere("product.brand_id = :brand_id", {
        brand_id: where.brand_id,
      });
    if (where?.product_top)
      queryBuilder.andWhere("product.product_top = :product_top", {
        product_top: where.product_top,
      });
    if (where?.product_vip)
      queryBuilder.andWhere("product.product_vip = :product_vip", {
        product_vip: where.product_vip,
      });
    if (where?.price_between) {
      queryBuilder
        .andWhere("product.price >= :minPrice", {
          minPrice: where.price_between[0],
        })
        .andWhere("product.price <= :maxPrice", {
          maxPrice: where.price_between[1],
        });
    }
    if (where?.quantity !== undefined) {
      queryBuilder.andWhere(
        `product.quantity ${where.quantity > 0 ? ">=" : "<="} :quantity`,
        { quantity: where.quantity > 0 ? 1 : 0 }
      );
    }

    queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(this.order(sortedBy, where?.price_between) as any);
    return queryBuilder;
  }

  private static async executeQuery(
    queryBuilder: any,
    info: GraphQLResolveInfo
  ) {
    const selectFields = getRequestedFields(info, "getProducts.data");
    if (selectFields?.length <= 0) {
      const total = await queryBuilder.getCount();
      return handleSuccessWithTotalData([], total);
    }

    const [products, total] = await queryBuilder.getManyAndCount();
    products.forEach((product: Product) => {
      product.shopProductStatus =
        product.shopProducts?.[0]?.shopProductStatus || null;
    });

    return handleSuccessWithTotalData(products, total);
  }

  private static order(sortedBy: BaseOrderByInput, price = [0]) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { "product.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "product.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "product.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "product.updated_at": "DESC" };
      case BaseOrderByInput.sell_count_ASC:
        return { "product.sell_count": "ASC" };
      case BaseOrderByInput.sell_count_DESC:
        return { "product.sell_count": "DESC" };
      case BaseOrderByInput.price_ASC:
        return { "product.price": "ASC" };
      case BaseOrderByInput.price_DESC:
        return { "product.price": "DESC" };
      default:
        return { "product.created_at": "DESC" };
    }
  }

  private static async findCategoryParents(
    categoryId: string,
    categoryIds: string[] = []
  ) {
    try {
      const categoryRepository = getRepository(Category);

      const category = await categoryRepository.findOne({
        where: { id: categoryId },
      });
      if (category) {
        categoryIds.push(category.id);
        if (category.parent_id)
          await this.findCategoryParents(category.parent_id, categoryIds);
      }
      return categoryIds;
    } catch (error) {
      console.error("Error finding parent categories:", error);
      return categoryIds;
    }
  }
}
