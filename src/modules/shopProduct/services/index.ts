import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  ShopProductModel,
  ShopProductStatus,
  ShopProductWhereInput,
} from "../types";
import { Brackets, getRepository, In } from "typeorm";
import { ShopProduct } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { Product } from "../../product";
import { Category } from "../../category";
import { Shop } from "../../shop/entity";

export class ShopProductService {
  static async createShopProduct({
    data,
    req,
  }: {
    data: ShopProductModel;
    req: Request;
  }): Promise<Response<ShopProduct | null>> {
    const shopProductRepository = getRepository(ShopProduct);
    const productRepository = getRepository(Product);
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.quantity || !data.product_id) {
        return handleError("Validation Error", 400, null);
      }

      const product = await productRepository.findOne({
        where: { id: data.product_id },
      });

      if (!product) {
        return handleError("Product not found.", 404, null);
      }

      const shop = await shopRepository.findOne({
        where: { id: shopDataFromToken.id },
      });

      if (!shop) return handleError("Shop not found.", 404, null);
      if (shop.shop_vip < product.product_vip)
        return handleError(
          `You cannot apply this product VIP [${product.product_vip}] because you are in [${shop.shop_vip}].`,
          404,
          null
        );

      const existShopProduct = await shopProductRepository.findOne({
        where: {
          product_id: data.product_id,
          shop_id: shopDataFromToken?.id,
        },
      });

      if (existShopProduct) {
        if (existShopProduct?.shopProductStatus === ShopProductStatus?.ON_SHELF)
          return handleError("This product already in your shop.", 402, null);

        shopProductRepository.merge(existShopProduct, {
          ...data,
          shop_id: shopDataFromToken.id,
          shopProductStatus: ShopProductStatus?.ON_SHELF,
        } as any);

        const updatedShopProduct = await shopProductRepository.save(
          existShopProduct
        );
        return handleSuccess(updatedShopProduct as any);
      }

      const newShopProduct = shopProductRepository.create({
        ...data,
        created_by: shopDataFromToken?.id,
        shop_id: shopDataFromToken?.id,
      } as any);

      const savedShopProduct = await shopProductRepository.save(newShopProduct);

