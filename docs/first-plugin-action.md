# 扩展 eliza : 构建你的第一个 Action

## 1.1 简介 plugin-twitter

插件链接： [plugin-twitter](https://github.com/elizaOS/eliza/tree/main/packages/plugin-twitter)

## 1.2 插件的测试

### 配置插件

Character.json 中 plugins 添加 plugin-twitter 的配置

```json
...
"plugins": ["@elizaos/plugin-twitter"]
...
```

### 启动测试

```bash
pnpm run start --character ./plugin-twitter.json
pnpm run start:client 
```

## 1.3 代码解析

### 入口模块

每一个 `eliza` 的插件都是一个 `npm` 包，插件的入口模块是 `index.ts`，插件的入口模块需要导出 `Plugin` 对象, 其中定义插件的相关配置:

```ts
export const twitterPlugin: Plugin = {
    name: "twitter",
    description: "Twitter integration plugin for posting tweets",
    actions: [postAction],
    evaluators: [],
    providers: [],
};
```
