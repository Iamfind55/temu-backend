"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffResolvers = void 0;
const staff_mutation_1 = require("./staff.mutation");
const staff_query_1 = require("./staff.query");
exports.staffResolvers = {
    Query: Object.assign({}, staff_query_1.staffQuery),
    Mutation: Object.assign({}, staff_mutation_1.staffMutation),
};
