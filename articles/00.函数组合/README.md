
# 组合和管道

## 引言

函数组合在函数式编程中被称为组合(composition),我们将了解组合的概念并学习大量的例子。然后创建自己的`compose`函数。

组合的概念是非常直观的，并不是函数式编程独有的，在我们生活中或者前端开发中处处可见。

比如我们现在流行的 SPA (单页面应用)，都会有组件的概念，为什么要有组件的概念呢，因为它的目的就是想让你把一些通用的功能或者元素组合抽象成可重用的组件，就算不通用，你在构建一个复杂页面的时候也可以拆分成一个个具有简单功能的组件，然后再组合成你满足各种需求的页面。

其实函数组合也是类似，函数组合就是一种将已被分解的简单任务组合成复杂任务的过程。

## 什么是组合

先看一个在 Linux 系统中常用的命令 `ps -ef | grep node`

这个命令的用处是将系统中与 node 有关的进程显示出来，其中`ps -ef`是显示所有进程的全格式，`grep node`是过滤与node有关的内容，`|`是将左侧的函数的输出作为输入发送给右侧的函数。

这个例子可能微不足道，但它传达了这样一个理念：

> 每一个程序的输出可以是另一个尚未可知的程序的输入

按照我们对组合的理解，现假定有`compose`函数可以实现如下功能：

```javascript
function compose(...fns){
    //忽略
}
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m,n)(x) === f(g(m(n(x))
//···
```

我们可以看到`compose`函数，会接收若干个函数作为参数，每个函数执行后的输出作为下一个函数的输出，直至最后一个函数的输出作为最终的结果。

## 应用 compose 函数

在创建并完善我们自己的`compose`函数前，我们先来学习一下如何应用`compose`函数。

假定有这样一个需求：对一个给定的数字四舍五入求值，数字为字符型。

常规实现：

```javascript
let n = '3.56';
let data = parseFloat(n);
let result = Math.round(data); // =>4 最终结果
```

在这段代码中，可以看到`parseFloat`函数的输出作为输入传递给`Math.round`函数以获得最终结果，这是`compose`函数能够解决的典型问题。

用`compose`函数改写：

```javascript
let n = '3.56';
let number = compose(Math.round,parseFloat);
let result = number(n); // =>4 最终结果
```

这段代码的核心是通过`compose`将`parseFloat`和`Math.round`组合到一起，返回一个新函数`number`。

> 这个组合的过程就是函数式组合！我们将两个函数组合在一起以便能及时的构造出一个新函数！

再举一个例子，假设我们有两个函数：

```javascript
let splitIntoSpaces = str => str.split(' ');
let count = array => array.length;
```

现希望构建一个新函数以便计算一个字符串中单词的数量，可以很容易的实现：

```javascript
let countWords = compose(count,splitIntoSpaces);
```

调用一下：

```javascript
let result = countWords('hello your reading about composition'); // => 5
```

## 开发中组合的用处

假设我们有这样一个需求：给你一个字符串，将这个字符串转化成大写，然后逆序。

我们的常规思路如下：

```javascript
let str = 'jspool'

//先转成大写，然后逆序
function fn(str) {
    let upperStr = str.toUpperCase()
    return upperStr.split('').reverse().join('')
}

fn(str) // => "LOOPSJ"
```

这段代码实现起来没什么问题，但现在更改了需求，需要在将字符串大写之后，将每个字符拆开并封装成一个数组：

"jspool" => `["J","S","P","O","O","L"]`

为了实现这个目标，我们需要更改我们之前封装的函数，这其实就破坏了设计模式中的开闭原则。

> 开闭原则：软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的。

那么在需求未变更，依然是字符串大写并逆序，应用组合的思想来怎么写呢？

原需求，我们可以这样实现：

```javascript
let str = 'jspool'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

let toUpperAndReverse = compose(stringReverse, stringToUpper)
let result = toUpperAndReverse(str) // "LOOPSJ"
```

那么当我们需求变化为字符串大写并拆分为数组时，我们根本不需要修改之前封装过的函数：

```javascript
let str = 'jspool'

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
let result = toUpperAndArray(str) // => ["J","S","P","O","O","L"]

```

可以看到当变更需求的时候，我们没有打破以前封装的代码，只是新增了函数功能，然后把函数进行重新组合。

> 可能有人会有疑问，应用组合的方式书写代码，当需求变更时，依然也修改了代码，不是也算破坏了开闭原则么？其实我们修改的是调用的逻辑代码，并没有修改封装、抽象出来的代码，而这种书写方式也正是开闭原则所提倡的。

我们假设，现在又修改了需求，现在的需求是，将字符串转换为大写之后，截取前3个字符，然后转换为数组，那么我们可以这样实现：

```javascript
let str = 'jspool'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function getThreeCharacters(str){
    return str.substring(0,3)
}

function stringToArray(str) {
    return str.split('')
}

let toUpperAndGetThreeAndArray = compose(stringToArray, getThreeCharacters,stringToUpper)
let result = toUpperAndGetThreeAndArray(str) // => ["J","S","P"]
```

从这个例子，我们可以知道，组合的方式是真的就是抽象单一功能的函数，然后再组成复杂功能，不仅代码逻辑更加清晰，也给维护带来巨大的方便。

## 实现组合

先回看`compose`函数到底做了什么事：

```javascript
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m)(x) === f(g(m(x))
// compose(f,g,m,n)(x) === f(g(m(n(x))
//···
```

概括来说，就是接收若干个函数作为参数，返回一个新函数。新函数执行时，按照`由右向左`的顺序依次执行传入`compose`中的函数，每个函数的执行结果作为为下一个函数的输入，直至最后一个函数的输出作为最终的输出结果。

如果`compose`函数接收的函数数量是固定的，那么实现起来很简单也很好理解。

只接收两个参数：

```javascript
function compose(f,g){
    return function(x){
        return f(g(x));
    }
}
```

只接收三个参数：

```javascript
function compose(f,g,m){
    return function(x){
        return f(g(m(x)));
    }
}
```

上面的代码，没什么问题，但是我们要考虑的是`compose`接收的参数个数是不确定的，我们考虑用rest参数来接收：

```javascript
function compose(...fns){
    return function(x){
        //···
    }
}
```

现在`compose`接收的参数`fns`是一个数组，那么现在思考的问题变成了，如何将数组中的函数`从右至左`依次执行。

我们选择数组的`reduceRight`函数来实现:

```javascript
function compose(...fns){
    return function(x){
        return fns.reduceRight(function(arg,fn){
            return fn(arg);
        },x)
    }
}
```

这样我们就实现了`compose`函数~

## 实现管道

`compose`的数据流是`从右至左`的，因为最右侧的函数首先执行，最左侧的函数最后执行！

但有些人喜欢`从左至右`的执行方式，即最左侧的函数首先执行，最右侧的函数最后执行！

> 从左至右处理数据流的过程称之为管道(pipeline)!

`管道(pipeline)`的实现同`compose`的实现方式很类似，因为二者的区别仅仅是数据流的方向不同而已。

对比`compose`函数的实现，仅需将`reduceRight`替换为`reduce`即可：

```javascript
function pipe(...fns){
    return function(x){
        return fns.reduce(function(arg,fn){
            return fn(arg);
        },x)
    }
}
```

与`组合`相比，有些人更喜欢`管道`。这只是个人偏好，与底层实现无关。重点是`pipe`和`compose`做同样的是事情，只是数据流放行不同而已！我们可以在代码中使用`pipe`或`compose`，但不要同时使用，因为这会在团队成员中引起混淆。如果要使用，请坚持只用一种组合的风格。












