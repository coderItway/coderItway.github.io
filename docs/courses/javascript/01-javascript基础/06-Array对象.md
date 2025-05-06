---
title: Array对象
author: Itway
date: 2023/01/08 22:03
categories:
  - JavaScript知识集
tags:
  - JavaScript基础
---

# {{ $frontmatter.title }}

> 示例网站：https://tsejx.github.io/javascript-guidebook/standard-built-in-objects/indexed-collections/array/array

`Array` 对象时用于构造数组的全局对象，类似于列表的高阶对象。

`Array` 对象主要用于存储多个数据项，数据可以是任意类型。

所有主流浏览器均支持该对象。

## 语法

**字面量**

```javascript
[element0, element1, ..., elementN]
```

**数组类型转换函数**

```javascript
Array(element0, element1, ..., elementN)
```

**构造函数**

```javascript
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
```

## 构造函数

### 属性

|       属性        |                                               描述                                               |
| :---------------: | :----------------------------------------------------------------------------------------------: |
|  `Array.length`   | `Array` 构造函数的 `length` 属性，其值为 1（注意该属性为静态属性，不是数组实例的 `length` 属性） |
| `Array.prototype` |                          通过数组的原型对象可以为所有数组对象添加属性。                          |

### 方法

|       方法        |                               描述                               |
| :---------------: | :--------------------------------------------------------------: |
|  `Array.form()`   |        从一个类似数组或可迭代对象中创建一个新的数组实例。        |
| `Array.isArray()` |                    用于判断指定值是否为数组。                    |
|   `Array.of()`    | 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 |

## 原型对象

所有数组实例都会从 Array.prototype 继承属性和方法。修改 Array 的原型会影响到所有的数组实例。

### 属性

|             属性              |                                               描述                                                |
| :---------------------------: | :-----------------------------------------------------------------------------------------------: |
| `Array.prototype.constructor` |    所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。    |
|   `Array.prototype.length`    | 上面说了，因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组。 |

## 示例

### 创建数组

```JavaScript
new Array(10);// 一个值是数组的长度，值为 empty（空
new Array('1','3');// 多个值与字面量一样
// = ["1","3"]
```

利用 `length` 可以在末尾添加一项

```javascript
as[as.length] = "red";

as[99] = "green"; // 下标 99 添加，3 到 98 都是undefined
```

转换方法

```javascript
var color = ["red", "pink", "green"];
color.toString(); // red,pink,green
color.valueOf(); // (3) ["red", "pink", "green"] 返回数组对象的原始值
```

### 改变原数组（7 个方法）

```javascript
arr.push(); // 末尾添加 一个/多个值, 返回新 length
arr.pop(); // 删除末尾的值，返回删除的值
arr.unshift(); // 前面添加 一个/多个值，返回新 length
arr.shift(); // 删除第一个值，返回删除的值
arr.reverse(); // 数组逆序，不是排序
arr.sort((a, b) => a - b); // 升序，return 大于 0 的值，a b互换，小于 0 不换
arr.splice(startIndex, length, "替换或插入的值 ?可选"); // 起始下标，截取的长度，返回剪切的 [数组]
```

### 不改变原数组

```javascript
arr.concat("12", [2]); // 拼接数字或字符，返回新数组
arr.slice(startIndex, endIndex); // 截取开始下标，结束下标 -1
arr.join("-"); // 返回以标识符连接字符串
arr.toString(); // 返回数组的字符串
arr.indexOf("2"); // 查找数值在数组的位置，有返回下标，没有返回 -1
Array.isArray([]); // 传入的参数是否是数组，是返回 true
```

### 数组迭代