      return handleSuccess(savedShopProduct as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async createShopProducts({
    data,
    req,
  }: {
    data: ShopProductModel[];
    req: Request;
  }): Promise<Response<ShopProduct[] | null>> {
    const shopProductRepository = getRepository(ShopProduct);
    const productRepository = getRepository(Product);
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOne({
        where: { id: shopDataFromToken.id },
      });
      if (!shop) return handleError("Shop not found.", 404, null);

      // Get shop and products in parallel
      const [products] = await Promise.all([
        productRepository.find({
          where: {
            id: In(data.map((item) => item.product_id)),
          },
        }),
      ]);

      const productsAvailability = products.filter((item) => {
        return shop.shop_vip >= item.product_vip;
      });
      if (productsAvailability.length === 0) {
        return handleError(
          "No products were added - some may already exist in your shop.",
          402,
          null
        );
      }

      // Check for existing shop products
      const existingShopProducts = await shopProductRepository.find({
        where: {
          product_id: In(productsAvailability.map((item) => item.id)),
          shop_id: shopDataFromToken.id,
        },
      });

      const existingProductMap = new Map(
        existingShopProducts.map((ep) => [ep.product_id, ep])
      );

      // Process all items in parallel
      const results = await Promise.all(
        productsAvailability.map(async (item) => {
          const existingShopProduct = existingProductMap.get(item.id);

          if (existingShopProduct) {
            if (
              existingShopProduct.shopProductStatus ===
              ShopProductStatus.ON_SHELF
            ) {
              return null; // Skip existing products
            }

            shopProductRepository.merge(existingShopProduct, {
              product_id: item.id,
              quantity: item.quantity || 0,
              shop_id: shopDataFromToken.id,
              shopProductStatus: ShopProductStatus.ON_SHELF,
            });

            return await shopProductRepository.save(existingShopProduct);
          } else {
            const newShopProduct = shopProductRepository.create({
              product_id: item.id,
              quantity: item.quantity || 0,
              created_by: shopDataFromToken.id,
              shop_id: shopDataFromToken.id,
              shopProductStatus: ShopProductStatus.ON_SHELF,
            });

            return await shopProductRepository.save(newShopProduct);
          }
        })
      );

      // Filter out null values (skipped products)
      const successfulResults = results.filter(Boolean) as ShopProduct[];

      if (successfulResults.length === 0) {
        return handleError(
          "No products were added - some may already exist in your shop.",
          402,
          null
        );
      }

      return handleSuccessWithTotalData([], successfulResults.length);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async createShopProductsWithCategory({
    data,
    req,
  }: {
    data: ShopProductModel;
    req: Request;
  }): Promise<Response<ShopProduct[] | null>> {
    const shopProductRepository = getRepository(ShopProduct);
    const productRepository = getRepository(Product);
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOne({
        where: { id: shopDataFromToken.id },
      });
      if (!shop) return handleError("Shop not found.", 404, null);

      let results = [];
      let continues = true;
      const pageSize = 1000;
      let page = 1;

      while (continues) {
        // Get shop and products in parallel
        const [products] = await Promise.all([
          productRepository
            .createQueryBuilder("product")
            .where("product.category_ids::jsonb @> :category_id", {
              category_id: JSON.stringify([data.category_id]),
            })
            .orderBy("product.created_at", "ASC")
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getMany(),
        ]);

        if (products.length === 0) {
          continues = false;
          break;
        }

        const productsAvailability = products.filter((item) => {
          if (item && shop.shop_vip >= item.product_vip) {
            return item;
          }
        });

        // Check for existing shop products
        const existingShopProducts = await shopProductRepository.find({
          where: {
            product_id: In(productsAvailability.map((item) => item.id)),
            shop_id: shopDataFromToken.id,
          },
        });

        const existingProductMap = new Map(
          existingShopProducts.map((ep) => [ep.product_id, ep])
        );

        // Process all items in parallel
        const _results = await Promise.all(
          productsAvailability.map(async (item) => {
            const existingShopProduct = existingProductMap.get(item.id);

            if (existingShopProduct) {
              if (
                existingShopProduct.shopProductStatus ===
                ShopProductStatus.ON_SHELF
              ) {
                return null; // Skip existing products
              }

              shopProductRepository.merge(existingShopProduct, {
                product_id: item.id,
                quantity: item.quantity || 0,
                shop_id: shopDataFromToken.id,
                shopProductStatus: ShopProductStatus.ON_SHELF,
              });

              return await shopProductRepository.save(existingShopProduct);
            } else {
              const newShopProduct = shopProductRepository.create({
                product_id: item.id,
                quantity: item.quantity || 0,
                created_by: shopDataFromToken.id,
                shop_id: shopDataFromToken.id,
                shopProductStatus: ShopProductStatus.ON_SHELF,
              });

              return await shopProductRepository.save(newShopProduct);
            }
          })
        );

        results.push(..._results);
        page++;
      }

      // Filter out null values (skipped products)
      const successfulResults = results.filter(Boolean) as ShopProduct[];

      if (successfulResults.length === 0) {
        return handleError(
          "No products were added - some may already exist in your shop.",
          402,
          null
        );
      }

      return handleSuccessWithTotalData([], successfulResults.length);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async createShopProductsWithVIPLevel({
    data,
    req,
  }: {
    data: ShopProductModel;
    req: Request;
  }): Promise<Response<ShopProduct[] | null>> {
    const shopProductRepository = getRepository(ShopProduct);
    const productRepository = getRepository(Product);
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOne({
        where: { id: shopDataFromToken.id },
      });
      if (!shop) return handleError("Shop not found.", 404, null);

      if (!shop) return handleError("Shop not found.", 404, null);
      if (shop.shop_vip < data.vip)
        return handleError(
          `You cannot apply these product VIP [${data.vip}] because you are in [${shop.shop_vip}].`,
          404,
          null
        );

      let results = [];
      let continues = true;
      const pageSize = 1000;
      let page = 1;

      while (continues) {
        // Get shop and products in parallel
        const [products] = await Promise.all([
          productRepository
            .createQueryBuilder("product")
            .where("product.product_vip = :vip", {
              vip: data.vip,
            })
            .orderBy("product.created_at", "ASC")
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getMany(),
        ]);

        if (products.length === 0) {
          continues = false;
          break;
        }

        const productsAvailability = products.filter((item) => {
          if (item && shop.shop_vip >= item.product_vip) {
            return item;
          }
        });

        // Check for existing shop products
        const existingShopProducts = await shopProductRepository.find({
          where: {
            product_id: In(productsAvailability.map((item) => item.id)),
            shop_id: shopDataFromToken.id,
          },
        });

        const existingProductMap = new Map(
          existingShopProducts.map((ep) => [ep.product_id, ep])
        );

        // Process all items in parallel
        const _results = await Promise.all(
          productsAvailability.map(async (item) => {
            const existingShopProduct = existingProductMap.get(item.id);

            if (existingShopProduct) {
              if (
                existingShopProduct.shopProductStatus ===
                ShopProductStatus.ON_SHELF
              ) {
                return null; // Skip existing products
              }

              shopProductRepository.merge(existingShopProduct, {
                product_id: item.id,
                quantity: item.quantity || 0,
                shop_id: shopDataFromToken.id,
                shopProductStatus: ShopProductStatus.ON_SHELF,
              });

              return await shopProductRepository.save(existingShopProduct);
            } else {
              const newShopProduct = shopProductRepository.create({
                product_id: item.id,
                quantity: item.quantity || 0,
                created_by: shopDataFromToken.id,
                shop_id: shopDataFromToken.id,
                shopProductStatus: ShopProductStatus.ON_SHELF,
              });

              return await shopProductRepository.save(newShopProduct);
            }
          })
        );

        results.push(..._results);
        page++;
      }

      // Filter out null values (skipped products)
      const successfulResults = results.filter(Boolean) as ShopProduct[];

      if (successfulResults.length === 0) {
        return handleError(
          "No products were added - some may already exist in your shop.",
          402,
          null
        );
      }

      return handleSuccessWithTotalData([], successfulResults.length);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateShopProduct({
    data,
    req,
  }: {
    data: ShopProductModel;
    req: Request;
  }): Promise<Response<ShopProduct | null>> {
    const shopProductRepository = getRepository(ShopProduct);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopProduct = await shopProductRepository.findOne({
        where: { id: data.id, shop_id: shopDataFromToken?.id } as any,
      });

      if (!shopProduct) {
        return handleError("Product not found", 404, null);
      }

      shopProduct.updated_by = shopDataFromToken?.id;

      shopProductRepository.merge(shopProduct, data as any);

      const updatedShopProduct = await shopProductRepository.save(shopProduct);

      return handleSuccess(updatedShopProduct);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteShopProduct({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const shopProductRepository = getRepository(ShopProduct);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopProduct = await shopProductRepository.findOne({
        where: { id: id, shop_id: shopDataFromToken?.id } as any,
      });

      if (!shopProduct) {
        return handleError("Product not found", 404, null);
      }

      shopProductRepository.merge(shopProduct, {
        shopProductStatus: ShopProductStatus?.UN_SHELF,
      });

      const updatedShopProduct = await shopProductRepository.save(shopProduct);

      // await shopProductRepository.remove(shopProduct);

      return handleSuccess(updatedShopProduct as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopProducts(
    {
      where,
      page,
      limit,
      sortedBy,
    }: {
      where: Partial<ShopProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<ShopProduct[] | null>> {
    const shopProductRepository = getRepository(ShopProduct);

    try {
      const order = this.order(sortedBy);

      const queryBuilder =
        shopProductRepository.createQueryBuilder("shopProduct");

      // Add LEFT JOIN with Product
      queryBuilder.leftJoinAndSelect("shopProduct.productData", "product");

      // Select specific fields for both shopProduct and product
      queryBuilder.select([
        // Fields from shopProduct
        "shopProduct.id",
        "shopProduct.quantity",
        "shopProduct.status",
        "shopProduct.created_at",
        "shopProduct.product_id",
        "shopProduct.sell_count",
        "shopProduct.shopProductStatus",

        // Specific fields from product
        "product.id",
        "product.name",
        "product.price",
        "product.cover_image",
        "product.images",
        "product.total_star",
        "product.product_vip",
        "product.product_top",
      ]);

      // Add keyword filter
      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("product.name ->> 'name_en' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              // .orWhere("product.name ->> 'name_es' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_ms' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_jp' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_th' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_vi' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_zh' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              // .orWhere("product.name ->> 'name_zh_tw' ILIKE :keyword", {
              //   keyword: `%${where.keyword}%`,
              // })
              .orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
            // .orWhere("product.description ->> 'name_es' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_ms' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_jp' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_th' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_vi' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_zh' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // })
            // .orWhere("product.description ->> 'name_zh_tw' ILIKE :keyword", {
            //   keyword: `%${where.keyword}%`,
            // });
          })
        );
      }

      queryBuilder.andWhere("shopProduct.shop_id = :shopId", {
        shopId: where.shop_id,
      });

      // Add status filter
      if (where?.shopProductStatus) {
        queryBuilder.andWhere(
          "shopProduct.shopProductStatus = :shopProductStatus",
          {
            shopProductStatus: where.shopProductStatus,
          }
        );
      }
      if (where?.status) {
        queryBuilder.andWhere("shopProduct.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "shopProduct.created_at BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where.createdAtBetween.endDate,
          }
        );
      }

      if (where?.quantity && where?.quantity > 0) {
        queryBuilder.andWhere("shopProduct.quantity >= :quantity", {
          quantity: 1,
        });
      } else if (where?.quantity == 0) {
        queryBuilder.andWhere("shopProduct.quantity <= :quantity", {
          quantity: 0,
        });
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [shopProducts, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(shopProducts, total);
    } catch (error: any) {
      console.log({ error });
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopProduct({
    id,
  }: {
    id: string;
  }): Promise<Response<ShopProduct | null>> {
    const shopProductRepository = getRepository(ShopProduct);

    try {
      const queryBuilder =
        shopProductRepository.createQueryBuilder("shopProduct");

      // Add LEFT JOIN with Product
      queryBuilder.leftJoinAndSelect("shopProduct.productData", "product");

      queryBuilder.andWhere("shopProduct.id = :shopProductId", {
        shopProductId: id,
      });

      let shopProduct = await queryBuilder.getOne();

      if (!shopProduct) {
        return handleError("Product not found", 404, null);
      }

      if (shopProduct?.productData?.category_ids?.length) {
        // Use QueryBuilder to fetch related categories
        const categories = await getRepository(Category)
          .createQueryBuilder("category")
          .where("category.id IN (:...ids)", {
            ids: shopProduct?.productData?.category_ids,
          })
          .getMany();

        // Sort categories to match the order of `category_ids`
        const sortedCategories = shopProduct?.productData?.category_ids.map(
          (id) => categories.find((category) => category.id === id)
        );
        shopProduct = {
          ...shopProduct,
          productData: {
            ...shopProduct?.productData,
            categories: sortedCategories,
          },
        } as any;
      }

      return handleSuccess(shopProduct);
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
        return { "shopProduct.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "shopProduct.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "shopProduct.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "shopProduct.updated_at": "DESC" };
      case BaseOrderByInput.sell_count_ASC:
        return { "shopProduct.sell_count": "ASC" };
      case BaseOrderByInput.sell_count_DESC:
        return { "shopProduct.sell_count": "DESC" };
      default:
        return { "shopProduct.created_at": "DESC" }; // Default order
    }
  }
}
