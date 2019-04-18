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
+ 为新函数指定this
+ 为新函数指定参数

## 开始实现我们的 bind 函数




