"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResolvers = void 0;
const category_mutation_1 = require("./category.mutation");
const category_query_1 = require("./category.query");
exports.categoryResolvers = {
    Query: Object.assign({}, category_query_1.categoryQuery),
    Mutation: Object.assign({}, category_mutation_1.categoryMutation),
};
