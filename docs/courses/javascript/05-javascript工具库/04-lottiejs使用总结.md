---
title: lottie.js使用总结
author: Itway
date: 2022/12/28 14:49
categories:
 - JavaScript知识集
tags:
 - JavaScript工具库
---

# lottie.js
>Lottie是一款由airbnb开源的跨平台动画渲染库，支持Android, iOS, Web, Windows平台。是专门用于解析从AE(Adobe After Effects)中通过Bodymovin插件导出的JSON文件，直接渲染动画。

## 1.简介
官方文档：https://airbnb.io/lottie/#/README
剖析 lottie-web 动画实现原理:https://juejin.cn/post/6914835547588395022
lottie范例：https://lottiefiles.com/

**例子：**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lottie</title>
    <!-- 重点：引入Lottie JS 文件 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.4/lottie.min.js"></script>
    <style>
      #app {
        width: 400px;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <!-- 定义动画渲染的容器 -->
    <div id="app"></div>
  </body>
  <script>
    // loadAnimation 渲染动画
    const lottieAnimationItem = lottie.loadAnimation({
      // 选取一个容器，用于渲染动画
      container: document.querySelector("#app"),
      // 定义JSON文件路径
      path: "https://assets10.lottiefiles.com/packages/lf20_l3qxn9jy.json",
      // 是否循环播放
      loop: true,
      // 渲染的格式svg/canvas/html，svg性能更优，兼容性更好
      renderer: "svg",
    });
  </script>
</html>
```
**loadAnimation参数配置**

| 属性名        | 描述                                                       |
| ------------- | ---------------------------------------------------------- |
| container     | 渲染动画所需容器                                           |
| renderer      | 动画渲染类型，svg/canvas/html                              |
| loop          | 是否循环播放，布尔值                                       |
| autoplay      | 是否自动播放，布尔值                                       |
| path          | 一个指定的JSON文件路径，注意这里会发起一个http请求json文件 |
| animationData | JSON动画数据，与path属性不共存                             |

>Tip：当设置path属性的时候，并不是简单的一个相对路径或者是绝对路径引入，而是lottie会发送一个http请求，访问这个json文件。如果是在vue/react项目中要注意最终的打包访问路径。

>考虑页面性能更优，建议使用svg渲染方式，通过path加载远程JSON文件，使用animationData会让json文件打包到JS中

**loadAnimation方法返回的对象**

| 属性名   | 类型             | 描述         |
| -------- | ---------------- | ------------ |
| play     | () => void       | 播放动画     |
| pause    | () => void       | 暂停动画     |
| stop     | () => void       | 停止动画     |
| setSpeed | (number) => void | 设置播放速度 |
| destroy  | () => void       | 销毁动画     |

- goToAndStop(value:number,isFrame:boolean = false)：动画跳到某个进度并停止。
    - value：进度数值
    - isFrame：定义value是基于时间true还是基于帧false

- goToAndPlay(value:number,isFrame:boolean = false)：动画跳到某个进度并播放。

- setDirection(direction:number = 1)：设置动画的播放顺序。正数和0：正序，负数：倒序

- getDuration(inFrames:boolean = false)：获取动画持续事件。
    - true->返回以帧为单位的持续时间
    - false->返回以秒为单位的持续时间

- playSegments(segments:[number,number]|[number,number][],forceFlag:boolean = false)：
    - segments：参数指定播放帧 [form,to]，会停留在最后一个二维数组的to里面 。
    - forceFlag：参数表示是否立即强制播放该片段 。
    - false->会等待当前段完成。
    - true->会立即播放此段。 如：
    animation.playSegments([15,30],false); // 播放完之前的片段，播放15-30帧，
    animation.playSegments([[0,5],[10,20]]); // 直接播放0-5和10-20帧。

- setSubframe(boolean = true)：false->将尊重原始的AE fps。true->将使用中间值在每个RequestAnimationFrame上更新。

## 监听事件
- complete: 播放完成（循环播放下不会触发）
- loopComplete: 当前循环下播放（循环播放/非循环播放）结束时触发
- enterFrame: 每进入一帧就会触发，播放时每一帧都会触发一次，stop方法也会触发
- segmentStart: 播放指定片段时触发，playSegments、resetSegments等方法刚开始播放指定片段时会发出，如果playSegments播放多个片段，多个片段最开始都会触发。
- data_ready: 动画数据json文件加载完毕触发
- data_fail：动画数据json文件加载失败触发
- loaded_images：当所有图片加载成功/失败时触发
- DOMLoaded: 动画相关的dom已经被添加到html后触发
- destroy: 将在动画删除时触发
```javascript
// animation 是一个实例对象通过lottie.loadAnimation
animation.addEventlistener('data_ready',res=>{
  // handle
  console.log('animation file has loaded');
})
```
**动画重复播放**
```javascript
// 监听动画完成
this.animationLottie.addEventListener('complete', (res) => {
  // 1. 第一种 反复设置播放顺序
  // 获取到播放顺序
  const dir = this.animationLottie.playDirection;
  // 设置播放顺序
  this.animationLottie.setDirection(dir === 1 ? -1 : 1);
  this.animationLottie.play();
  // 2. 播放指定帧, 顺序倒过来
  // 获取到动画总时长
  // const duraction = this.animationLottie.getDuration(true);
  // this.playSegments(this.direction === 1 ? [duraction, 0] : [0, duraction]);
});
```