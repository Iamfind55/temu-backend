"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutUsResolvers = void 0;
const banner_mutation_1 = require("./banner.mutation");
const banner_query_1 = require("./banner.query");
exports.aboutUsResolvers = {
    Query: Object.assign({}, banner_query_1.aboutUsQuery),
    Mutation: Object.assign({}, banner_mutation_1.aboutUsMutation),
};
