"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationResolvers = void 0;
const notification_mutation_1 = require("./notification.mutation");
const notification_query_1 = require("./notification.query");
exports.notificationResolvers = {
    Query: Object.assign({}, notification_query_1.notificationQuery),
    Mutation: Object.assign({}, notification_mutation_1.notificationMutation),
};
