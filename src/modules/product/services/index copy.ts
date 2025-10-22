import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
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
  }): Promise<Response<Product | null>> {
    const productRepository = getRepository(Product);

    try {
      // Verify the staff token
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      // Validate required fields
      if (!data?.name?.name_en || !data?.cover_image) {
        return handleError(
          "Validation Error: Missing required fields",
          400,
          null
        );
      }

      // Collect category IDs, including parent categories
      let categoryIds: string[] = [];
      if (data?.category_id) {
        categoryIds = await this.findCategoryParents(data.category_id);
      }

      // return handleError(categoryIds.toString(), 500, categoryIds);
      // Create a new product instance
      const newProduct = productRepository.create({
        ...data,
        category_ids: categoryIds, // Ensure the field matches your entity definition
        status: data.status || BaseStatus.ACTIVE,
        created_by: staffDataFromToken.id,
      } as any);

      // Save the product to the database
      const savedProduct = await productRepository.save(newProduct);

      return handleSuccess(savedProduct as any);
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
  }): Promise<Response<Product | null>> {
    const productRepository = getRepository(Product);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(data.id);

      if (!product) {
        return handleError("Product not found", 404, null);
      }

      product.updated_by = staffDataFromToken?.id;

      // Collect category IDs, including parent categories
      let categoryIds: string[] = [];
      if (data?.category_id) {
        categoryIds = await this.findCategoryParents(data.category_id);
      }

      productRepository.merge(product, {
        ...data,
        category_ids: categoryIds,
      } as any);

      const updatedProduct = await productRepository.save(product);

      return handleSuccess(updatedProduct as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteProduct({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const productRepository = getRepository(Product);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(id);

      if (!product) {
        return handleError("Product not found", 404, null);
      }

      productRepository.merge(product, {
        isActive: false,
      } as any);

      await productRepository.remove(product);

      return handleSuccess(product as any);
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
  ): Promise<Response<Product[] | null>> {
    const productRepository = getRepository(Product);

    try {
      const order = this.order(sortedBy, where?.price_between as number[]);
      const queryBuilder = productRepository.createQueryBuilder("product");

      // Dynamically select fields requested in GraphQL query
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "shopProductStatus")
          .map((field) => `product.${field}`);

        queryBuilder.select(fields);
      }

      // Apply shop-specific logic if a shop token exists
      try {
        const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
          req
        );
        const shopId = shopDataFromToken?.id; // Extract shop ID if token is valid

        if (shopId) {
          queryBuilder.leftJoinAndSelect(
            "product.shopProducts",
            "shopProduct",
            "shopProduct.shop_id = :shopId",
            { shopId: shopId }
          );
        }
      } catch (error) {}

      // Apply filters
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

      if (where?.status) {
        queryBuilder.andWhere("product.status = :status", {
          status: where.status,
        });
      }

      if (where?.category_id) {
        queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
          category_id: JSON.stringify([where.category_id]),
        });
      }

      if (where?.brand_id) {
        queryBuilder.andWhere("product.brand_id = :brand_id", {
          brand_id: where.brand_id,
        });
      }

      if (where?.product_top) {
        queryBuilder.andWhere("product.product_top = :product_top", {
          product_top: where.product_top,
        });
      }

      if (where?.product_vip) {
        queryBuilder.andWhere("product.product_vip = :product_vip", {
          product_vip: where.product_vip,
        });
      }

      if (where?.price_between) {
        queryBuilder
          .andWhere("product.price >= :minPrice", {
            minPrice: where.price_between[0],
          })
          .andWhere("product.price <= :maxPrice", {
            maxPrice: where.price_between[1],
          });
      }

      if (where?.quantity && where.quantity > 0) {
        queryBuilder.andWhere("product.quantity >= :quantity", { quantity: 1 });
      } else if (where?.quantity === 0) {
        queryBuilder.andWhere("product.quantity <= :quantity", { quantity: 0 });
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
      // console.log({ sql: queryBuilder.getSql() });
      // const _products = await queryBuilder.getMany();

      const [products, total] = await queryBuilder.getManyAndCount();

      products.forEach((product) => {
        if (product.shopProducts && product.shopProducts.length > 0) {
          product.shopProductStatus = product.shopProducts[0].shopProductStatus;
        } else {
          product.shopProductStatus = null;
        }
      });

      return handleSuccessWithTotalData(products, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetProducts(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo // Pass the GraphQL `info` object
  ): Promise<Response<Product[] | null>> {
    const productRepository = getRepository(Product);

    try {
      // Verify the staff token
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      const order = this.order(sortedBy, where?.price_between as number[]);

      const queryBuilder = productRepository.createQueryBuilder("product");

      // Add LEFT JOIN with Category
      queryBuilder.leftJoinAndSelect("product.categoryData", "category");
      queryBuilder.leftJoinAndSelect("product.brandData", "brand");

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "shopProductStatus")
          .map((field) => `product.${field}`);
        queryBuilder.select([
          ...fields,
          "category.id",
          "category.name",
          "brand.id",
          "brand.name",
        ]);
      }

      // Group `OR` conditions for keyword search
      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.orWhere("product.name ->> 'name_en' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("category.name ->> 'name_en' ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      // Additional conditions with `AND` logic
      if (where?.status) {
        queryBuilder.andWhere("product.status = :status", {
          status: where.status,
        });
      }

      if (where?.category_id) {
        queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
          category_id: JSON.stringify([where.category_id]),
        });
      }

      if (where?.brand_id) {
        queryBuilder.andWhere("product.brand_id = :brand_id", {
          brand_id: where.brand_id,
        });
      }

      if (where?.product_top) {
        queryBuilder.andWhere("product.product_top = :product_top", {
          product_top: where.product_top,
        });
      }

      if (where?.product_vip) {
        queryBuilder.andWhere("product.product_vip = :product_vip", {
          product_vip: where.product_vip,
        });
      }

      if (where?.price_between) {
        console.log("object", where.price_between[0], where.price_between[1]);
        queryBuilder
          .andWhere("product.price >= :minPrice", {
            minPrice: where.price_between[0],
          })
          .andWhere("product.price <= :maxPrice", {
            maxPrice: where.price_between[1],
          });
      }

      if (where?.quantity && where?.quantity > 0) {
        queryBuilder.andWhere("product.quantity >= :quantity", {
          quantity: 1,
        });
      } else if (where?.quantity == 0) {
        queryBuilder.andWhere("product.quantity <= :quantity", {
          quantity: 0,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(product.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where.createdAtBetween.endDate,
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

      const [products, total] = await queryBuilder.getManyAndCount();
      console.log({ products });
      return handleSuccessWithTotalData(products, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getBestSellingProducts(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo // Pass the GraphQL `info` object
  ): Promise<Response<Product[] | null>> {
    const productRepository = getRepository(Product);

    try {
      const queryBuilder = productRepository.createQueryBuilder("product");

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "shopProductStatus")
          .map((field) => `product.${field}`);
        queryBuilder.select(fields);
      }

      // Pagination and sorting
      queryBuilder.take(limit).orderBy({ sell_count: "DESC" });

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      // Apply shop-specific logic if a shop token exists
      try {
        const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
          req
        );
        const shopId = shopDataFromToken?.id; // Extract shop ID if token is valid

        if (shopId) {
          queryBuilder.leftJoinAndSelect(
            "product.shopProducts",
            "shopProduct",
            "shopProduct.shop_id = :shopId",
            { shopId: shopId }
          );
        }
      } catch (error) {}

      const [products, total] = await queryBuilder.getManyAndCount();

      products.forEach((product) => {
        if (product.shopProducts && product.shopProducts.length > 0) {
          product.shopProductStatus = product.shopProducts[0].shopProductStatus;
        } else {
          product.shopProductStatus = null;
        }
      });

      return handleSuccessWithTotalData(products, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getSimilarProducts(
    {
      where,
      page,
      limit,
      req,
    }: {
      where: Partial<SimilarProductWhereInput>;
      page: number;
      limit: number;
      req: Request;
    },
    info: GraphQLResolveInfo // Pass the GraphQL `info` object
  ): Promise<Response<Product[] | null>> {
    const productRepository = getRepository(Product);

    try {
      const queryBuilder = productRepository.createQueryBuilder("product");

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields
          .filter((field) => field !== "shopProductStatus")
          .map((field) => `product.${field}`);
        queryBuilder.select(fields);
      }

      // Apply shop-specific logic if a shop token exists
      try {
        const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
          req
        );
        const shopId = shopDataFromToken?.id; // Extract shop ID if token is valid

        if (shopId) {
          queryBuilder.leftJoinAndSelect(
            "product.shopProducts",
            "shopProduct",
            "shopProduct.shop_id = :shopId",
            { shopId: shopId }
          );
        }
      } catch (error) {}

      if (where?.product_id) {
        const _queryBuilder = productRepository.createQueryBuilder("product");
        const product: any = await _queryBuilder
          .select(["product.category_ids"])
          .where("product.id = :productId", { productId: where?.product_id })
          .getOne();
        if (product && !product?.category_ids?.length) {
          return handleSuccessWithTotalData([], 0);
        }

        queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
          category_ids: JSON.stringify(product?.category_ids || []),
        });

        for (const categoryId of product?.category_ids || []) {
          queryBuilder.andWhere((qb) => {
            qb.where("product.category_ids::jsonb @> :category_id", {
              category_id: JSON.stringify(categoryId),
            });
          });
        }
      }

      // Pagination and sorting
      queryBuilder
        .addOrderBy("RANDOM()")
        // .skip((page - 1) * limit)
        .take(limit);

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [products, total] = await queryBuilder.getManyAndCount();

      products.forEach((product) => {
        if (product.shopProducts && product.shopProducts.length > 0) {
          product.shopProductStatus = product.shopProducts[0].shopProductStatus;
        } else {
          product.shopProductStatus = null;
        }
      });

      return handleSuccessWithTotalData(products, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
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
  }): Promise<Response<Product[] | null>> {
    const productRepository = getRepository(Product);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = productRepository.createQueryBuilder("product");

      queryBuilder.select("product.id", "product.name");

      if (where?.keyword) {
        queryBuilder.where(
          new Brackets((qb) => {
            qb.where("product.name ->> 'name_en' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      // Pagination and sorting
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
        .orderBy(order as any);

      const [products, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(products, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getProduct({
    id,
  }: {
    id: string;
  }): Promise<Response<Product | null>> {
    const productRepository = getRepository(Product);

    try {
      // Fetch product with category_ids
      let product = await productRepository.findOne({ where: { id } });

      if (!product) {
        return handleError("Product not found", 404, null);
      }

      if (product?.category_ids?.length) {
        // Use QueryBuilder to fetch related categories
        const categories = await getRepository(Category)
          .createQueryBuilder("category")
          .where("category.id IN (:...ids)", { ids: product.category_ids })
          .getMany();

        // Sort categories to match the order of `category_ids`
        const sortedCategories = product.category_ids.map((id) =>
          categories.find((category) => category.id === id)
        );

        product = { ...product, categories: sortedCategories } as any;
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

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput, price = [0]) {
    // if (price.length > 1) {
    //   return { "product.price": "DESC" };
    // }
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
        return { "product.created_at": "DESC" }; // Default order
    }
  }

  static findCategoryParents = async (
    categoryId: string,
    categoryIds: string[] = [] // Pass an accumulator array
  ): Promise<string[]> => {
    try {
      const categoryRepository = getRepository(Category);

      const category = await categoryRepository.findOne({
        where: { id: categoryId },
      });

      if (category) {
        categoryIds.push(category.id); // Add the current category ID

        if (category.parent_id) {
          // Recursive call with the accumulator array
          await this.findCategoryParents(category.parent_id, categoryIds);
        }
      }

      return categoryIds; // Return the accumulated array
    } catch (error) {
      console.error("Error finding parent categories:", error);
      return categoryIds; // Return whatever is accumulated so far
    }
  };
}
