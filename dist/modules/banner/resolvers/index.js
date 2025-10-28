"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerResolvers = void 0;
const banner_mutation_1 = require("./banner.mutation");
const banner_query_1 = require("./banner.query");
exports.bannerResolvers = {
    Query: Object.assign({}, banner_query_1.bannerQuery),
    Mutation: Object.assign({}, banner_mutation_1.bannerMutation),
};
