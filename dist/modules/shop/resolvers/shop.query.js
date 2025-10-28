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
exports.shopQuery = void 0;
const baseType_1 = require("../../../utils/base/baseType");
const services_1 = require("../services");
exports.shopQuery = {
    getShops: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) { return services_1.ShopService.getShops({ where, page, limit, sortedBy, req }, info); }),
    adminGetShops: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) { return services_1.ShopService.adminGetShops({ where, page, limit, sortedBy, req }, info); }),
    getShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopService.getShop({ id, req }); }),
    adminGetShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopService.adminGetShop({ id, req }); }),
    getShopInformation: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.ShopService.getShopInformation({ req }); }),
    countShopRequestVIP: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.ShopService.countShopRequestVIP({ req }); }),
};
