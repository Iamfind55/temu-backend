"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResolvers = void 0;
const product_mutation_1 = require("./product.mutation");
const product_query_1 = require("./product.query");
exports.productResolvers = {
    Query: Object.assign({}, product_query_1.ProductQuery),
    Mutation: Object.assign({}, product_mutation_1.ProductMutation),
};
