---
title: hammer.js使用总结
author: Itway
date: 2022/12/28 14:49
categories:
 - JavaScript知识集
tags:
 - JavaScript工具库
---

# hammer.js

> 是一个解决移动端触摸手势的库，可以完美的实现在移动端开发的大多数事件，如：点击、滑动、拖动、多点触控等事件。

## 1.简介

- 用于检测触摸手势的 JavaScript 库
- 添加对触摸手势的支持并移除了点击的 300ms
- 支持最常见的单点和多点触摸手势，并且可以完全扩展以添加自定义手势

官方文档：http://hammerjs.github.io/

### 六大动作

![手势图](https://upload-images.jianshu.io/upload_images/2135887-7c57381027e40fe1.jpg)

1. **tap（点击）：**
   在指定的 DOM 区域内，一个手指轻拍或点击时触发该事件（类似 PC 端的 click），该事件最大点击时间为 250ms，如果超过 250ms 则按 press 事件处理。

   > 在安卓触屏上，Tap 事件和 click 事件可以同时触发，但 click 事件会有几百毫秒的延迟，即先触发 Tap 事件，过一段时间再触发 click 事件。

2. **press（长按）：**
   在指定的 DOM 区域内，这个事件相当于 PC 端的 Click 事件，不能包含任何的移动，最小按压时间为 500ms，常用于我们在手机上用的复制粘贴等功能。

   该事件事分别对以下事件进行监听并处理:

   - pressup: 点击事件离开时触发

3. **pan（拖动）：**
   在指定的 DOM 区域内，一个手指放下并移动事件，即触屏中的拖动事件。

   该事件事分别对以下事件进行监听并处理：

   - panstart: 拖动开始
   - panmove: 拖动过程
   - panend: 拖动结束
   - pancancel: 拖动取消
   - panleft: 向左拖动
   - panright: 向右拖动
   - panup: 向上拖动
   - pandown: 向下拖动

4. **swipe（滑动）：**
   在指定的 DOM 区域内，一个手指快速的在触屏上滑动，即平时用到最多的滑动事件

   该事件事分别对以下事件进行监听并处理：

   - swipeleft: 向左滑动
   - swiperight: 向右滑动
   - swipeup: 向上滑动
   - swipedown: 向下滑动

5. **pinch（多点触控）：**
   在指定的 DOM 区域内，两个手指（默认为两个手指，多指触控需要单独设置）或多个手指相对（越来越近）移动或相向（越来越远）移动时事件

   该事件事分别对以下事件进行监听并处理:

   - pinchstart: 多点触控开始
   - pinchmove: 多点触控过程
   - pinchend: 多点触控结束
   - pinchcancel: 多点触控取消
   - pinchin: 多点触控时两手指越来越近
   - pinchout: 多点触控时两手指越来越远

6. **rotate（多点旋转）：**
   在指定的 DOM 区域内，当两个手指或更多手指呈圆型旋转时触发

   该事件事分别对以下事件进行监听并处理:

   - rotatestart: 旋转开始
   - rotatemove: 旋转过程
   - rotateend: 旋转结束
   - rotatecancel: 旋转取消

## 2.使用

```javascript
const app = document.querySelector('#app')
const hammertime = new Hammer(app)
hammertime.on('pan', function (ev) {
  console.log(ev)
})
```

hammer.js 提供了 tap（点击）, doubletap, press（长按）, pan（拖动）, swipe（滑动） 和多点触控的 pinch, rotate（旋转），默认情况下 pinch 与 rotate 是禁用的，因为它们会阻塞元素，可以通过以下命令来启用：

```javascript
hammertime.get('pinch').set({ enable: true })
hammertime.get('rotate').set({ enable: true })
```

默认的 pan（拖动） 仅支持水平方向，可以选择启用全部方向，swipe 也可以启用垂直方向：

```javascript
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL })
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
```

建议使用 viewport meta 禁用双击/缩放功能，更多的控制网页；支持触摸操作的浏览器就不需要这样做：

```html
<meta
  name="viewport"
  content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
/>
```

可以为实例设置自己的识别器集合。这需要更多的代码，但是它使您能够更好地控制正在被识别的手势：

```javascript
var mc = new Hammer.Manager(myElement, myOptions)

mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }))
mc.add(new Hammer.Tap({ event: 'quadrupletap', taps: 4 }))

mc.on('pan', handlePan)
mc.on('quadrupletap', handleTaps)
```

上面的例子创建了一个包含一个 pan 和四拍手势的实例。您创建的识别程序实例按其添加顺序执行，同时只能识别一个。

### 使用技巧

1. **事件委托和 DOM 事件：**
   hammer.js 能够通过配置选项 domEvents: true 触发 DOM 事件，它会使你的方法 stopPropagation()，所以可以使用事件委托，hammer.js 不会解除绑定的事件。

2. **尽量避免垂直 pan/swipe：**
   垂直 pan 用于滚动页面，一些（旧）浏览器不会触发这个事件，所以 hammer.js 无法识别。

3. **删除 Windows Phone 上的突出显示：**
   Windows Phone 上的 IE10 和 IE11 在点击某个元素时会突出显示一个小点，添加这个 meta 来删除。

4. **不能选择文本了：**
   hammer.js 会设置 user-select 来提高 PC 的平移体验，如果需要文本选择，需要在创建实例前执行此操作。

5. **tap 后，click 也被触发了：**
   该点击事件也被称为 “幽灵点击”（ghost click）。

6. **使用心得：**
   在 Pinch 事件和 Rotate 事件中，我们用了 hammertime.add(new Hammer.Pinch());和 hammertime.add(new Hammer.Rotate ());而其他四个事件没有用，而是直接添加了事件的监听程序。原因在于，我们在 new Hammer(htmlElement)的时候，Hammer.js 默认对 Pan、Press、Swipe 和 Tab 事件进行了监听。但没有对 Pinch 和 Rotate 事件进行监听。

## 3.API

### 1.构造函数 Hanmmer

构造函数为 Hammer(HTMLElement, [options])，options 将与默认选项 Hammer.defaults 合并。

```javascript
const app = document.getElementById('app')
var mc = new Hammer(app)
Hammer.defaults({})
```

**Hammer.defaults**

1. touchAction: 'compute'：
   其值可为 compute, auto, pan-y, pan-x, none，默认选项会基于识别器为你选择一个正确值。
2. domEvents：false：
   默认禁用 DOM 事件，如果需要使用事件委托，需将其设为 true
3. enable: true：
   接受一个布尔值，或返回布尔值的函数
4. cssProps: {...}：
   改善交互事件操作的系列 css 属性
5. preset: [….]：
   调用 Hammer() 的时候就安装了默认的识别器，如果建立一个新的 Manager，这些将被跳过。

### 2.事件对象

Name Value
type 事件的名称，例如 panstart
deltaX X 轴移动
deltaY Y 轴移动
deltaTime 自从第一次 input 的总时间，单位 ms
distance 移动距离
angle 角度
velocityX X 轴上的速度，单位为 px/ms
velocityY Y 轴上的速度，单位为 px/ms
velocity velocityX/velocityY 的最高值
direction 移动方向，匹配 DIRECTION 常量
offsetDirection 相对于起点的方向，匹配 DIRECTION 常量
scale 在多点触摸缩放时，只是触摸时值为 1
rotation 在多点触摸旋转时，只是触摸时值为 0
center 多点触摸的中心位置，或者只是单独的点
srcEvent 源事件对象，类型为 TouchEvent，MouseEvent 或 PointerEvent
target 收到该事件的目标
pointerType 主要点类型，可能是 touch，mouse，pen 或 kinect
eventType 事件类型，匹配 INPUT 常量
isFirst 第一个 input 时为 true
isFinal 最后一个 input 时为 true
pointers 所有点的数组，包括结束点（touchend，mouseup）
changedPointers 包含所有 new/moved/lost 的点
preventDefault 参考 srcEvent.preventDefault() 方法

```javascript
hammertime.on('pan', function (e) {
  document.getElementById('result').innerHTML +=
    'X偏移量：【' + e.deltaX + '】，Y偏移量：【' + e.deltaY + '】<br />'
  //控制台输出
  console.log(e)
})
```

### 3.常量

1. **DIRECTION（方向）**
   开启方向

| Name                 | Value |
| -------------------- | ----- |
| DIRECTION_NONE       | 1     |
| DIRECTION_LEFT       | 2     |
| DIRECTION_RIGHT      | 4     |
| DIRECTION_UP         | 8     |
| DIRECTION_DOWN       | 16    |
| DIRECTION_HORIZONTAL | 6     |
| DIRECTION_VERTICAL   | 24    |
| DIRECTION_ALL        | 30    |

2. **INPUT**

| Name         | Value |
| ------------ | ----- |
| INPUT_START  | 1     |
| INPUT_MOVE   | 2     |
| INPUT_END    | 4     |
| INPUT_CANCEL | 8     |

3. **STATE**

| Name             | Value       |
| ---------------- | ----------- |
| STATE_POSSIBLE   | 1           |
| STATE_BEGAN      | 2           |
| STATE_CHANGED    | 4           |
| STATE_ENDED      | 8           |
| STATE_RECOGNIZED | STATE_ENDED |
| STATE_CANCELLED  | 16          |
| STATE_FAILED     | 32          |

## 4.浏览器兼容性

![浏览器兼容性](https://upload-images.jianshu.io/upload_images/2135887-3482a830b1799626.jpg)
