"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletResolvers = void 0;
const wallet_mutation_1 = require("./wallet.mutation");
const wallet_query_1 = require("./wallet.query");
exports.walletResolvers = {
    Query: Object.assign({}, wallet_query_1.walletQuery),
    Mutation: Object.assign({}, wallet_mutation_1.walletMutation),
};
