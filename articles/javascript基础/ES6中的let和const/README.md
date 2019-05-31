# ES6中的let和const

## 前言

let 和 const 是 ES6 中新增的命令，是用于解决 ES5 中使用 var 命令声明变量的一些问题而出现的，
在了解 let 和 const 之前，我们先来简单回看一下 var 命令的一些不合理的问题，然后再来 了解 let 和 const 的特性。

## var 的问题

var 主要有如下几个不合理的地方：

+ 没有块级作用域
+ 重复声明
+ 绑定全局作用域
+ 变量提升



### 没有块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域。

```javascript
for(var i = 0; i<10; i++){
    //...    
}
console.log(i); // 输出 10
```
对于有块级作用域的语言来说，for 语句初始化变量的表达式所定义的变量，只会存在于循环的环境中。
而对于 ES5 中的 var 命令来说，由 for 语句创建的变量 i 即使在 for 循环结束执行后，也依旧存在于循环外部的执行环境中。


### 重复声明
使用 var 语句重复声明变量是合法且无害的。
```javascript
var a = 1;
console.log(a); //print : 1
var a = 2;
console.log(a); //print : 2
var a = 3;
console.log(a); //print : 3
```
在大多数语言中，在同一个作用域多次声明同一个变量是非法的，但是在 ES5 中使用 var 命令重复声明的没有任何问题的。


### 绑定全局作用域
在全局作用域下通过 var 命令声明变量，会创建一个新的全局变量作为全局对象的属性。
```javascript
var a = 1;
console.log(window.a); // print: 1
```

我们仅仅只是在全局作用域中通过 var 声明了一个变量，这个变量居然就挂载到了全局对象上，
这完全超出了我们的预期，是不是很不合理呢！


### 变量提升
JS引擎在对代码进行编译解释的时候，会查找所有通过 var 命令声明的变量，会将创建变量的时机提升到当前作用域

**第一个例子：**
```javascript
if( flg ){
    var value = 1;
}
console.log(value);
```

初学者可能会觉得只有 flg 为 true 的时候，才会创建 value，如果 flg 为 false，结果应该是报错，然而因为变量提升的原因，代码相当于：

```javascript
var value;
if (flg) {
    value = 1;
}
console.log(value); // flg 为true 的时候，输出 1；flg 为false 的时候，输出 undefined
```

**第二个例子：**
```javascript
console.log(tmp); // print : undefined
var tmp = 1;
console.log(tmp); // print : 1
```
初学者可能认为我们第一次打印 tmp 的时候应该抛出异常，因为此时 tmp 还没有声明。
其实不然，因为 ES5 中的 var 命令存在变量提升，会将变量创建和初始化阶段提升至作用域顶部，
将变量的赋值阶段保留在当前位置。


## let 和 const 

为了解决 var 所产生的种种不合理的情况，ES6 新增了 let 和 const 命令，用于创建安全稳定易理解的变量。

### 块级作用域

ES6 中新增了块级作用域，并且块级作用域可以任意嵌套

```javascript
{
    let a = 1;
    console.log(a); // print: 1
}
console.log(a); // print error：ReferenceError: a is not defined
```
这个例子中，通过 let 命令声明的变量 a 仅在块级作用域内生效，所以在块级作用域外引用变量 a 会提示未定义。

### 不绑定全局作用域
```javascript
let a = 1;
const b = 1;
console.log(window.a); // print: undefined
console.log(window.b); // print: undefined
```
let 和 const 命令在全局作用域下创建变量，并不会绑定至全局对象中。


### 不存在变量提升
为了纠正 var 命令会发生变量提升的现象，let 和 const 命令改变了语法行为，
let 和 const 所声明的变量一定要在声明后使用，否则报错。
```javascript
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
上面代码中，变量 foo 用 var 命令声明，会发生变量提升，即脚本开始运行时，变量 foo 已经存在了，但是没有值，所以会输出 undefined。
变量 bar 用 let 命令声明，不会发生变量提升。这表示在声明它之前，变量 bar 是不存在的，这时如果用到它，就会抛出一个错误。


### 不可重复声明
let 和 const 不允许在相同作用域内，重复声明同一个变量。
```javascript
let a = 1;
var a = 2; //print error : Identifier 'a' has already been declared
```

```javascript
let a = 1;
let a = 2; // print error: Identifier 'a' has already been declared
```

在函数体中重新声明形参，同样报错
```javascript
function fn(params){
    let params = 1;
} // print error: Identifier 'params' has already been declared
```

### 暂时性死区

暂时性死区(Temporal Dead Zone)，简写为 TDZ。

let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错。
```javascript
console.log(x); // print error: ReferenceError: value is not defined
let x = 1;
```
这是因为 JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，
要么将声明放在 TDZ 中(遇到 let 和 const 声明)。
访问 TDZ 中的变量会触发运行时错误。
只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。

简单的来说，只要当前作用域内使用 let 和 const 命令创建了变量，那么在当前作用域的开始直到变量声明的一刻，
这个阶段就叫做暂时性死区，也就是说从当前作用域的开始到变量创建的一刻，只要使用了这个变量就会报错。

**无法使用和当前作用域内同名的外部变量**
```javascript
let name = 'tom';
function fn(){
    console.log(name); // print error : ReferenceError: name is not defined
    let name = 'jack'
}
fn();
```

**typeof不再是一个百分之百安全的操作**
```javascript
typeof x; // ReferenceError
let x;
```
变量 x 使用 let 命令声明，所以在声明前，都属于 x 的死区，只要用到变量 x 就会报错。

## let 和 const 的区别

const 声明的是一个只读常量，一旦声明，常量的值就不能改变。
```javascript
const x = 1; 
x = 2; // print error: TypeError: Assignment to constant variable.
```

const 声明的时候必须立即初始化，不能等到以后赋值，只声明不赋值，就会报错。
```javascript
const y; // print error:SyntaxError: Missing initializer in const declaration
```

const 实际上保证的并不是变量的值不可改动，而是变量指向的内存地址所保存的数据不可变更。

对于简单类型，值就保存在变量指向的那个内存地址，因此等同于常量。

但对于引用类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，
const 只能保证这个指针是固定的（即总是指向另一个固定的地址），
至于它指向的数据结构是不是可变的，就完全不能控制了

```javascript
const foo = {};
foo.prop = 123;
foo.prop // 123

foo = {}; // print error: TypeError: Assignment to constant variable. 
```
上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。
不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。


+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
+ [前端性能](https://github.com/chenqf/blog/blob/master/articles/前端性能)
+ [网络](https://github.com/chenqf/blog/blob/master/articles/网络)
+ [技术随笔](https://github.com/chenqf/blog/blob/master/articles/技术随笔)
