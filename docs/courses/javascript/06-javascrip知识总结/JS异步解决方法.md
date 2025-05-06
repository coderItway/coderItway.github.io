---
title: JS异步解决方案
author: Itway
date: 2022/12/28 15:00
categories:
 - JavaScript知识集
tags:
 - JavaScript方法总结
---

# JS 异步解决方案

## 回调函数(callback)

**回调函数** 简单理解就是一个函数被作为参数传递给另一个函数。回调是早期最常用的一种异步解决方案。

回调并不一定就是异步，并没有直接关系。

举个简单的例子：

```js
function f1(cb) {
  setTimeout(() => {
    cb && cb();
  }, 2000);
}

f1(() => {
  console.log("1");
});
复制代码;
```

如上，我们使用 `setTimeout` 在函数 `f1` 中模拟了一个耗时 `2s` 的任务，耗时任务结束后会抛出一个回调，那么我们在调用时就可以做到在函数 `f1` 的耗时任务结束后执行回调函数了。

采用这种方式，我们把同步操作变成了异步操作， `f1` 不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。

优点：简单、容易理解

缺点：代码不优雅，可读性差，不易维护，高度耦合，层层嵌套造成 **回调地狱**

## 事件监听(发布订阅模式)

**发布订阅模式** 定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将会得到通知。

其实我们都用过发布订阅模式，比如我们在 `DOM` 节点上绑定一个事件函数：

```js
document.body.addEventListener("click", function () {
  console.log("点击");
});
复制代码;
```

但这只是对发布订阅模式最简单的使用，在很多场景下我们经常会使用一些自定义事件来满足我们的需求。

发布订阅模式有很多种实现方式，下面我们用 `class` 来简单实现下：

```js
class Emitter {
  constructor() {
    this._listener = [];
  }

  on(type, fn) {
    this._listener[type]
      ? this._listener[type].push(fn)
      : (this._listener[type] = [fn]);
  }

  trigger(type, ...rest) {
    if (!this._listener[type]) return;

    this._listener[type].forEach((callback) => callback(...rest));
  }
}
复制代码;
```

如上所示，我们创建了一个 `Emitter` 类，并且添加了两个原型方法 `on` 和 `trigger`，使用如下：

```js
const emitter = new Emitter();

emitter.on("done", function (arg1, arg2) {
  console.log(arg1, arg2);
});

emitter.on("done", function (arg1, arg2) {
  console.log(arg2, arg1);
});

function fn1() {
  console.log("我是主程序");
  setTimeout(() => {
    emitter.trigger("done", "异步参数一", "异步参数二");
  }, 1000);
}

fn1();
复制代码;
```

我们先创建一个 `emitter` 实例，接着注册事件，再触发事件，也解决了异步问题。

优点：比较符合模块化思想，我们自写监听器时可以做很多优化从而更好地监控程序运行。

缺点：整个程序变成了事件驱动，流程上或多或少都会有点影响，每次使用还得注册事件监听再进行触发挺麻烦的，代码也不太优雅。

## Promise

ES2015(ES6)标准化和引入了 `Promise` 对象，它是异步编程的一种解决方案。

简单来说就是用同步的方式写异步的代码，可用来解决回调地狱问题。

`Promise` 对象状态一旦改变，就不会再变，只有两种变化可能：

>

1. 从 `Pending` 变为 `Resolved`
2. 从 `Pending` 变为 `Rejected`

我们用 `setTimeout` 模拟异步操作：

```js
function analogAsync(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 500), n);
  });
}

function fn1(n) {
  console.log(`step1 with ${n}`);
  return analogAsync(n);
}

function fn2(n) {
  console.log(`step2 with ${n}`);
  return analogAsync(n);
}

function fn3(n) {
  console.log(`step3 with ${n}`);
  return analogAsync(n);
}
复制代码;
```

用 `Promise` 来实现：

```js
function fn() {
  let time1 = 0;
  fn1(time1)
    .then((time2) => fn2(time2))
    .then((time3) => fn3(time3))
    .then((res) => {
      console.log(`result is ${res}`);
    });
}

fn();
复制代码;
```

优点： `Promise` 用同步的方式写异步的代码，避免了层层嵌套的回调函数，可读性更好。链式操作，可以在 `then` 中继续写 `Promise` 对象并返回，然后继续调用 `then` 来进行回调操作。

缺点： `Promise` 对象一旦新建就会立即执行，无法中途取消。若不设置回调函数， `Promise` 内部会抛出错误，不会流到外部。

## Generator

`Generator` 其实是一个函数，只不过是一个特殊的函数。普通函数，你执行了这个函数，函数内部不会停，直到这个函数结束。 `Generator` 这个函数特殊之处就是中间可以停。

示例：

```js
function* generatorFn() {
  console.log("a");
  yield "1";
  console.log("b");
  yield "2";
  console.log("c");
  return "3";
}

let it = generatorFn();
it.next();
it.next();
it.next();
it.next();
复制代码;
```

上面这个示例就是一个 `Generator` 函数，它有如下特点：

>

- 不同于普通函数， `Generator` 函数在 `function` 后面，函数名之前有个 `*`
- 函数内部有 `yield` 字段
- 调用后其函数返回值使用了 `next` 方法

优点：优雅的流程控制方式，可以让函数可中断执行

缺点： `Generator` 函数的执行必须靠执行器，只针对异步处理来说，还是不太方便

## async/await

ES2017 标准引入了 `async` 函数，使得异步操作变得更加方便。 `async` 是异步的意思，而 `await` 是 `async wait` 的简写，即异步等待， `async/await` 的出现，被很多人认为是 js 异步操作的最终且最优雅的解决方案。

`async` 函数返回的是一个 `Promise` 对象，如果在 `async` 函数中直接 `return` 一个直接量， `async` 会把这个直接量通过 `Promise.resolve()` 封装成 `Promise` 对象返回。

`await` 等待的是一个表达式，这个表达式的计算结果是 `Promise` 对象或者其它值(换句话说，就是没有特殊限定，啥都行)。

>

- 如果 `await` 后面不是 `Promise` 对象，直接执行
- 如果 `await` 后面是 `Promise` 对象会阻塞后面的代码， `Promise` 对象 `resolve`，然后得到 `resolve` 的值，作为 `await` 表达式的运算结果
- `await` 只能在 `async` 函数中使用

上述用 `setTimeout` 模拟异步操作，我们用 `async/await` 来实现：

```js
async function fn() {
  let time1 = 0;
  let time2 = await fn1(time1);
  let time3 = await fn2(time2);
  let res = await fn3(time3);
  console.log(`result is ${res}`);
}

fn();
复制代码;
```

输出结果和上面用 `Promise` 实现是一样的，但这个 `async/await` 代码结构看起来清晰得多，几乎跟同步写法一样，十分优雅。

优点：内置执行器，更好的语义，更广的适用性

缺点：滥用 `await` 可能会导致性能问题，因为 `await` 会阻塞代码
