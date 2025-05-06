---
title: CSS常见问题及解决办法
author: Itway
date: 2022/12/28 22:00
categories:
  - css知识集
tags:
  - css
---

# CSS 常见问题及解决办法

## margin 塌陷和重叠的问题！

### margin 塌陷问题？

父子元素都设置 margin-top，父子元素的 margin-top 会重叠。
解决办法：

1. 触发 BFC 来解决

- float 属性为 left/right
- overflow 为 hidden/scroll/auto
- position 为 absolute/fixed
- display 为 inline-block/table-cell/table-caption

2. 设置透明边框 border-top:1px solid transparent;
3. 设置内边框 padding-top：1px;

### margin 合并问题？

两个元素之间，外边距合并，并显示最大值或相加值。
解决办法：

1.  可以通过为其中一个元素添加一个包裹其触发 BFC 的父元素。

tip：

1. 外边距重叠只发生在块级元素上，例如 `<div> <p>` 等，并不会发生在脱离文档流的元素上，例如：设置 float 属性，或者 position 的值为 absolute 时。
