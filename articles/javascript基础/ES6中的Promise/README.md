# ES6中的Promise

## Promise 出现的原因
曾几何时,我们为了获取异步调用的结果，不得不大量使用回调函数，我们看下面这个例子：

通过Jquery的ajax获取服务器数据
```javascript 1.8
let url1 = 'http://xxx.xxx.1';
$.ajax({
    url:url1,
    error:function (error) {},
    success:function (data1) {
        console.log(data1);
    }
});
```
当需要发送多个异步请求，且每个请求之间需要相互依赖时，我们只能以嵌套的方式来解决
```javascript 1.8
let url1 = 'http://xxx.xxx.1';
let url2 = 'http://xxx.xxx.2';
let url3 = 'http://xxx.xxx.3';
$.ajax({
    url:url1,
    error:function (error) {},
    success:function (data1) {
        console.log(data1);
        $.ajax({
            url:url2,
            data:data1,
            error:function (error) {},
            success:function (data2) {
                console.log(data2);
                $.ajax({
                    url:url3,
                    data,
                    error:function (error) {},
                    success:function (data3) {
                        console.log(data3);
                    }
                });
            }
        });
    }
});
```
在处理多个异步逻辑时，就需要多层的回调函数嵌套，也就是我们常说的回调地域。

这种编码模式的主要问题：
+ 代码臃肿。
+ 可读性差。
+ 耦合度过高，可维护性差。
+ 代码复用性差。
+ 容易滋生 bug。
+ 只能在回调里处理异常。

而Promise的出现，就是为了解决回调函数所引出的各种问题

## 什么是Promise
Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。
+ 从语法上讲，promise是一个对象，从它可以获取异步操作的消息
+ 从本意上讲，它是承诺，承诺它过一段时间会给你一个结果

### 代码书写比较
首先封装一个支持Promise的ajax方法，不理解这块代码的话，也没有关系，后文会逐步讲解Promise的执行机制
```javascript 1.8
function request(url,data = {}){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url,
            data,
            success:function (data) {
                resolve(data);
            },
            error:function (error) {
                reject(error);
            }
        })
    });
}
```
用request方法实现前面多个互相依赖的网络请求
```javascript 1.8
let url1 = 'http://xxx.xxx.1';
let url2 = 'http://xxx.xxx.2';
let url3 = 'http://xxx.xxx.3';
request(url1)
    .then((data)=>{
        console.log(data);
        return request(url2,data)
    })
    .then((data)=>{
        console.log(data);
        return request(url3,data)
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error);
    });

```
## Promise的特性

### promise的状态

+ pending (等待态)
+ fulfilled (执行态)
+ rejected (拒绝态)

### 终值与拒因
+ 终值：指的是 promise 被解决时传递给解决回调的值
+ 拒因：拒绝原因，指在 promise 被拒绝时传递给异常回调的值

### 状态与状态关系，状态与终值和拒因的关系
+ pending 可以迁移至 fulfilled 或 rejected
+ fulfilled 不能迁移至其他状态，必须拥有一个不可变的终值
+ Rejected 不能迁移至其他状态，必须拥有一个不可变的据因


## Promise的使用

### 构造函数
Promise 是一个构造函数，使用new操作符返回一个promise对象

构造函数接收一个 excutor 函数作为参数

excutor 函数有两个函数类型的参数 resolve 和 reject
```javascript 1.8
let p = new Promise((resolve,reject)=>{
     // 在 excutor 函数中执行异步操作
     // 当异步操作完成后，调用 resolve 函数或 reject 函数
});
```
+ 构造函数在调用时，excutor函数会作为同步代码立即执行
    + 我们通常在excutor函数中执行我们的异步操作
+ 当异步操作执行成功，调用resolve函数
    + resolve函数的参数，作为promise对象的终值
    + promise对象的状态变为 fulfilled
+ 当异步操作执行失败，调用reject函数
    + reject函数的参数，作为promise对象的拒因
    + promise对象的状态变为 rejected
+ 未调用 resolve、reject 函数时，promise对象的状态为 pending

