"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSubscribe = void 0;
const pubsub_1 = __importDefault(require("../../../utils/pubsub"));
exports.orderSubscribe = {
    subscribeNewOrder: {
        subscribe: (_, { shopId }) => {
            if (shopId)
                return pubsub_1.default.asyncIterator(`NEW_ORDER_SUBSCRIBE_${shopId}`);
            // Shop-specific channel
            else
                return pubsub_1.default.asyncIterator(`NEW_ORDER_SUBSCRIBE`); // Global new order
        },
    },
    subscribeUpdateOrderStatus: {
        subscribe: (_, { shopId }) => {
            if (shopId)
                return pubsub_1.default.asyncIterator(`UPDATE_ORDER_STATUS_SBUSCRIBE_${shopId}`);
            // Shop-specific channel
            else
                return pubsub_1.default.asyncIterator(`UPDATE_ORDER_STATUS_SBUSCRIBE`); // Global new order
        },
    },
};
