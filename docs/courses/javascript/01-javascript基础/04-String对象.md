---
title: String对象
author: Itway
date: 2023/01/04 10:42
categories:
  - JavaScript知识集
tags:
  - JavaScript基础
---

# {{ $frontmatter.title }}

> 示例网站：https://tsejx.github.io/javascript-guidebook/standard-built-in-objects/text-processing/string/string

`String` 对象是一个用于 **字符串** 或一个 **字符序列** 的构造函数。

`String` 对象是文本字符串的对象形式。`String` 对象允许操作和格式化文本字符串以及确定和定位字符串中的子字符串。

## 语法

**构造函数**

```javascript
new String([value]);
```

**字符串类型转换函数**

```javascript
String([value]);
```

| 参数  |   类型   |             说明             |
| :---: | :------: | :--------------------------: |
| value | 任意类型 | 任何可以被转换成字符串的值。 |

## 说明

### 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为 模板字面量：

```javascript
const w = "world"`Hello ${w}!`;
```

### 转义字符

除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中：

| 转义字符 |          输出          |
| :------: | :--------------------: |
|   `\0`   |         空字符         |
|   `\'`   |         单引号         |
|   `\"`   |         双引号         |
|   `\\`   |         反斜杠         |
|   `\n`   |          换行          |
|   `\r`   |          回车          |
|   `\v`   |       垂直制表符       |
|   `\t`   |       水平制表符       |
|   `\b`   |          退格          |
|   `\f`   |          换页          |
| `\uXXXX` |       Unicode 码       |
|  `\xXX`  | Latin-1 字符（x 小写） |

和其他语言不同，JavaScript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行 。

## 示例

### 转换为字符串

- toString()

几乎所有值都有的 toString()方法，字符串 toString()方法只是简单地返回自身的一个副本，null 和 undefined 值没有

```js
let age = 11;
let ageAsString = age.toString(); // 字符串"11"
let found = true;
let foundAsString = found.toString(); // 字符串"true"

// 参数为进制数，默认10进制
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```

- String()

因为 null 和 undefined 没有 toString()方法，就直接返回了字面量文本。

```js
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"
```

::: tip
用加号操作符给一个值加上一个空字符串""也可以将其转换为字符串
:::

### 取值

```js
str.charAt(1); // 返回下标
str[1]; // 返回下标
str.charCodeAt(1); // 返回下标对应Unicode编码
String.fromCharCode(97, 99); // 'ac' 返回对应Unicode码对应字符
```

### 截取

- 不会对原始字符串修改，返回值的副本
- 只有一个参数，截取到字符结束

```js
str.substring(0, 2);
```

1. 起始下标，结束下标 -1
2. 起始大于结束，会互换
3. 起始为负数，默认变 0

```js
str.slice(0, 3);
```

1. 起始下标，结束下标-1
2. 起始大于结束，不换位，返回空字符串
3. 出现负值，为倒数 = length + 负数

```js
str.substr(1, 3);
```

1. 起始下标，截取位数
2. 出现负值，为倒数 = length + 负数

### 位置查询

```js
str.indexOf("o"); // 查询字符下标 没有返回 -1
str.lastIndexOf("o"); // 从末尾查询 下标还是从左开始 没有返回 -1
str.indexOf("o", 6); // 下标 6 开始查询
str.lastIndexOf("2", 3); // 下标 3 向下标 0 倒序搜
str.search("ol"); // 下标 0 开始查找 indexOf 但可以传正则
```

### 分隔/拼接

```js
// 分隔
str.split("，", 2);
// 参数 1：以“,”分隔 返回数组，可以传正则
// 参数 2：可选，返回数组的 length，后面多余的不会有

// 拼接
str.concat("!"); // 拼接字符串
```

### 编辑/替换

```js
str.trim(); // 删除前后的空格，中间的空格不会删除，返回副本

// replace：查找字符，要替换字符
str.replace("at", "oo"); // coo, bat, sat  只会替换第一个
str.replace(/at/g, "oo"); // coo, boo, soo  全局替换要正则表达式
```

### 大小写转换

```js
str.toUpperCase(); // AAA  BB 大写
str.toLocaleUpperCase(); // AAA  BB 大写
str.toLowerCase(); // aaa  bb 小写
str.toLocaleLowerCase(); // aaa  bb 小写
```

带 Locale 是针对地区的转换，Unicode 码可能存在不同

### URI 编码方法

```js
encodeURI("https://www.baidu.com /"); // https://www.baidu.com%20/（只有空格替换成 %20）
encodeURIComponent("https://www.baidu.com /"); // https%3A%2F%2Fwww.baidu.com%20%2F （除字母数字符号，替换成对应的编码）
decodeURI("https://www.baidu%23.com%20"); // https://www.baidu%23.com ( %20 会变成空格，%23 是 decodeURIComponent 的字符不会被转换  )
decodeURIComponent(url1); // https://www.baidu#.com （所有的字符变成原来的，但这个字符不是一个有效的 URL）
```

### eval()

解析字符串 js 代码

```js
eval("function hi(){console.log('hi');}");
hi(); // eval 可以将字符串直接当做完整的 js 代码解析运行
eval("var a = 'hello world'"); // 不会有变量提升，因为包含在字符串中，只有 eval 运行的时候才会被解析
```

:::warning
当开启严格模式后 eval 会存在作用域
:::

### localeCompare()

- 比较字符串在字母表的前后
- 在前面返回 1
- 在后面返回 -1

```js
var str = "yellow";
str.localeCompare("brick"); // 1
str.localeCompare("yellow"); // 0
str.localeCompare("zoo"); // -1

// 姓名比较 sort姓名排序
"张".localeCompare("啊", "cn"); // 1 张Z 的字母表 在 啊A 的后面

// 中文的比较方法 ---- 可以比较任何文字
var arr = [
  { name: "武丽昕", num: 78 },
  { name: "汤文博", num: 38 },
  { name: "卢文博", num: 58 },
  { name: "付秋萍", num: 79 },
];
arr.sort(function (a, b) {
  // 中文名 进行排序
  return a.name.localeCompare(b.name, "zh");
});
```