```javascript
arr.every((items, i, arr) => {return 条件;}); // 条件每一项为 true，全部符合条件才为 true
arr.some((items, i, arr) => {return 条件;}); // 条件有一项为 true，则为 true
arr.filter((items, i, arr) => {return 条件;}); // 返回符合条件的值，组成数组返回，没有符合返回空[]
arr.forEach((items, i, arr) => {}); // 遍历
arr.map((items, i, arr) => {return val * 2;}); // 遍历每一项，组成新数组返回

// 归并
arr.reduce(function (prev, cur, index, array) {
  // prev 为此方法 return 的值，初始为数组的第一项
  // cur 为数组的下一项
  // index 下标
  // array 数组本身
  return prev + cur;
});
// arr.reduceRight 与 reduce 是一样的，从右边开始遍历
```

- `reduce` 计算数组总和

```javascript
[1, 2, 3].reduce(function (prev, next) {
  return prev + next;
});
```

- 利用 `reduce` 第二个参数，计算对象下某个值的总和

```javascript
var arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
arr.reduce(function (prev, next) {
  return prev + next.a;
}, 0);
```

如果没有 `reduce` 第二个参数，`prev` 初始值会是数组的第一项，设置初始值为 0 与下一项累加即可

### 类数组

```javascript
var obj = {
  0: "12",
  1: 21,
  2: "122",
  length: 1,
  splice: Array.prototype.splice,
};
console.log(obj); // 控制台会输出数组形式的数据，js 中的数组也是重写了 Object 的原型
```

条件:

1. 键为 `0 1 2 3` 的数字字符串（数组 `0 1 2` 也会被默认调用 `tostring` 以字符串存储为键）
2. 有 `length` 属性
3. 绑定 `splice` 为 `Array` 原型上的方法 此时输出的 `obj` 为数组

### 数组去重

- `forEach` 方法：

```javascript
var arr = [9, 9, 0, 0, 2, 3, 2, 3, 5];
var a = [];
arr.forEach(function (item, index, arr) {
  if (a.indexOf(item) == -1) {
    // if(a.includes(item)){ // 或
    a.push(item);
  }
});
```

- `ES6` 方法：

```javascript
var arr = [9, 9, 0, 0, 2, 3, 2, 3, 5];
console.log([...new Set(arr)]);
```

### 数组排序

- 冒泡排序

```javascript
// 二重循环，外层循环控制比较次数，内层，两两相邻进行比较换位，谁大谁换到后一位
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i; j++) {
    // 循环相邻两位比较，外层每走一次，内层的循环最大值，就减小 i
    // 内层循环进行相邻的两两比较
    if (arr[j] > arr[j + 1]) {
      // 如果前一项大于后一项，进行换位
      // 引入第3个变量，才能进行两个变量的值的交互
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
```

- 选择排序

```javascript
for (var i = 0; i < arr.length; i++) {
  // 外层循环，控制每次选择的下标
  for (var j = i + 1; j < arr.length; j++) {
    // 内层循环，控制 i 下标的后续下标
    if (arr[i] > arr[j]) {
      // 比较选择的下标值和后续的下标的值，谁小就将谁换到选择的下标上来，然后在用选择的下标上换来的值和后续下标值进行比较
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
```

- 递归排序

```javascript
function qSort(arr) {
  // 当 lArr 或 rArr 中只有一个数据项或没有数据项时，就返回该数组本身边界条件
  if (arr.length <= 1) {
    return arr;
  }
  // 获取中间下标值
  var mIndex = Math.floor(arr.length / 2);
  // 截取中间下标对应的值
  var mVal = arr.splice(mIndex, 1)[0];
  // 创建左右空数组
  var lArr = [],
    rArr = []; // 千万不能 var lArr = rArr = [];
  // 遍历数组中剩余的数据项，当该数据项小于 mVal 就放到 lArr 中，当大于 mVal 就放到 rArr
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mVal) {
      lArr.push(arr[i]);
    } else {
      rArr.push(arr[i]);
    }
  }
  // 合并返回新数组，切对 lArr 数组和 rArr 数组进行递归
  return qSort(lArr).concat(mVal, qSort(rArr));
}
```
