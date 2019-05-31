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

对于参数来说，有很多不确定性，我们可以在 bind 的时候指定参数，也可以在新函数中指定参数，那具体的规则是什么呢？

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

bind 函数可以在指定 this 的同时，同时指定为新函数预设参数，当然也可以不预设参数。

接下来我们来实现预设参数的特性

```javascript
Function.prototype.myBind = function(thisArg,...args) {
    let func = this;
    return function(){
        //将 arguments 转换为 数组 并与 myBind 函数的 args 合并
        let _args = [...args,...Array.prototype.slice.call(arguments)];
        return func.apply(thisArg,_args);
    }
}
```

那么我们模拟实现bind完成了么？ NO~！ bind 还有一些隐藏特性~


## 作为构造函数使用的绑定函数
> 来自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BB%91%E5%AE%9A%E5%87%BD%E6%95%B0)的解释：     
> 绑定函数自动适应于使用 new 操作符去构造一个由目标函数创建的新实例。当一个绑定函数是用来构建一个值的，原来提供的 this 就会被忽略。不过提供的参数列表仍然会插入到构造函数调用时的参数列表之前。

我们来用一个例子来解释：
```javascript
function Point(x,y) {
  this.x = x;
  this.y = y;
}
Point.prototype.print = function() {
  console.log(this.x,this.y);
}
let NewPoint = Point.bind({},1,2)
new NewPoint().print(3,4); // print: 1 2 
```

从这个例子，我们可以看到，如果 bind() 返回的函数用作构造函数：
+ 忽略传入 bind() 的 this
+ 原始函数作为构造函数的形式被调用
+ 传入 bind() 时提供的参数，作为构造函数的参数

依照上面的规则，简单修改下我们的模拟代码：
```javascript
Function.prototype.myBind = function(thisArg,...args) {
    let func = this;
    //最终返回的新函数
    let fBound = function(){
        //将 arguments 转换为 数组 并与 myBind 函数的 args 合并
        let _args = [...args,...Array.prototype.slice.call(arguments)];
        //当作为构造函数执行时，传递的this为当前实例，否则为传入的this
        let context = this instanceof fBound ? this : thisArg;
        return func.apply(context,_args);
    }
    //将新函数的原型链重置为原函数的原型链
    //作为构造函数执行时，返回的对象获取了原函数原型链上的所有属性及方法
    fBound.prototype = func.prototype;
    return fBound;
}
```

在上文中的这段代码：
```javascript
fBound.prototype = func.prototype;
```
+ 其目的是模拟作为构造函数执行时，原函数作为构造函数被执行    
+ 因为构造函数被执行后生成的对象从原函数中继承 prototype    
+ 所以通过将新函数的 prototype 重置为原函数的 prototype   

但这样做，引入了一个新的问题，如果我们修改 fBound.prototype 时，也会同时修改原函数的 prototype

所以我们考虑用一个空函数来进行中转：
```javascript
Function.prototype.myBind = function(thisArg,...args) {
    let func = this;
    //最终返回的新函数
    let fBound = function(){
        //将 arguments 转换为 数组 并与 myBind 函数的 args 合并
        let _args = [...args,...Array.prototype.slice.call(arguments)];
        //当作为构造函数执行时，传递的this为当前实例，否则为传入的this
        let context = this instanceof fBound ? this : thisArg;
        return func.apply(context,_args);
    }
    //中转函数
    let fNOP = function(){}
    fNOP.prototype =func.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

## 最后一点小问题

我们知道对于函数来说，函数有一个属性 length 代表这个函数形参的个数
```javascript
let fn = function(a,b,c,d) {};
console.log(fn.length); // print : 4
```

而对于 bind() 返回的函数对象的 length 属性是绑定函数的形参个数减去绑定实参的个数（length 不能小于零）
```javascript
let fn = function(a,b,c,d) {};
let newFn = fn.bind(null,1,2);
console.log(newFn.length); // print: 2
```

简单实现：
```javascript
Function.prototype.myBind = function(thisArg,...args) {
    let func = this;
    //最终返回的新函数
    let fBound = function(){
        //将 arguments 转换为 数组 并与 myBind 函数的 args 合并
        let _args = [...args,...Array.prototype.slice.call(arguments)];
        //当作为构造函数执行时，传递的this为当前实例，否则为传入的this
        let context = this instanceof fBound ? this : thisArg;
        return func.apply(context,_args);
    }
    //中转函数
    let fNOP = function(){}
    fNOP.prototype =func.prototype;
    fBound.prototype = new fNOP();
    //修改新函数的length属性
    fBound.length = Math.max(0,func.length - args.length)
    return fBound;
}
```


+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
+ [前端性能](https://github.com/chenqf/blog/blob/master/articles/前端性能)
+ [网络](https://github.com/chenqf/blog/blob/master/articles/网络)
+ [技术随笔](https://github.com/chenqf/blog/blob/master/articles/技术随笔)
