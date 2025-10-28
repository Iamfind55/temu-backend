"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopSocialResolvers = void 0;
const shopSocial_mutation_1 = require("./shopSocial.mutation");
const shopSocial_query_1 = require("./shopSocial.query");
exports.shopSocialResolvers = {
    Query: Object.assign({}, shopSocial_query_1.shopSocialQuery),
    Mutation: Object.assign({}, shopSocial_mutation_1.shopSocialMutation),
};
