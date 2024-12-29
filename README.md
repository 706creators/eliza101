# ai16z eliza 从零到一

## module 1 快速开始，构建一个 telegram 的 chatbot

### 1.1 环境安装

#### 操作系统环境

- 建议 windows 用户使用 wsl 来安装运行代替繁琐的 windows 环境配置。
- 如果是 mac 用户需要保证自己的xcode 安装了 command line tools
- python2.7+ （大部分都满足)

#### nodejs 安装

nvm.sh (<https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script>)

- 下载代码

```shell
git clone https://github.com/elizaOS/eliza.git
cd eliza
git checkout $(git describe --tags --abbrev=0) 
# 或者使用 v0.1.6
git checkout v0.1.6  相对稳定
pnpm install 
pnpm run build 
```

#### 1.2 start 启动 `eliza`

```shell
cp .env.example .env
pnpm run start
```

### 1.3 配置 telegram bot

#### 1. 申请一个 telegram bot 获取 token

添加 <https://t.me/botfather。>
使用 /newbot 创建 一个 bot ， 然后 获取 token

#### 2. 配置 .env 和 model

```shell
TELEGRAM_BOT_TOKEN=.....
```

#### 3. 选择你的大模型服务

使用 OpenAI 最简单:

直接配置:

```shell
OPENAI_API_KEY=                        # OpenAI API key, starting with sk-
```

[redpill](https://redpill.ai/)

```shell
REDPILL_API_KEY=sk-.....        # REDPILL API Key
REDPILL_MODEL=
SMALL_REDPILL_MODEL=            # Default: gpt-4o-mini
MEDIUM_REDPILL_MODEL=           # Default: gpt-4o
LARGE_REDPILL_MODEL=            # Default: gpt-4o
```

#### 4. 配置一个character.json

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

#### 3. 遇到的一些问题

1. install 、build 失败

检查自己的nodejs 版本、 commandline tools 、 和 tag

2. build 总是失败

尝试 clean

```shell
pnpm run clean 
pnpm run install 
pnpm run build 
```

3. 修改了部分代码后不生效

1) pnpm run build 后运行， 因为 pnpm run start 是 使用 build 后的文件
2) 使用 pnpm run dev 代替 pnpm run start


## module 2 给 agent 记忆，使用自己的知识库

## module 3 编写自己的第一个 plugin

## module 4 自定义自己的一个 client
