// import { Redis } from "@upstash/redis";

// export const db = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL!,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// });
import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://eu1-legible-fawn-38484.upstash.io",
  token:
    "AZZUASQgOGMzOTY3NDEtNjMzZC00MGRlLThmMDAtNjc2ZDZiZGExNGIyZDQyOGJjZGUzMDU4NDUzYzkyZDAwNmEwNmI4YmVjMGU=",
});
