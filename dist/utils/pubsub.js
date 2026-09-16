"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBSCRIPTION_EVENTS = void 0;
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("../config");
// Host/port come from config so they can be pointed at the docker-compose
// "redis-server" container, a local Redis, or a managed instance via .env.
const options = {
    host: config_1.config.redis_host,
    port: config_1.config.redis_port,
    family: 4, // IPv4
    retryStrategy: (times) => Math.min(times * 50, 2000),
};
// Create publisher and subscriber clients
const publisher = new ioredis_1.default(options);
const subscriber = new ioredis_1.default(options);
const redisTarget = `${options.host}:${options.port}`;
// Event listeners for connection and error handling
publisher.on("connect", () => console.log(`Publisher connected to Redis (${redisTarget})`));
subscriber.on("connect", () => console.log(`Subscriber connected to Redis (${redisTarget})`));
const logRedisError = (label) => (err) => {
    if (err.code === "ENOTFOUND") {
        console.error(`${label}: cannot resolve Redis host "${options.host}". Set REDIS_HOST in .env ` +
            `(use 127.0.0.1 when running outside Docker).`);
        return;
    }
    console.error(`${label}:`, err);
};
publisher.on("error", logRedisError("Publisher error"));
subscriber.on("error", logRedisError("Subscriber error"));
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
