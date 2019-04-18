## 模拟实现 bind

## 什么是 bind

bind方法，顾名思义，就是绑定的意思，到底是怎么绑定然后怎么用呢？

我们首先来看一下[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)中对于bind的定义以及bind的语法。

### bind 的定义:
>bind() 方法创建一个新的函数，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

### bind 的语法:
```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]])
```
**参数:**  
+ thisArg
    + 调用绑定函数时作为this参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用bind在setTimeout中创建一个函数（作为回调提供）时，作为thisArg传递的任何原始值都将转换为object。如果bind函数的参数列表为空，执行作用域的this将被视为新函数的thisArg。
+ arg1, arg2, ...
    + 当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。

**返回值:**
+ 返回一个原函数的拷贝，并拥有指定的this值和初始参数。

### 一个简单的例子
```javascript
let foo = {
    value: 1
};
function bar(arg) {
    console.log(this.value,arg);
}
// 返回了一个函数
let bindFoo = bar.bind(foo,2);
bindFoo(); // print: 1  2
```

### 对bind的简单归纳
    
+ 返回一个新函数
+ 为新函数指定 this
+ 为新函数指定参数

## 开始实现我们的 bind 函数

先考虑第一个特点，返回一个新函数
```javascript
Function.prototype.myBind = function() {
    let func = this;
    return function(...args){
        return func(...args);
    }
}
```

再考虑第二个特点，为新函数指定 this

我们知道可以通过使用 apply 或 call 来为函数指定 this , 在这里我们用 apply 来实现

```javascript
Function.prototype.myBind = function(thisArg) {
    let func = this;
    return function(...args){
        return func.apply(thisArg,args);
    }
}
```

再考虑第三个特点，为新函数指定参数

对于参数来说，有很多不确定性，我们可以在 bind 的时候指定参数，也可以在新函数中指定参数，那具体的规则时什么呢？

来看关于 bind 函数，参数的一个例子

```javascript
let fn = function(a,b){
    console.log(a,b);
}
let fn1 = fn.bind(null);
fn1('a','b'); // print: a b
let fn2 = fn.bind(null,1);
fn2('a','b'); // print: 1 a
let fn3 = fn.bind(null,1,2)
fn3('a','b'); // print: 1 2
```

由此我们得出这样的结论：



