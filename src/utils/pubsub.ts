import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis, { RedisOptions } from "ioredis";

let options: RedisOptions = {
  host: "redis-server", // Default Redis host
  port: 6379, // Default Redis port
  retryStrategy: (times: number) => Math.min(times * 50, 2000),
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
const publisher = new Redis(options);
const subscriber = new Redis(options);

// Event listeners for connection and error handling
publisher.on("connect", () => console.log("Publisher connected to Redis"));
subscriber.on("connect", () => console.log("Subscriber connected to Redis"));

publisher.on("error", (err: Error) => console.error("Publisher error:", err));
subscriber.on("error", (err: Error) => console.error("Subscriber error:", err));

// Initialize RedisPubSub
const pubsub = new RedisPubSub({
  publisher,
  subscriber,
});

export default pubsub;
