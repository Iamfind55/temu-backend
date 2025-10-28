"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerResolvers = void 0;
const customer_mutation_1 = require("./customer.mutation");
const customer_query_1 = require("./customer.query");
exports.customerResolvers = {
    Query: Object.assign({}, customer_query_1.customerQuery),
    Mutation: Object.assign({}, customer_mutation_1.customerMutation),
};
