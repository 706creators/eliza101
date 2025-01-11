import path from "path";
import fs from "fs";
import dotenv from "dotenv";

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
