"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistoryResolvers = void 0;
const transactionHistory_mutation_1 = require("./transactionHistory.mutation");
const transactionHistory_query_1 = require("./transactionHistory.query");
const transactionHistory_subscribe_1 = require("./transactionHistory.subscribe");
exports.transactionHistoryResolvers = {
    Query: Object.assign({}, transactionHistory_query_1.transactionHistoryQuery),
    Mutation: Object.assign({}, transactionHistory_mutation_1.transactionHistoryMutation),
    Subscription: Object.assign({}, transactionHistory_subscribe_1.transactionHistorySubscribe),
};
