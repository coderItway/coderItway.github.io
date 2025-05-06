---
title: vitepress中使用vue组件
author: Itway
date: 2023/01/04 10:49
categories:
 - vue知识集
tags:
 - vitepress
---

# {{ $frontmatter.title }}

<style>
.testTitle {
    border: 1px solid black;
}
</style>

<script setup>
const tableData = [
  {
    test: 'test',
    name: 'csdn'
  }
]
const testList = ['1','2','3']
</script>

<div class="testTitle">
  <h1>{{ $frontmatter.title }}</h1>
  <h1>{{ tableData[0].name }}</h1>
  <div v-for="(item, index) in testList" :key="index">
    <h1>{{ item }}</h1>
  </div>
</div>