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
exports.transactionHistoryQuery = void 0;
const baseType_1 = require("../../../utils/base/baseType");
const services_1 = require("../services");
exports.transactionHistoryQuery = {
    shopGetTransactionHistories: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }) {
        return services_1.TransactionHistoryService.shopCustomerGetTransactionHistories({
            where,
            page,
            limit,
            sortedBy,
            req,
        });
    }),
    shopGetTransactionHistory: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.TransactionHistoryService.shopGetTransactionHistory({ id, req }); }),
    // customer
    customerGetTransactionHistories: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }) {
        return services_1.TransactionHistoryService.shopCustomerGetTransactionHistories({
            where,
            page,
            limit,
            sortedBy,
            req,
        });
    }),
    customerGetTransactionHistory: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.TransactionHistoryService.customerGetTransactionHistory({ id, req }); }),
    // admin
    adminGetTransactionHistories: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }, { req }) {
        return services_1.TransactionHistoryService.adminGetTransactionHistories({
            where,
            page,
            limit,
            sortedBy,
            req,
        });
    }),
    adminGetTransactionHistory: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.TransactionHistoryService.adminGetTransactionHistory({ id, req }); }),
    countNewTransaction: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { identifier }, { req }) { return services_1.TransactionHistoryService.countNewTransaction({ req, identifier }); }),
};
