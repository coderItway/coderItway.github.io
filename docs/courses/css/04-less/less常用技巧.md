---
title: less常用技巧
author: Itway
date: 2022/12/28 22:00
categories:
  - css知识集
tags:
  - less
---

# less 常用技巧

## 布局

```LESS
.wh(@w: 100%, @h: 100%) {
    width: @w;
    height: @h;
}

// 绝对定位居中
.acenter {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

// 绝对定位居中（已知宽高）
.know_acenter(@w, @h) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -(@h/2) 0 0 -(@w/2);
}
// 绝对定位居中（未知宽高）, 兼容性不行
.unknow_acenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

// 弹性居中, 兼容性不行
.fcenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

// 遮罩层, 全屏遮罩、区域遮罩
.over-screen(fixed) { position: fixed; top: 0; left: 0; right: 0; bottom: 0; }
.over-screen(absolute) { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }


// 扩展点击区域
.extend-click() {
position: relative;
&:before { content: ''; position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px; }
}
```

## 图像

```LESS
// 背景图
.bgn(@url, @bgsize: 100% 100%, @posi: center, @report: no-repeat) {
    background: url(@url);
    background-size: @bgsize;
    background-position: @posi;
    background-repeat: @report;
}

// 图片按钮
.aBtn(@url, @w, @h, @url_hov) {
    .bgn(@url);
    width: @w;
    height: @h;
    display: block;

    &.show,&:hover {
        if(isstring(@url_hov), .bgn(@url_hov), opacity: .8)
    }
}
```

## 文字

```LESS
// 多行文本缩略
&.text-hide {
    position: relative;
    width: 460px;
    /* 设置要显示的行数只需要将 height 设为 line-height 的整数倍即可 */
    height: 60px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 设置文本为两端对齐 */
    text-align: justify;

    &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        /* 将省略号的大小设置为1个字体大小 */
        width: 4em;
        padding: 0 -40px 0 0;
        content: '...';
        /* 设置背景，将最后一个字覆盖掉 */
        background: #211b19;
    }
}

// 禁止换行, 文本溢出省略号显示 (一行)
.ellipsis() {
white-space: normal; word-wrap: break-word; word-break: break-all;
-o-text-overflow: ellipsis; -ms-text-overflow: ellipsis; text-overflow:ellipsis; overflow:hidden;
}

// 文本溢出省略号显示 (多行)
// 只支持 webkit 浏览器, 解决方案：高度 = 行高*行数
// height: 90px; line-height: 30px; -webkit-line-clamp: 3;
.ellipsis-mult(@n: 3) {
display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: @n; word-break: break-all;
-o-text-overflow: ellipsis; -ms-text-overflow: ellipsis; text-overflow:ellipsis; overflow: hidden;
}

// 书写模式：牌匾从右至左水平单行排版效果、文笺从右至左、从上至下排版效果
.retext(x) { direction: rtl; unicode-bidi: bidi-override; }
.retext(y) { writing-mode: tb-rl; writing-mode: vertical-rl; }

// 文字透明
.transparent-text() { font: 0/0 serif; text-shadow: none; color: transparent; }

// 文字外发光效果
.glow-text(@r: 10px, @color: gold) { text-shadow: 0 0 @r @color; }
```

## 滚动条

1. 隐藏滚动条（兼容 ie）：

```LESS
// 隐藏滚动条
.scroll {
    overflow-y: auto !important;
    -ms-scroll-chaining: chained;
    -ms-overflow-style: none;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
```

2. 移动端怎么阻止滚动呢？
   得益于一个强大的 CSS 属性，设置 touch-action: none; 从而阻止了所有手势效果，自然也就不会发生页面滚动。该属性在平时的业务代码中也可用于优化移动端性能、解决 touchmove 的 passive 报错等

## 动画

```LESS
// 三维闪动 bug 处理
.transform-fix() { -webkit-backface-visibility: hidden; -webkit-transform-style: preserve-3d; }

// 持续动画 - 淡入淡出
.ani-fade(@time: 3s, @opacity: 0) {
    animation: ani-fade @time linear infinite;

    @keyframes ani-fade {
        0% {
            opacity: @opacity;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: @opacity;
        }
    }
}

// 持续动画 - 旋转
.ani-turn(@time: 30s) {
    animation: ani-turn @time linear infinite;

    @keyframes ani-turn {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}

// 持续动画 - 大小
.ani-size(@time: 2s, @size: .3) {
    animation: ani-size @time linear infinite;

    @keyframes ani-size {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1+@size);
        }

        100% {
            transform: scale(1);
        }
    }

}


// 单次动画 - 淡入
.ani-fadein(@time1: .3s, @time2: 0s) {
    opacity: 0;
    animation: ani-fadein @time1 @time2 ease 1;
    animation-fill-mode: forwards;

    @keyframes ani-fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}

// 单次动画 - 下方淡入
.ani-fadein-b(@time1: .3s, @time2: 0s) {
    opacity: 0;
    animation: ani-fadein-b @time1 @time2 ease 1;
    animation-fill-mode: forwards;

    @keyframes ani-fadein-b {
        0% {
            transform: translateY(2rem);
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
```

## 功能

```LESS
// 清除浮动
.clearfix() {
    *zoom: 1;
    &:after { display: block; clear: both; content: ''; visibility: hidden; height: 0; }
}
.clearfix(table) {
    *zoom: 1;
    &:before, &:after { content: " "; display: table; clear: both; }
}

// 禁止文本被选择
.user-select() { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }

// 隐藏鼠标手势
.hide-cursor() { cursor: none !important; }

// 鼠标禁用样式，但仍然可以触发事件
.disabled() { cursor: not-allowed; }

// 禁用元素事件
// 1. 阻止任何点击动作的执行
// 2. 使链接显示为默认光标(cursor:default)
// 3. 阻止触发hover和active状态
// 4. 阻止JavaScript点击事件的触发
.pointer-events() { pointer-events: none; }


// 用伪类来显示打印时 a 标签的链接
.print-link() {
    @media print {
    a[href]:after { content: " (" attr(href) ") "; }
    }
}

// 首字下沉
.first-letter(@font-size: 6em) {
    &::first-letter{
    float: left;
    line-height: 1;
    font-size: @font-size;
    }
}

// 美化选中文本
.beauty-select() {
    &::selection{
    color: #fff;
    background-color: #6bc30d;
    text-shadow: none;
    }
}


// 1 像素边框问题
.onepx(...) {
    position: relative;
    &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    transform: scaleY(0.5);
}
}
.onepx(top) { &:after { top: 0; } }
.onepx(bottom) { &:after { bottom: 0; } }
.onepx-easy(top, @color: #ccc) { box-shadow: inset 0px -1px 1px -1px @color; }
.onepx-easy(bottom, @color: #ccc) { box-shadow: inset 0px 1px 1px -1px @color; }
```
