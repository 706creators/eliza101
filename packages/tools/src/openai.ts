import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { newOpenAI } from "./tools";

const renderTemplate = (
  template: string,
  state: Record<string, any>
): string => {
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, path) => {
    // 处理嵌套属性路径，如 "user.name"
    const value = path.split(".").reduce((obj: any, key: string) => {
      return obj?.[key];
    }, state);

    // 处理 undefined 或 null 的情况
    if (value === undefined || value === null) {
      console.warn(`Warning: Template key "${path}" not found in state`);
      return match; // 保留原始模板标记
    }

    return String(value);
  });
};

export const myGenerateText = async (
  state: { body: string },
  template: string
) => {
  // console.log(process.env.REDPILL_API_KEY);
  const content = renderTemplate(template, state);

  const model = process.env.MODEL;
  if (!model) {
    throw new Error("MODEL is not set");
  }

  const openai = newOpenAI();
  const response = await generateText({
    model: openai(model),
    system: "You are a friendly assistant!",
    prompt: content,
  });

  return response.text;
};

export const summaryContent = async (content: string) => {
  const response = await myGenerateText(
    {
      body: content,
    },
    `
    帮我汇总以下的内容：

    {{body}}
    
    `
  );
  return response;
};

export const trimJSON = async (content: string) => {
  return content.replace(/```json\n|```/g, "");
};
