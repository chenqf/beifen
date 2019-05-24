# 立即调用的函数表达式


## 基础回顾

立即调用的函数表达式是我们经常使用的函数编码模式之一，也被称之为 IIFE 。

在我们了解 IIFE 是什么以及为什么需要它之前，我们需要快速回顾一下关于 Javascript 函数中的基本概念。

### 函数声明

```javascript
function say() {
    console.log('Hello World');
}

say(); // print: Hello World
```

+ 我们在 1-3 行定义了一个名为 say 的函数，
+ 第 5 行使用函数名以及一对圆括号对函数进行调用。

这种创建函数的方式称之为：函数声明。

通常，刚接触 Javascript 的开发人员使用这种语法没有问题，
因为它非常类似于其他流行的编程语言中的函数或方法。

我们需要注意的是，函数声明总是以 function 关键字开头，后面紧跟着函数的名称，
并且名称不可省略。

### 函数表达式

```javascript
let msg = 'Hello World';
let say = function() {
  console.log(msg);
}

say(); // print：Hello World
```

+ 第1行声明了 msg 变量并为其分配了一个字符串值
+ 第 2-4 行声明 say 变量并为其赋予函数类型的值
+ 第 6 行使用变量名以及一对圆括号对函数进行调用

在上面的例子中，我们为变量 say 赋予了函数类型的值，
这种赋值运算符右侧的函数通常称为: 函数表达式。

函数表达式在 Javascript 中无处不在，我们可能编写的大多数回调函数通常都是函数表达式。

因此，我们要知道一个重要的概念，在 Javascript 中函数几乎与其他任何值一样，
既可以位于赋值运算符的右侧，也可以作为参数传递给其他函数。

### 匿名函数

顾名思义，匿名函数就是没有名字的函数。

```javascript
let say = function() {
  console.log('Hello World');
}
```
我们创建了一个函数表达式，而它其实也是匿名函数，
因为 function 关键字后面没有名字。

### 具有名称的函数表达式

函数表达式同样可以有函数名称，此时函数名称只是函数体内的一个本地变量，无法在外部调用，
它的最主要的作用是在递归中使用。

```javascript
let fn = function say() {
    console.log('Hello World');
}
say(); // print error ：say is not defined
```

## 开始 IIFE

我们已经简单回顾了函数定义和函数表达式，现在让我们直接进入 IIFE 的秘密世界。

我们希望得到的是一个可以立即执行的函数，那么我们声明一个函数，
然后通过括号()来执行不就行了么，我们来试一下


它们有几种风格。让我们首先看到一个非常容易理解的变体。

```javascript
!function() {
    console.log("Hello from IIFE!");
}();
```

当帮这段代码复制到浏览器的控制台中尝试时，会在控制台中打印我们想要输出的内容。

接下来，我们来理解这段不是那么直观的代码：

在 Javascript 语言中，当 function 关键字视为有效语句中的第一个单词时，
Javascript 引擎会将其当做函数声明来处理。
因此，为了防止这种情况的发生，我们在第 1 行代码中的 function 关键字前加上 “!”前缀。
此时 Javascript 会将这段代码视为函数表达式。

在代码的第 3 行，通过一对圆括号对函数表达式进行调用。

所以，我们得出结论，什么是 IIFE：函数表达式，在创建后立即执行，就成为 IIFE。

通过将“!”替换为“+”，“-”，“~”甚至“void”，“typeof”甚至“delete”。

我们可以在浏览器的控制台上，尽情的尝试~
```javascript
!function(){console.log('!')}();
+function(){console.log('+')}();
-function(){console.log('-')}();
~function(){console.log('~')}();
void function(){console.log('void')}();
typeof function(){console.log('typeof')}();
delete function(){console.log('delete')}();
```

上面例子中，关键字 function 前的“!、+、-、~、void、typeof、delete”所做的事，
就是将函数转换为函数表达式而不是函数声明。

这种方式构造的 IIFE 很容易理解，接下来我们介绍其他更传统和更广泛使用的 IIFE 风格。

### 经典 IIFE 风格

```javascript
(function(){
    console.log("I'm not IIFE")
})
```

在上面的代码中，函数表达式包含在第 1-3 行的括号中。
它还不是 IIFE，因为函数表达式永远不会被执行。
现在要将该代码转换为 IIFE，我们有以下两种风格变化：

```javascript
//方法1
(function(){
    console.log("I'm IIFE")
})()
//方法2
(function(){
    console.log("I'm IIFE")
}())
```

现在我们生成了 2 个 IIFE，可能很难注意到这二者的区别，解释一下：

1. 在方法1中和方法2中，我们都是用一对括号()将函数体包裹起来，使之变成函数表达式。
2. 在方法1中，用于调用函数表达式的括号()，包含在外括号内。
3. 在方法2中，用于调用函数表达式的括号()，在外括号外。

这两种方法都被广泛的使用，我们可以根据自己的喜好使用其中任何一个。


现在让我们再看一个有效的例子，以及两个无效的例子。
我们将从现在开始命名我们的 IIFE，因为使用匿名函数通常不是一个好主意。

```javascript
//有效的IIFE
(function initAppIIFE() {
    //所有你的神奇代码
}());

//以下两个是无效的IIFE示例
function nonWorkingIIFE() {
    //现在你知道为什么你需要我周围的那些括号！
    //如果没有这些括号，我是一个函数声明，而不是一个表达式。
    //你会收到语法错误！
}();

function () {
     //这里也会出现语法错误！
}();
```

我们得出一个结论：

只有函数表达式能够创建 IIFE ，函数声明永远不会用于创建 IIFE。

### IIFE 和私有变量

IIFE 非常擅长的一件事就是能够为 IIFE 创建私有作用域。

在 IIFE 内声明的任何变量对外界都不可见。

来看一个例子：

```javascript
(function IIFE_initApp() {
    // IIFE 的私有变量，外部无法访问
    let lives;
    let weapons;
    init();

    // IIFE 的私有函数，外部无法访问
    function init() {
        lives = 5;
        weapons = 10;
    }
}());
```

当我们需要创建一堆变量和函数时，我们定义一个 IIFE 并在 IIFE 内创建我们所需的变量和函数，
这样既不会污染全局空间，也可以保护自己的代码不被他人以外的影响。

### 具有返回值的 IIFE

如果我们不需要来自 IIFE 的返回值，那么我们可以使用我们最先介绍的通过一元运算符（!、+、-、~等）来实现的IIFE。
```javascript
~function IIFE_initApp() {
    //...
}
```

但 IIFE 的另一个非常重要且强大的功能是它们可以返回可以分配给变量的值。


