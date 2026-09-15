import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis, { RedisOptions } from "ioredis";
import { config } from "../config";

// Host/port come from config so they can be pointed at the docker-compose
// "redis-server" container, a local Redis, or a managed instance via .env.
const options: RedisOptions = {
  host: config.redis_host,
  port: config.redis_port,
  family: 4, // IPv4
  retryStrategy: (times: number) => Math.min(times * 50, 2000),
};

// Create publisher and subscriber clients
const publisher = new Redis(options);
const subscriber = new Redis(options);

const redisTarget = `${options.host}:${options.port}`;

// Event listeners for connection and error handling
publisher.on("connect", () =>
  console.log(`Publisher connected to Redis (${redisTarget})`)
);
subscriber.on("connect", () =>
  console.log(`Subscriber connected to Redis (${redisTarget})`)
);

const logRedisError = (label: string) => (err: NodeJS.ErrnoException) => {
  if (err.code === "ENOTFOUND") {
    console.error(
      `${label}: cannot resolve Redis host "${options.host}". Set REDIS_HOST in .env ` +
        `(use 127.0.0.1 when running outside Docker).`
    );
    return;
  }
  console.error(`${label}:`, err);
};

publisher.on("error", logRedisError("Publisher error"));
subscriber.on("error", logRedisError("Subscriber error"));

// Initialize RedisPubSub
const pubsub = new RedisPubSub({
  publisher,
  subscriber,
});

export const SUBSCRIPTION_EVENTS = {
  MESSAGE_ADDED: "MESSAGE_ADDED",
  MESSAGE_STATUS_UPDATED: "MESSAGE_STATUS_UPDATED",
  NEW_MESSAGE_FOR_ADMIN: "NEW_MESSAGE_FOR_ADMIN",
  MESSAGE_DELETED: "MESSAGE_DELETED",
};

export default pubsub;
