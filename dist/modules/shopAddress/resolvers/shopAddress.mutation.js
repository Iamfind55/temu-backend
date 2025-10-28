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
exports.shopAddressMutation = void 0;
const services_1 = require("../services");
exports.shopAddressMutation = {
    // Shop
    createShopAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopAddressService.createShopAddress({ data: data, req }); }),
    updateShopAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopAddressService.updateShopAddress({ data: data, req }); }),
    setShopAddressDefaultToUse: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopAddressService.setShopAddressDefaultToUse({ id, req }); }),
    deleteShopAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopAddressService.deleteShopAddress({ id, req }); }),
    // Customer
    createCustomerAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopAddressService.createShopAddress({ data: data, req }); }),
    updateCustomerAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.ShopAddressService.updateShopAddress({ data: data, req }); }),
    setCustomerAddressDefaultToUse: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopAddressService.setShopAddressDefaultToUse({ id, req }); }),
    deleteCustomerAddress: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.ShopAddressService.deleteShopAddress({ id, req }); }),
};
