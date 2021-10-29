import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mp-blog",
  apiKey: process.env.MICROCMS_API_KEY,
});
