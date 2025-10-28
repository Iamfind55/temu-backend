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
};
