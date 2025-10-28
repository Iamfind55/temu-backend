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
exports.shopProductMutation = void 0;
const services_1 = require("../services");
exports.shopProductMutation = {
    createManyShopProducts: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopProductService.createShopProducts({ data: data, req }); }),
    createShopProductsWithCategory: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopProductService.createShopProductsWithCategory({ data: data, req }); }),
    createShopProductsWithVIPLevel: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopProductService.createShopProductsWithVIPLevel({ data: data, req }); }),
    createShopProduct: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopProductService.createShopProduct({ data: data, req }); }),
    updateShopProduct: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopProductService.updateShopProduct({ data: data, req }); }),
    deleteShopProduct: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopProductService.deleteShopProduct({ id, req }); }),
};
