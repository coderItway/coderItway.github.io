---
title: Function对象
author: Itway
date: 2023/01/09 22:30
categories:
  - JavaScript知识集
tags:
  - JavaScript基础
---

# {{ $frontmatter.title }}

> 示例网站：https://tsejx.github.io/javascript-guidebook/standard-built-in-objects/fundamental-objects/function/function

`Function` 构造函数通过 `new` 创建一个新的 `Function` 对象。 在 JavaScript 中，每个函数实际上都是一个 `Function` 对象。

## 语法

**构造函数**

```javascript
new Function ( [ argName1 [, argName1 [, argNameN... [, funcBody ]]]] )
```

**函数类型转换函数**

```javascript
Function ( [ argName1 [, argName1 [, argNameN... [, funcBody ]]]] )
```

|    参数    |                           说明                           | 类型   |
| :--------: | :------------------------------------------------------: | ------ |
| `argName1` |                 定义的第 1 个参数的名称                  | string |
| `argName2` |                 定义的第 2 个参数的名称                  | string |
| `argNameN` |         定义的第 N 个参数的名称，可以有任意多个          | string |
| `funcBody` | 定义的函数主体，即函数内部的执行代码，默认为空字符串("") | string |

`Function()` 会把传入的最后一个参数作为函数定义的执行代码，之前的所有参数均依次作为函数定义的参数。

如果没有指定任何参数，则表示该函数没有定义参数列表，函数的执行代码也为空。
如果只指定了一个参数，则该参数将被视作函数的执行代码。如果你想定义一个参数、执行代码为空，请传入两个参数，第二个参数为空字符串即可：`new Function("argName1", "")`。
`Function()` 的返回值是 Function 类型，返回一个函数对象。

## 描述

- 使用 `Function` 构造器生成的 `Function` 对象是在函数创建时解析的。这比你使用 函数声明 或者 函数表达式 并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的
- 所有被传递到构造函数中的参数，都将被视为是将被创建函数的参数，并且是相同的标识符名称和传递顺序
- 使用 `Function` 构造器生成的函数，并不会在创建它们的上下文中创建闭包；它们一般在全局作用域中被创建。当运行这些函数的时候，它们只能访问自己的本地变量和全局变量，不能访问 `Function` 构造器被调用生成的上下文的作用域。这和使用带有函数表达式代码的 `eval` 不同
- 以调用函数的方式调用 `Function` 的构造函数（而不是用 `new` 关键字）跟以构造函数来调用是一样的

## 构造函数

### 属性

|          属性          |                              描述                               |
| :--------------------: | :-------------------------------------------------------------: |
|  `Function.arguments`  | 以数组形式获取传入函数的所有参数。此属性已被 `arguments` 替代。 |
|   `Function.caller`    |                     获取调用函数的具体对象                      |
|   `Function.length`    |                     获取函数的接收参数个数                      |
|    `Function.name`     |                         获取函数的名称                          |
| `Function.displayName` |                     获取函数的 display name                     |

## 原型对象

|                属性                 |                              描述                              |
| :---------------------------------: | :------------------------------------------------------------: |
|     `Function.prototype.apply`      |       设定指定函数的调用上下文环境，并提供数组形式的参数       |
|      `Function.prototype.call`      |       设定指定函数的调用上下文环境，并提供列表形式的参数       |
|      `Function.prototype.bind`      | 绑定指定函数的调用上下文，无论如何调用均以该调用函数上下文为准 |
| ⚠️ `Function.prototype.isGenerator` |         用于检测函数对象是否为 `Generator` 生成器函数          |

> 说明：`call`、`apply`、`bind`都可以改变函数`this`指向。

## 示例
