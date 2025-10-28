"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistorySubscribe = void 0;
const pubsub_1 = __importDefault(require("../../../utils/pubsub"));
exports.transactionHistorySubscribe = {
    transactionSubscribe: {
        subscribe: (_) => {
            return pubsub_1.default.asyncIterator(`NEW_TRANSACTION_SUBSCRIBE`); // Global new order
        },
    },
};
