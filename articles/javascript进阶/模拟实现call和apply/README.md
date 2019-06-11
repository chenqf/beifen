# 模拟实现call和apply

## 简单介绍一下 call 和 apply

call、apply、bind三者均来自Function.prototype，被设计用来用于改变函数体内this的指向。

举个 call 的例子：

```javascript
let foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo);
// print: 1
```

在这个例子中，我们注意到 call 改变了 this 的指向，指向 foo ,并且 bar 函数执行了

#### call

> apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。    

```javascript
func.apply(thisArg, [argsArray])
```

+ **thisArg**
	+ 可选的参数，在 func 函数运行时使用的 this 值。
    + 注意，不一定是该函数执行时真正的 this 值，非严格模式下会出现一下情况
        + 指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），
        + 指定为原始值，会指向原始值对应的包装对象
+ **argsArray**
    + 可选的参数。一个数组或者类数组对象
    + 其中的数组元素的每一项将作为单独的参数传给 func 函数
    + 如果该参数的值为 null 或  undefined，则表示不需要传入任何参数
    + 从ECMAScript 5 开始可以使用类数组对象。

#### apply

> call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数。

+ **thisArg** 
    + 可选的参数，在 func 函数运行时使用的 this 值。
    + 注意，不一定是该函数执行时真正的 this 值，非严格模式下会出现一下情况
        + 指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），
        + 指定为原始值，会指向原始值对应的包装对象
+ **arg1,arg2,arg3,...**
    + 可选的参数
    + 指定参数列表
    
## 简单模拟实现

在这里只考虑非严格模式下对call和apply的模拟实现，又由于Symbol没有对应的包装对象，在此不考虑Symbol类型作为this的情况

call 和 apply 都是改变了this的指向，让新的对象可以执行该函数。

那么我们的思路就变成给新的对象添加一个函数，然后在执行完以后删除。

实现如下：

```javascript
Function.prototype.myCall = function(thisArg,...args) {
    // undefined null 时 thisArg 重置为window
    // 基本类型时 thisArg 重置为对应的包装对象
    if(thisArg === undefined || thisArg === null){
        thisArg = window;
    }else if(typeof thisArg === 'number'){
        thisArg = new Number(thisArg);
    }else if(typeof thisArg === 'string'){
        thisArg = new String(thisArg);
    }else if(typeof thisArg === 'boolean'){
        thisArg = new Boolean(thisArg);
    }
    //为thisArg设置fn属性，绑定当前函数
    thisArg.fn = this;
    //获取函数调用结果
    let result = thisArg.fn(...args);
    //删除临时增加的属性fn
    delete thisArg.fn;
    //返回最终结果
    return result;

};

Function.prototype.myApply = function(thisArg,args) {
    return this.myCall(thisArg,...args)
};
```

