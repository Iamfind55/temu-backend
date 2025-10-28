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
exports.orderMutation = void 0;
const services_1 = require("../services");
exports.orderMutation = {
    createOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.OrderService.createOrder({ data: data, req }); }),
    adminCreateOrderForCustomer: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { customer_id, data }, { req }) { return services_1.OrderService.adminCreateOrderForCustomer({ customer_id, data: data, req }); }),
    payOrderFailed: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.payOrderFailed({ id, req }); }),
    cancelOrderFailed: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.cancelOrderFailed({ id, req }); }),
    shopCancelOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.shopCancelOrder({ id, req }); }),
    shopConfirmOrder: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.OrderService.shopConfirmOrder({ id, req }); }),
    adminUpdateOrderWithStatus: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.OrderService.adminUpdateOrderWithStatus({ data, req }); }),
};
