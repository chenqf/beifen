
# 组合和管道

## 引言

函数组合在函数式编程中被称为组合(composition),我们将了解组合的概念并学习大量的例子。然后创建自己的 compose 函数。

组合的概念是非常直观的，并不是函数式编程独有的，在我们生活中或者前端开发中处处可见。

比如我们现在流行的 SPA (单页面应用)，都会有组件的概念，为什么要有组件的概念呢，因为它的目的就是想让你把一些通用的功能或者元素组合抽象成可重用的组件，就算不通用，你在构建一个复杂页面的时候也可以拆分成一个个具有简单功能的组件，然后再组合成你满足各种需求的页面。

其实我们函数式编程里面的组合也是类似，函数组合就是一种将已被分解的简单任务组织成复杂的整体过程。

## 什么是组合

先看一个我们在 Linux 系统中常用的命令 `ps -ef | grep node`

这个命令的用处是将系统中与 node 有关的进程显示出来，其中`ps -ef`是显示所有进程的全格式，`grep node`是过滤与node有关的内容，`|`是将左侧的函数的输出作为输入发送给右侧的函数。

这个例子可能微不足道，但它传达了这样一个理念：

> 每一个程序的输出可以是另一个尚未可知的程序的输入

## 开发中组合的用处

假设我们有这样一个需求：给你一个字符串，将这个字符串转化成大写，然后逆序。

我们的常规思路如下：

```javascript
let str = 'bingshanfe'

// 一行代码搞定
function fn1(str) {
    return str.toUpperCase().split('').reverse().join('')
}

// 或者 按要求一步一步来，先转成大写，然后逆序
function fn2(str) {
    let upperStr = str.toUpperCase()
    return upperStr.split('').reverse().join('')
}

console.log(fn1(str)) // "EFNAHSGNIB"
console.log(fn2(str)) // "EFNAHSGNIB"
```

这段代码实现起来没什么问题，但现在更改了需求，需要在将字符串大写之后，将每个字符拆开并封装成一个数组：`bingshanfe` => `["B","I","N","G","S","H","A","N","F","E"]`

```javascript
function fn(str){
    //...忽略
}
fn('bingshanfe') // ["B","I","N","G","S","H","A","N","F","E"]
```

为了实现这个目标，我们需要更改我们之前封装的函数，这其实就破坏了设计模式中的开闭原则。

那么在需求未变更，依然是字符串大写并逆序，应用组合的思想来怎么写呢：

假定有`compose`函数可以实现如下功能：

```javascript
function compose(...fns){
    //忽略
}
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m,n)(x) === f(g(m(n(x))
```

原需求，我们可以这样实现：

```javascript
let str = 'bingshanfe'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

let toUpperAndReverse = compose(stringReverse, stringToUpper)
let res = toUpperAndReverse(str) // "EFNAHSGNIB"
```

那么当我们需求变化的时候，我们根本不需要修改之前封装过的东西：

```javascript
let str = 'bingshanfe'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function stringToArray(str) {
    return str.split('')
}

let toUpperAndArray = compose(stringToArray, stringToUpper)
let res = toUpperAndArray(str)
// ["B","I","N","G","S","H","A","N","F","E"]
```

可以看到当变更需求的时候，我们没有打破以前封装的代码，只是新增了函数功能，然后把函数进行重新组合。

> 这里可能会有人说，需求修改，肯定要更改代码呀，你这不是也删除了以前的代码么，也不是算破坏了开闭原则么。我这里声明一下，开闭原则是指一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。是针对我们封装，抽象出来的代码，而不是调用的逻辑代码。所以这样写并不算破坏开闭原则。

我们假设，现在又修改了需求，现在的需求是，将字符串转换为大写之后，截取前6个字符，然后转换为数组，那么我们可以这样实现：

```javascript
let str = 'bingshanfe'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function getSixCharacters(str){
    return str.substring(0,6)
}

function stringToArray(str) {
    return str.split('')
}

let toUpperAndGetSixAndArray = compose(stringToArray, getSixCharacters,stringToUpper)
let res = toUpperAndGetSixAndArray(str)
// ["B","I","N","G","S","H"]
```

我们发现并没有修改之前封装的代码，只是新增了一个函数，更换了函数的组合方式。

可以看到，组合的方式是真的就是抽象单一功能的函数，然后再组成复杂功能。

这种方式既锻炼了你的抽象能力，也给维护带来巨大的方便。


## 实现管道(pipe)

















## 组合

先来一个最简单的版本：

```javascript
const compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};
```

`f`和`g`都是函数，应用`compose`后返回一个新函数，`x`是新函数的入参。



在`compose`的定义中，`g`将先于`f`执行，因此就创建了一个从右到左的数据流。这样做的可读性远远高于嵌套一大堆的函数调用，如果不用组合，shout 函数将会是这样的：


## 组合的优势

### 结合律

### tap函数调试

## 推荐的函数式工具库