"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailResolvers = void 0;
const orderDetail_mutation_1 = require("./orderDetail.mutation");
const orderDetail_query_1 = require("./orderDetail.query");
exports.orderDetailResolvers = {
    Query: Object.assign({}, orderDetail_query_1.orderDetailQuery),
    Mutation: Object.assign({}, orderDetail_mutation_1.orderDetailMutation),
};
