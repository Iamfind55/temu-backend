"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolvers = void 0;
const order_mutation_1 = require("./order.mutation");
const order_query_1 = require("./order.query");
const order_subscribe_1 = require("./order.subscribe");
exports.orderResolvers = {
    Query: Object.assign({}, order_query_1.orderQuery),
    Mutation: Object.assign({}, order_mutation_1.orderMutation),
    Subscription: Object.assign({}, order_subscribe_1.orderSubscribe),
};
