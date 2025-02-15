import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import axios from "axios";
import { AxiosHeaders } from "axios";
import { createOpenAI } from "@ai-sdk/openai";

export const newOpenAI = () => {
  const ai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
    fetch: async (input: URL | RequestInfo, init?: RequestInit | undefined) => {
      const url = input.toString();
      if (init?.method === "POST" && init?.body) {
        console.info(`do proxy request\n ${url}`);
        const headers = new AxiosHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", `Bearer ${process.env.OPENAI_API_KEY}`);
        const response = await axios.post(url, init.body, { headers });
        // Mimic the fetch Response object
        return new Response(JSON.stringify(response.data), {
          status: response.status,
          statusText: response.statusText,
        });
      }
      return fetch(input, init);
    },
  });
  return ai;
};

// find .env from current path to parrent path , max depth is 10
export const findDotenv = () => {
  let findDepth = 0;
  let findPath = path.join(".");
  for (let i = 0; i < 10; i++) {
    const dotenvPath = path.join(findPath, ".env");
    if (fs.existsSync(dotenvPath)) {
      return dotenvPath;
    }
    findDepth++;
    findPath = path.join("..", findPath);
  }
  throw new Error("Can't find .env file");
};

export const dotenvConfig = () => {
  const dotenvPath = findDotenv();
  dotenv.config({ path: dotenvPath });
};
