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
exports.orderQuery = void 0;
const baseType_1 = require("../../../utils/base/baseType");
const services_1 = require("../services");
exports.orderQuery = {
    shopGetOrders: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) { return services_1.OrderService.shopGetOrders({ where, page, limit, sortedBy, req, info }); }),
    customerGetOrders: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) { return services_1.OrderService.customerGetOrders({ where, page, limit, sortedBy, req, info }); }),
    adminGetOrders: (_1, _a, _b, info_1) => __awaiter(void 0, [_1, _a, _b, info_1], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }, info) { return services_1.OrderService.adminGetOrders({ where, page, limit, sortedBy, req, info }); }),
    shopGetOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.shopGetOrder({ id, req }); }),
    customerGetOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.customerGetOrder({ id, req }); }),
    adminGetOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.adminGetOrder({ id, req }); }),
    countNewOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { order_status }, { req }) { return services_1.OrderService.countNewOrder({ req, order_status }); }),
};
