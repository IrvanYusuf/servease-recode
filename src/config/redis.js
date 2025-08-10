const { createClient } = require("redis");

let redis;

const redisClient = async () => {
  if (!redis) {
    redis = createClient({
      url: process.env.REDIS_URL || "redis://localhost:6379",
    });

    redis.on("error", (err) => console.error("Redis Error:", err));

    await redis.connect();
    console.log("Redis connected 🤖");
  }
  return redis;
};

module.exports = { redisClient };
