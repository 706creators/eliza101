import fs, { writeFileSync } from "fs";
import dotenv from "dotenv";
import path from "path";
import { generateText, trimJSON } from "./openai";

// 获取项目根目录的 .env
const rootEnvPath = path.join(__dirname, "..", "..", "..", ".env");
dotenv.config({ path: rootEnvPath });

const summaryPost = async (content: string) => {
  const summary = await generateText(
    {
      body: content,
    },
    `
  你是一个 web3 开发工程师，会把自己的学习笔记整理成 markdown 文件，请帮我汇总以下内容,输出成 json 内容,不要包含对应的 markdown 文件内容。

  输出格式如下：
  {
    "title": "标题",
    "description": "描述",
  }

  内容如下：

  {{body}}

  `
  );

  return summary;
};

const main = async () => {
  // loop docs dir
  const docsDir = path.join("..", "..", "docs");
  const files = fs
    .readdirSync(docsDir)
    .map((file) => ({
      name: file,
      time: fs.statSync(path.join(docsDir, file)).mtime.getTime(),
    }))
    .sort((a, b) => a.time - b.time) // 按时间升序
    .map((file) => file.name); // 只返回文件名
  const posts = [];
  for (let file of files) {
    if (!file.endsWith(".md") || file.endsWith("draft.md")) continue; // 跳过非 md 文件
    console.log(`summary file: ${file}`);
    const filePath = path.join(docsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const summary = (await summaryPost(content)) as string;
    const trimedSummary = await trimJSON(summary);
    const postItem = JSON.parse(trimedSummary);
    postItem.id = file.replace(".md", "");
    posts.push(postItem);
  }

  writeFileSync(
    path.join(__dirname, "..", "..", "..", "docs", "posts.json"),
    JSON.stringify(posts, null, 2)
  );
};

main();
