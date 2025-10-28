"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandingResolvers = void 0;
const branding_mutation_1 = require("./branding.mutation");
const branding_query_1 = require("./branding.query");
exports.brandingResolvers = {
    Query: Object.assign({}, branding_query_1.brandingQuery),
    Mutation: Object.assign({}, branding_mutation_1.brandingMutation),
};
