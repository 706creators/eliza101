# 扩展 eliza 的第一个 Action

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
