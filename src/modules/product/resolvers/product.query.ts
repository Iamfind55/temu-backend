import { Request } from "express";
import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import {
  extractCompleteData,
  extractProductInfo,
  getTemuProductData,
} from "../../../utils/fetchProduct";
import {
  fetchTemuAPI,
  fetchTemuReviews
} from "../../../utils/fetchProductAPI";
import { fetchReviewsWithFreshTokens } from "../../../utils/temuTokenExtractor";
import { ProductService } from "../services";
import {
  ProductWhereInput,
  SimilarProductWhereInput
} from "../types";

export const ProductQuery = {
  getProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getProducts(
      { req, where, page, limit, sortedBy },
      info
    );
  },
  adminGetProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.adminGetProducts(
      { where, page, limit, sortedBy, req },
      info
    );
  },
  getBestSellingProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getBestSellingProducts(
      { where, page, limit, sortedBy, req },
      info
    );
  },
  getSimilarProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
    }: {
      where: SimilarProductWhereInput;
      page: number;
      limit: number;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getSimilarProducts({ where, page, limit, req }, info);
  },
  searchProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ProductService.searchProducts({ where, page, limit, sortedBy }),

  getProduct: async (_: any, { id }: { id: string }) =>
    ProductService.getProduct({ id }),

  // Fetch Temu product data from URL
  getTemuProductData: async (
    _: any,
    { productUrl }: { productUrl: string }
  ) => {
    try {
      // Fetch raw data from Temu
      const result = await getTemuProductData(productUrl);

      if (!result || !result.success) {
        return {
          success: false,
          error: {
            message: "Failed to fetch Temu product data",
            code: "FETCH_FAILED",
          },
        };
      }

      // Extract structured data
      const productInfo = extractProductInfo(result.data);
      const completeData = extractCompleteData(result.data);

      return {
        success: true,
        source: result.source,
        data: result.data, // Full window.rawData
        product: result.product, // Quick access to goods
        reviews: result.reviews, // Quick access to reviews
        categories: result.categories, // Quick access to categories
        activityInfo: result.activityInfo, // Benefits: FREE_SHIPPING, DELIVERY_GUARANTEE, etc.
        productInfo, // Structured product info
        completeData, // All structured data
        headersData: result.headersData, // Header data
        reviewStore: result.reviewStore, // Review store
        cartScene: result.cartScene, // Cart scene
        deliveryTag: result.deliveryTag, // Delivery tag
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: error?.message || "Unknown error occurred",
          code: "INTERNAL_ERROR",
        },
      };
    }
  },

  // Fetch Temu product reviews via API
  getTemuReviews: async (
    _: any,
    {
      goodsId,
      page,
      size,
      cookies,
      antiContent,
      verifyAuthToken,
      xPhanData,
      referer,
    }: {
      goodsId: string;
      page?: number;
      size?: number;
      cookies?: string;
      antiContent?: string;
      verifyAuthToken?: string;
      xPhanData?: string;
      referer?: string;
    }
  ) => {
    try {
      const result = await fetchTemuReviews(
        {
          goods_id: goodsId,
          page: page || 1,
          size: size || 10,
          need_max_size: true,
          sort_type: 0,
          goods_review_label_show: true,
        },
        {
          cookies,
          antiContent,
          verifyAuthToken,
          xPhanData,
          referer,
          xDocumentReferer: "https://www.temu.com/?is_back=1",
        }
      );

      return {
        success: result.success,
        data: result.data,
        status: result.status,
        error: result.error
          ? {
              message: result.error,
              code: "API_ERROR",
            }
          : null,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: error?.message || "Unknown error occurred",
          code: "INTERNAL_ERROR",
        },
      };
    }
  },

  // Generic Temu API call
  callTemuAPI: async (
    _: any,
    {
      endpoint,
      method,
      queryParams,
      body,
      cookies,
      antiContent,
      verifyAuthToken,
      xPhanData,
      referer,
    }: {
      endpoint: string;
      method?: string;
      queryParams?: string;
      body?: string;
      cookies?: string;
      antiContent?: string;
      verifyAuthToken?: string;
      xPhanData?: string;
      referer?: string;
    }
  ) => {
    try {
      // Parse queryParams if it's a JSON string
      let parsedQueryParams: Record<string, string> = {};
      if (queryParams) {
        try {
          parsedQueryParams = JSON.parse(queryParams);
        } catch {
          // If not JSON, assume it's URL query string
          const params = new URLSearchParams(queryParams);
          parsedQueryParams = Object.fromEntries(params.entries());
        }
      }

      // Parse body if it's a JSON string
      let parsedBody: any = null;
      if (body) {
        try {
          parsedBody = JSON.parse(body);
        } catch {
          parsedBody = body;
        }
      }

      const result = await fetchTemuAPI(endpoint, {
        method: (method || "GET") as any,
        queryParams: parsedQueryParams,
        body: parsedBody,
        cookies,
        antiContent,
        verifyAuthToken,
        xPhanData,
        referer,
        xDocumentReferer: "https://www.temu.com/?is_back=1",
      });

      return {
        success: result.success,
        data: result.data,
        status: result.status,
        error: result.error
          ? {
              message: result.error,
              code: "API_ERROR",
            }
          : null,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: error?.message || "Unknown error occurred",
          code: "INTERNAL_ERROR",
        },
      };
    }
  },

  // Fetch Temu reviews with automatic fresh token extraction
  getTemuReviewsAuto: async (
    _: any,
    {
      productUrl,
      goodsId,
    }: {
      productUrl: string;
      goodsId: string;
    }
  ) => {
    try {
      console.log("🔄 Auto-fetching reviews with fresh token extraction...");

      const result = await fetchReviewsWithFreshTokens(
        productUrl,
        goodsId
      );

      return {
        success: result.success,
        data: result.data,
        status: result.status,
        error: result.error
          ? {
              message: result.error,
              code: "API_ERROR",
            }
          : null,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: error?.message || "Unknown error occurred",
          code: "INTERNAL_ERROR",
        },
      };
    }
  },
};
