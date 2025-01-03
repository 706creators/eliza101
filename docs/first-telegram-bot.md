# 快速开始，构建一个 Telegram 的 Chatbot

## 1 环境安装

### 操作系统环境

- 建议 Windows 用户使用 WSL 来安装运行代替繁琐的 Windows 环境配置
- 如果是 Mac 用户需要保证自己的 Xcode 安装了 Command Line Tools
- Python 2.7+ （大部分都满足)

### NodeJS 安装

使用[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script)做版本控制。

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install v23.3.0
```

#### 下载代码

```shell
git clone https://github.com/elizaOS/eliza.git
cd eliza
git checkout $(git describe --tags --abbrev=0) 
# 或者使用 v0.1.5-alpha.5
git checkout v0.1.5-alpha.5 同时自带一个可以交互的 cli 环境
pnpm install 
pnpm run build 
```

## 2 启动 `eliza`

```shell
cp .env.example .env
pnpm run start
```

## 3 配置 telegram bot

### 1. 申请一个 telegram bot 获取 token

1. 添加 [BotFather](https://t.me/botfather)
2. 使用 `/newbot` 创建一个 bot
3. 获取 token

### 2. 配置 .env 和 Model

```shell
TELEGRAM_BOT_TOKEN=.....
```

### 3. 选择你的大模型服务

#### OpenAI (最简单方案)

直接配置

```shell
OPENAI_API_KEY=                        # OpenAI API key, starting with sk-
```

最新版本的 `eliza` 支持了 自定义 URL和模型的功能

```shell
OPENAI_API_KEY=sk-                   # OpenAI API key, starting with sk-
OPENAI_API_URL=                # OpenAI API Endpoint (optional), Default: https://api.openai.com/v1
SMALL_OPENAI_MODEL=             # Default: gpt-4o-mini
MEDIUM_OPENAI_MODEL=         # Default: gpt-4o
LARGE_OPENAI_MODEL=           # Default: gpt-4o
```

通过配置，使用 `deepseek` 的模型

```shell
OPENAI_API_KEY=sk-                   # OpenAI API key, starting with sk-
OPENAI_API_URL=https://api.deepseek.com                 # OpenAI API Endpoint (optional), Default: https://api.openai.com/v1
SMALL_OPENAI_MODEL=deepseek-chat             # Default: gpt-4o-mini
MEDIUM_OPENAI_MODEL=deepseek-chat            # Default: gpt-4o
LARGE_OPENAI_MODEL=deepseek-chat             # Default: gpt-4o
```

#### [RedPill](https://redpill.ai/)

```shell
REDPILL_API_KEY=sk-.....        # REDPILL API Key
REDPILL_MODEL=
SMALL_REDPILL_MODEL=            # Default: gpt-4o-mini
MEDIUM_REDPILL_MODEL=           # Default: gpt-4o
LARGE_REDPILL_MODEL=            # Default: gpt-4o
```

### 4. 配置 character.json

- 定义 clients
- 定义模型提供商

```json
....
"clients": ["telegram"],
"modelProvider": "redpill",
....
```

### 5. 启动 telegram bot 测试

```shell
pnpm run start --character ./telegram.json
```

最后，如果以上的各种方式

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/elizaos/eliza/tree/main)

## 4 常见问题解决

### 1. **Install、Build 失败**

   - 检查 NodeJS 版本
   - 检查 Command Line Tools
   - 检查 Git Tag

### 2. **Build 总是失败**

   尝试清理后重新安装

```shell
pnpm run clean 
pnpm run install 
pnpm run build 
```

### 3. **修改代码后不生效**

   - 方案1
    因为,`pnpm run start` 执行的是build 后的代码，所以，可以先 build。
    `pnpm run build && pnpm run start`
    
   - 方案2
    使用 `pnpm run dev` 代替 `pnpm run start`

## 5. 视频教程

[![Watch the video](https://img.youtube.com/vi/YRJFj6ku63E/0.jpg)](https://www.youtube.com/watch?v=YRJFj6ku63E&list=PLDbawyynbWCro_7nakrikFc7o-FdmXvMM)
