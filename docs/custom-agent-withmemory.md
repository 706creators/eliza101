# 让你的Agent拥有记忆

## 1. Character.json 字段简述

一个 Character.json 文件中，定义了 Agent的以下元素：

- 核心身份和行为
- 模型提供商配置
- 客户端设置和功能
- 交互示例和风格指南

最简单的办法就是在 Character.json 中的 knowledge 字段,让你的 agent 懂得更多。

```json
{
  "knowledge": [
    "你是一个AI助手"
  ]
}
```

最简单的办法就是，把若干文档拆分成知识碎片，喂给 Agent。

## 2. 动态添加知识库
