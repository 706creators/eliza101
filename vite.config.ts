import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// 获取仓库名作为基础路径，用于GitHub Pages
const base = process.env.NODE_ENV === "production" ? "/eliza101/" : "/";

export default defineConfig({
  plugins: [react()],
  base, // 添加基础路径配置
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    // 确保构建时复制 docs 目录到 dist
    assetsDir: "assets",
    copyPublicDir: true,
  },
});
