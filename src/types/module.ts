export interface Module {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export const modules: Module[] = [
  {
    id: "first-telegram-bot",
    title: "快速开始，构建一个 Telegram 的 Chatbot",
    description:
      "从环境配置到运行，完整指导如何使用 eliza 构建一个 Telegram Bot",
  },
  // Add more modules here
];
