# ai16z eliza 从零到一

## Module 1: 快速开始，构建一个 Telegram 的 Chatbot

### 1.1 环境安装

#### 操作系统环境

- 建议 Windows 用户使用 WSL 来安装运行代替繁琐的 Windows 环境配置
- 如果是 Mac 用户需要保证自己的 Xcode 安装了 Command Line Tools
- Python 2.7+ （大部分都满足)

#### NodeJS 安装

nvm.sh ([查看安装文档](https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script))

##### 下载代码

```shell
git clone https://github.com/elizaOS/eliza.git
cd eliza
git checkout $(git describe --tags --abbrev=0) 
# 或者使用 v0.1.6
git checkout v0.1.6  相对稳定
pnpm install 
pnpm run build 
```

### 1.2 启动 `eliza`

```shell
cp .env.example .env
pnpm run start
```

### 1.3 配置 telegram bot

#### 1. 申请一个 telegram bot 获取 token

1. 添加 [BotFather](https://t.me/botfather)
2. 使用 `/newbot` 创建一个 bot
3. 获取 token

#### 2. 配置 .env 和 Model

```shell
TELEGRAM_BOT_TOKEN=.....
```

#### 3. 选择你的大模型服务

##### OpenAI (最简单方案)

直接配置:
```shell
OPENAI_API_KEY=                        # OpenAI API key, starting with sk-
```

##### [RedPill](https://redpill.ai/)

```shell
REDPILL_API_KEY=sk-.....        # REDPILL API Key
REDPILL_MODEL=
SMALL_REDPILL_MODEL=            # Default: gpt-4o-mini
MEDIUM_REDPILL_MODEL=           # Default: gpt-4o
LARGE_REDPILL_MODEL=            # Default: gpt-4o
```

#### 4. 配置 character.json

- 定义 clients
- 定义模型提供商

```json
....
"clients": ["telegram"],
"modelProvider": "redpill",
....
```

#### 5. 启动 telegram bot 测试

```shell
pnpm run start --character ./telegram.json
```

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/elizaos/eliza/tree/main)

### 1.4 常见问题解决

1. **Install、Build 失败**
   - 检查 NodeJS 版本
   - 检查 Command Line Tools
   - 检查 Git Tag

2. **Build 总是失败**
   尝试清理后重新安装：
   ```shell
   pnpm run clean 
   pnpm run install 
   pnpm run build 
   ```

3. **修改代码后不生效**
   - 方案1: 修改后执行 `pnpm run build` 再运行
   - 方案2: 使用 `pnpm run dev` 代替 `pnpm run start`

---

## Module 2: 给 Agent 记忆，使用自己的知识库

## Module 3: 编写自己的第一个 Plugin

## Module 4: 自定义自己的一个 Client
