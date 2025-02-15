import { generateText } from "ai";
import dotenv from "dotenv";
import { newOpenAI } from "./tools";
const main = async () => {
  dotenv.config();
  const model = process.env.MODEL;
  if (!model) {
    throw new Error("MODEL is not set");
  }

  const content = "你好";

  const openai = newOpenAI();

  const response = await generateText({
    model: openai(model),
    system: "You are a friendly assistant!",
    prompt: content,
  });

  console.log(response.text);
};

main();
