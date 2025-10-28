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
exports.shopMutation = void 0;
const services_1 = require("../services");
exports.shopMutation = {
    createShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.createShop({ data: data, req }); }),
    shopRegister: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.shopRegister({ data: data, req }); }),
    shopVerifyOTP: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.shopVerifyOTP({ data: data, req }); }),
    adminUpdateShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.adminUpdateShop({ data: data, req }); }),
    adminApproveShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopService.adminApproveShop({ id: id, req }); }),
    updateShopInformation: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.updateShopInformation({ data: data, req }); }),
    deleteShop: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopService.deleteShop({ id, req }); }),
    shopLogin: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where }, { req }) { return services_1.ShopService.shopLogin({ where }); }),
    shopForgotPassword: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { email }, { req }) { return services_1.ShopService.shopForgotPassword({ email }); }),
    shopResetPassword: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.shopResetPassword({ data: data, req }); }),
    shopRequestVIP: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopService.shopRequestVIP({ data: data, req }); }),
    adminApproveShopRequestVIP: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopService.adminApproveShopRequestVIP({ id: id, req }); }),
};
