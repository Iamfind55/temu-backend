"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardResolvers = void 0;
const dashboard_mutation_1 = require("./dashboard.mutation");
const dashboard_query_1 = require("./dashboard.query");
exports.dashboardResolvers = {
    Query: Object.assign({}, dashboard_query_1.dashboardlQuery),
    Mutation: Object.assign({}, dashboard_mutation_1.dashboardMutation),
};
