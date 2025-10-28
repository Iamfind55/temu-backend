"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopProductResolvers = void 0;
const shopProduct_mutation_1 = require("./shopProduct.mutation");
const shopProduct_query_1 = require("./shopProduct.query");
exports.shopProductResolvers = {
    Query: Object.assign({}, shopProduct_query_1.shopProductQuery),
    Mutation: Object.assign({}, shopProduct_mutation_1.shopProductMutation),
};
