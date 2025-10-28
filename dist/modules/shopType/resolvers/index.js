"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopTypeResolvers = void 0;
const shopType_mutation_1 = require("./shopType.mutation");
const shopType_query_1 = require("./shopType.query");
exports.shopTypeResolvers = {
    Query: Object.assign({}, shopType_query_1.shopTypeQuery),
    Mutation: Object.assign({}, shopType_mutation_1.shopTypeMutation),
};
