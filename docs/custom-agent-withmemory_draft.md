# 让你的Agent拥有记忆

## 1. Character.json 字段简述

### 1.1 name

用来标识 `Agent` 启动的角色的名称。

### 1.2 clients

这里是一个数组选项，用来标识当前觉得和 哪些 client 绑定。目前支持的 client 有：

- `telegram`
- `discord`
- `slack`
- `twitter`
- `github`
- 等

选择指定的`client`后，需要在 .env 中添加指定的配置。
具体涉及到的 ENV 列表，可以参考 : `packages/client-${client}/src/environment.ts`

### 1.3 settings

这里是 `LLM` 的一些额外配置，比如 `voice` 和 `secrets`的配置:

```json
"settings": {
  "secrets": { "API_KEY": "your-api-key" },
  "voice": { "model": "voice-model-id", "url": "voice-service-url" },
  "model": "specific-model-name",
  "embeddingModel": "embedding-model-name"
}
```

### 1.4 bio 和 lore

用来标识当前角色的背景信息。

### 1.5 knowledge

用来标识当前角色的知识库。这里是一个数组字符串，也是最简单的给 Character 喂知识的方式。

这里推荐一个从一个目录简单的构建knowledge的方式。暂时只是读取文本文件，将文本内容读取作为知识库的内容：

```javascript

```

### 1.6 llm 交互模版配置

`eliza` 会根据 `character.json` 中的 `templates` 配置，来和 `LLM` 进行交互。
默认为空，使用的是默认的模版。


### 1.7