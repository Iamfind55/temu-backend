"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopResolvers = void 0;
const shop_mutation_1 = require("./shop.mutation");
const shop_query_1 = require("./shop.query");
const shop_subscribe_1 = require("./shop.subscribe");
exports.shopResolvers = {
    Query: Object.assign({}, shop_query_1.shopQuery),
    Mutation: Object.assign({}, shop_mutation_1.shopMutation),
    Subscription: Object.assign({}, shop_subscribe_1.shopSubscribe),
};
