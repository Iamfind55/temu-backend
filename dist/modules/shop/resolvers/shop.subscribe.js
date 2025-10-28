"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopSubscribe = void 0;
const pubsub_1 = __importDefault(require("../../../utils/pubsub"));
exports.shopSubscribe = {
    subscribeNewRequestVIP: {
        subscribe: (_) => {
            return pubsub_1.default.asyncIterator(`NEW_SHOP_REQUEST_VIP_SUBSCRIBE`); // Global new order
        },
    },
};
