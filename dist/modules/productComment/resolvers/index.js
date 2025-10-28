"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCommentResolvers = void 0;
const productComment_mutation_1 = require("./productComment.mutation");
const productComment_query_1 = require("./productComment.query");
exports.productCommentResolvers = {
    Query: Object.assign({}, productComment_query_1.productCommentQuery),
    Mutation: Object.assign({}, productComment_mutation_1.productCommentMutation),
};
