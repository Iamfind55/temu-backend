"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBSCRIPTION_EVENTS = void 0;
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const ioredis_1 = __importDefault(require("ioredis"));
let options = {
    host: "redis-server", // Default Redis host
    port: 6379, // Default Redis port
    retryStrategy: (times) => Math.min(times * 50, 2000),
};
// Use different settings for local environment
if (process.env.NODE_ENV === "LOCAL") {
    options = {
        host: "127.0.0.1", // Localhost
        port: 6379, // Default Redis port
        family: 4, // IPv4
    };
}
// Create publisher and subscriber clients
const publisher = new ioredis_1.default(options);
const subscriber = new ioredis_1.default(options);
// Event listeners for connection and error handling
publisher.on("connect", () => console.log("Publisher connected to Redis"));
subscriber.on("connect", () => console.log("Subscriber connected to Redis"));
publisher.on("error", (err) => console.error("Publisher error:", err));
subscriber.on("error", (err) => console.error("Subscriber error:", err));
// Initialize RedisPubSub
const pubsub = new graphql_redis_subscriptions_1.RedisPubSub({
    publisher,
    subscriber,
});
exports.SUBSCRIPTION_EVENTS = {
    MESSAGE_ADDED: "MESSAGE_ADDED",
    MESSAGE_STATUS_UPDATED: "MESSAGE_STATUS_UPDATED",
    NEW_MESSAGE_FOR_ADMIN: "NEW_MESSAGE_FOR_ADMIN",
    MESSAGE_DELETED: "MESSAGE_DELETED",
};
exports.default = pubsub;