```javascript 1.8
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p1');
    },1000);    
});
// p1 的状态一直为 pending
```
```javascript 1.8
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p2');
        resolve('我是p2的终值')
    },1000);
});
// 代码执行，1000ms内，p2 的状态为 pending
// 代码执行，1000ms后，p2 的状态为 fulfilled
// 代码执行，1000ms后，p2 的终值为 '我是p2的终值'
```
```javascript 1.8
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p3');
        reject('我是p3的拒因')
    },1000);
});
// 代码执行，1000ms内，p3 的状态为 pending
// 代码执行，1000ms后，p3 的状态为 rejected
// 代码执行，1000ms后，p3 的终值为 '我是p3的拒因'
```

### promise对象上的方法

**then方法：**

promise 提供一个 then 方法，用于访问其终值和拒因。

promise 的 then 方法接受两个参数：
```javascript 1.8
promise.then(onFulfilled, onRejected);
```
+ onFulfilled 函数用于当promise状态变为 fulfilled 时，接收终值
+ onRejected 函数用于当promise状态变为 rejected 时，接收拒因
```javascript 1.8
new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('异步任务获取的数据')
	},50)
}).then((data)=>{
	console.log(data)
})
// 异步任务获取的数据
```
```javascript 1.8
new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject(new Error('异步任务异常'))
	},50)
}).then(null,(error)=>{
	console.log(error)
})
// Error: 异步任务异常
```
```javascript 1.8
new Promise((resolve,reject)=>{
	throw new Error('抛出一个异常');
}).then(null,(error)=>{
	console.log(error)
})
// Error: 抛出一个异常
```

#### onFulfilled 和 onRejected 参数可选
+ 如果 onFulfilled 不是函数，其必须被忽略
+ 如果 onRejected 不是函数，其必须被忽略
#### onFulfilled 特性
如果 onFulfilled 是函数：
+ 当 promise 执行结束后其必须被调用，其第一个参数为 promise 的终值
+ 在 promise 执行结束前其不可被调用
+ 其调用次数不可超过一次
#### onRejected 特性
如果 onRejected 是函数：
+ 当 promise 被拒绝执行后其必须被调用，其第一个参数为 promise 的据因
+ 在 promise 被拒绝执行前其不可被调用
+ 其调用次数不可超过一次
#### onFulfilled 和 onRejected 的调用时机
+ 当promise对象的状态变为 fulfilled 或 rejected 时调用
+ onFulfilled、onRejected 永远都是异步调用
+ onFulfilled、onRejected 是事件队里中作为微任务来处理
```javascript 1.8
console.log(1);
setTimeout(function(){
	console.log(2)
},0)
new Promise((resolve,reject)=>{
	resolve(3);
}).then((data)=>{
	console.log(data);
})
console.log(4)
// print: 1 4 3 2
```
#### onFulfilled 和 onRejected 的调用要求
onFulfilled 和 onRejected 必须被作为函数调用  
非严格模式下，this为全局对象    
严格模式下，this为undefined    
```javascript 1.8
function fn1(){
	new Promise((resolve)=>{
		resolve();
	}).then(function(){
		console.log(this)
	})
}
function fn2(){
	"use strict";
	new Promise((resolve)=>{
		resolve();
	}).then(function(){
		console.log(this)
	})
}
fn1(); // print: window
fn2(); // print: undefined
```
#### then方法的多次调用
+ then方法可以被同一个promise对象多次调用
+ then方法会返回一个新的promise对象
+ 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调
+ 当 promise 被拒绝执行时，所有的 onRejected 需按照其注册顺序依次回调

#### then方法的返回值


```javascript 1.8
// onFulfilled 是用来接收 promise 对象的终值
// onRejected 是用来接收 promise 对象的拒因
promise.then(onFulfilled, onRejected);
```
> onFulfilled 、onRejected 是异步调用的，在事件队列中作为微任务执行


## Promise 题目
### 题目一
### 题目二
### 题目三
### 题目四
### 题目五
### 题目六
### 题目七
### 题目八
### 题目九
### 题目十

## Promise的问题

## Promise 的升级
async/await





pending [ˈpendɪŋ]
fulfilled [fʊlˈfɪld]
reject [rɪˈdʒekt]
resolve [rɪˈzɒlv]
excutor [ɪgˈzekjətə(r)]
