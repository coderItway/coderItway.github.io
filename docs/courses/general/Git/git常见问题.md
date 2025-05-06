---
title: git 常见问题
author: Itway
date: 2022/12/28 22:00
categories:
  - 通用知识集
tags:
  - git
  - 工具
---

# git 常见问题

## 解决 fatal: unable to access 'https://github.com/.../.git': Could not resolve host: github.com。 的方法

1. 只需要在命令行中执行

git config --global --unset http.proxy

git config --global --unset https.proxy

2. 参考网上解决办法：解除 ssl 验证后，再上传就 OK 了

git config --global http.sslVerify "false"
