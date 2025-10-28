"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopAddressResolvers = void 0;
const shopAddress_mutation_1 = require("./shopAddress.mutation");
const shopAddress_query_1 = require("./shopAddress.query");
exports.shopAddressResolvers = {
    Query: Object.assign({}, shopAddress_query_1.shopAddressQuery),
    Mutation: Object.assign({}, shopAddress_mutation_1.shopAddressMutation),
};
