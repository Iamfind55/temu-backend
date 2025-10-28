"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logisticsResolvers = void 0;
const logistic_mutation_1 = require("./logistic.mutation");
const logistic_query_1 = require("./logistic.query");
exports.logisticsResolvers = {
    Query: Object.assign({}, logistic_query_1.logisticQuery),
    Mutation: Object.assign({}, logistic_mutation_1.logisticsMutation),
};
