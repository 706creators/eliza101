#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# 初始化 git 并提交
git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:CreatorsDAO/eliza101.git main:gh-pages

cd - 