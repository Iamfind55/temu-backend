"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributeResolvers = void 0;
const attribute_mutation_1 = require("./attribute.mutation");
const attribute_query_1 = require("./attribute.query");
exports.attributeResolvers = {
    Mutation: Object.assign({}, attribute_mutation_1.attributeMutation),
    Query: Object.assign({}, attribute_query_1.attributeQuery),
};
