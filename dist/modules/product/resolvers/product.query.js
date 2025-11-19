"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductQuery = void 0;
const baseType_1 = require("../../../utils/base/baseType");
const fetchProduct_1 = require("../../../utils/fetchProduct");
const fetchProductAPI_1 = require("../../../utils/fetchProductAPI");
const temuTokenExtractor_1 = require("../../../utils/temuTokenExtractor");
const services_1 = require("../services");
exports.ProductQuery = {
    getProducts: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) {
        return services_1.ProductService.getProducts({ req, where, page, limit, sortedBy }, info);
    }),
    adminGetProducts: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) {
        return services_1.ProductService.adminGetProducts({ where, page, limit, sortedBy, req }, info);
    }),
    getBestSellingProducts: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) {
        return services_1.ProductService.getBestSellingProducts({ where, page, limit, sortedBy, req }, info);
    }),
    getSimilarProducts: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, }, { req }, info) {
        return services_1.ProductService.getSimilarProducts({ where, page, limit, req }, info);
    }),
    searchProducts: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }) { return services_1.ProductService.searchProducts({ where, page, limit, sortedBy }); }),
    getProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return services_1.ProductService.getProduct({ id }); }),
    // Fetch Temu product data from URL
    getTemuProductData: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productUrl }) {
        try {
            // Fetch raw data from Temu
            const result = yield (0, fetchProduct_1.getTemuProductData)(productUrl);
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
            const productInfo = (0, fetchProduct_1.extractProductInfo)(result.data);
            const completeData = (0, fetchProduct_1.extractCompleteData)(result.data);
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
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error occurred",
                    code: "INTERNAL_ERROR",
                },
            };
        }
    }),
    // Fetch Temu product reviews via API
    getTemuReviews: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { goodsId, page, size, cookies, antiContent, verifyAuthToken, xPhanData, referer, }) {
        try {
            const result = yield (0, fetchProductAPI_1.fetchTemuReviews)({
                goods_id: goodsId,
                page: page || 1,
                size: size || 10,
                need_max_size: true,
                sort_type: 0,
                goods_review_label_show: true,
            }, {
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
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error occurred",
                    code: "INTERNAL_ERROR",
                },
            };
        }
    }),
    // Generic Temu API call
    callTemuAPI: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { endpoint, method, queryParams, body, cookies, antiContent, verifyAuthToken, xPhanData, referer, }) {
        try {
            // Parse queryParams if it's a JSON string
            let parsedQueryParams = {};
            if (queryParams) {
                try {
                    parsedQueryParams = JSON.parse(queryParams);
                }
                catch (_b) {
                    // If not JSON, assume it's URL query string
                    const params = new URLSearchParams(queryParams);
                    parsedQueryParams = Object.fromEntries(params.entries());
                }
            }
            // Parse body if it's a JSON string
            let parsedBody = null;
            if (body) {
                try {
                    parsedBody = JSON.parse(body);
                }
                catch (_c) {
                    parsedBody = body;
                }
            }
            const result = yield (0, fetchProductAPI_1.fetchTemuAPI)(endpoint, {
                method: (method || "GET"),
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
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error occurred",
                    code: "INTERNAL_ERROR",
                },
            };
        }
    }),
    // Fetch Temu reviews with automatic fresh token extraction
    getTemuReviewsAuto: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productUrl, goodsId, }) {
        try {
            console.log("🔄 Auto-fetching reviews with fresh token extraction...");
            const result = yield (0, temuTokenExtractor_1.fetchReviewsWithFreshTokens)(productUrl, goodsId);
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
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error occurred",
                    code: "INTERNAL_ERROR",
                },
            };
        }
    }),
};
