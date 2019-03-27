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
+ 未调用 resolve、reject 函数时，promise对象的状态为 pending
```javascript 1.8
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p1');
    },1000);    
});
// p1 的状态一直为 pending
```
+ 当异步操作执行成功，调用resolve函数
    + resolve的参数为非promise对象、非thenable对象
        + resolve函数的参数，作为promise对象的终值
        + promise对象的状态变为 fulfilled
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
+ 当异步操作执行失败，调用reject函数
    + reject函数的参数，作为promise对象的拒因
    + promise对象的状态变为 rejected
```javascript 1.8
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p3');
        reject('我是p3的拒因')
    },1000);
});
// 代码执行，1000ms内，p3 的状态为 pending
// 代码执行，1000ms后，p3 的状态为 rejected
// 代码执行，1000ms后，p3 的拒因为 '我是p3的拒因'
```
+ 当异步操作执行成功，调用resolve函数
    + resolve的参数为promise对象
        + promise对象的状态、终值、拒因与传入的promise对象同步
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	reject('error')
})
let p1 = new Promise((resolve,reject)=>{
	resolve(p)
})
// p1 的状态为 rejected ，拒因为 error
```
+ 当异步操作执行成功，调用resolve函数
    + resolve的参数为thenable对象
        + 会对thenable对象进行展开操作，promise对象的状态、终值、拒因取决于thenable对象的then方法调用结果
```javascript 1.8
let thenable1 = {
	then:function(resolve,reject){
		resolve(1)
	}
}
let thenable2 = {
	then:function(resolve,reject){
		reject(2)
	}
}
let thenable3 = {
	then:function(resolve,reject){
		throw new Error(3)
	}
}
let thenable4 = {
	then:function(fn1,fn2){
		//不调用 fn1 fn2
	}
}
let p1 = new Promise((resolve,reject)=>{
	resolve(thenable1);
})
let p2 = new Promise((resolve,reject)=>{
	resolve(thenable2);
})
let p3 = new Promise((resolve,reject)=>{
	resolve(thenable3);
})
let p4 = new Promise((resolve,reject)=>{
	resolve(thenable4);
})
// p1 的状态为 fulfilled 终值为 1
// p2 的状态为 rejected  终值为 2
// p3 的状态为 rejected  拒因为 Error：3
// p4 的状态为 pending
```   
### promise对象上的方法

#### **then方法：**

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

##### onFulfilled 和 onRejected 参数可选
+ 如果 onFulfilled 不是函数，其必须被忽略
+ 如果 onRejected 不是函数，其必须被忽略
##### onFulfilled 特性
如果 onFulfilled 是函数：
+ 当 promise 执行结束后其必须被调用，其第一个参数为 promise 的终值
+ 在 promise 执行结束前其不可被调用
+ 其调用次数不可超过一次
##### onRejected 特性
如果 onRejected 是函数：
+ 当 promise 被拒绝执行后其必须被调用，其第一个参数为 promise 的据因
+ 在 promise 被拒绝执行前其不可被调用
+ 其调用次数不可超过一次
##### onFulfilled 和 onRejected 的调用时机
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
##### onFulfilled 和 onRejected 的调用要求
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
##### then方法的多次调用
+ then方法可以被同一个promise对象多次调用
+ then方法会返回一个新的promise对象
+ 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调
+ 当 promise 被拒绝执行时，所有的 onRejected 需按照其注册顺序依次回调
```javascript 1.8
let p = new Promise((resolve)=>{
	resolve()
});
let p1 = p.then(()=>{
	console.log('异步执行，第一个onFulfilled');
});
let p2 = p.then(()=>{
	console.log('异步执行，第二个onFulfilled');
});
console.log(p1.constructor === Promise);
console.log(p === p1);
console.log(p === p2);
console.log(p1 === p2);
// print: true
// print: false
// print: false
// print: false
// print: 异步执行，第一个onFulfilled
// print: 异步执行，第二个onFulfilled
```
##### then方法的返回值
then 方法返回一个 promise 对象
```javascript 1.8
promise2 = promise1.then(onFulfilled, onRejected);   
```
+ 若 onFulfilled 、onRejected 返回一个非promise对象、非thenable对象的值 x ，则 promise2 的状态为 fulfilled ，终值为 x
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	throw new Error();
});
let p1 = p.then(null,(data)=>{
	return '我是p2的终值'
});
p1.then((data)=>{
	console.log(data)
});
// print: 我是p2的终值
```
+ 若 onFulfilled 、onRejected 返回一个promise对象的值 x ，promise2 的状态、终值、拒因与 x 同步
```javascript 1.8
let p1 = new Promise((resolve,reject)=>{
	resolve(1)
})
let p2 = new Promise((resolve,reject)=>{
	reject(2)
})
let p3 = new Promise((resolve)=>{
	resolve()
})
let p4 = p3.then(()=>{
	return p1;
})
let p5 = p3.then(()=>{
	return p2;
})
// p4 的状态为 fulfilled 终值为 1
// p5 的状态为 rejected  拒因为 2
```
+ 若 onFulfilled 、onRejected 返回一个thenable对象 ，会对thenable对象进行展开操作，promise2 的状态、终值、拒因取决于thenable对象的then方法调用结果
```javascript 1.8
let thenable1 = {
	then:function(resolve,reject){
		resolve(1)
	}
}
let thenable2 = {
	then:function(resolve,reject){
		reject(2)
	}
}
let p1 = new Promise((resolve,reject)=>{
	resolve()
})
let p2 = p1.then(()=>{
	return thenable1;
})
let p3 = p1.then(()=>{
	return thenable2;
})
// p2 的状态为 fulfilled 终值为 1
// p3 的状态为 rejected  拒因为 2
```
+ 若 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 的状态为 resolved，拒因为 e
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	resolve();
});
let p1 = p.then((data)=>{
	throw new Error('error')
});
p1.then(null,(err)=>{
	console.log(err);
});
// print:　Error: error
```
+ 若 onFulfilled 不是函数且 promise1 成功执行， promise2 的状态为 fulfilled 终值为 promise1 的终值
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	resolve('我是p1的终值');
});
let p1 = p.then(null,null);
p1.then((data)=>{
	console.log(data);
});
// print:　我是p1的终值
```
+ 若 onRejected 不是函数且 promise1 拒绝执行， promise2 的状态为 rejected 拒因为 promise1 的拒因
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	reject('我是p1的拒因');
});
let p1 = p.then(null,null);
p1.then(null,(err)=>{
	console.log(err);
});
// print:我是p1的拒因
```
+ 若 onFulfilled、onRejected 执行过程中抛出异常，则 promise2 的状态为 rejected 拒因为抛出的异常
```javascript 1.8
let p = new Promise((resolve,reject)=>{
	resolve('我是p的终值');
});
let p1 = p.then((data)=>{
	throw new Error('异常')
});
p1.then(null,(err)=>{
	console.log(err);
});
// print:Error: 异常
```
##### 终值和拒因的冒泡特性
+ 如果promise的状态变为Fulfilled，then方法没有注册 onFulfilled
    + then方法返回的 promise 对象的状态变为Fulfilled
    + then方法返回的 promise 对象的终值与原 promise 对象的终值相同
+ 如果promise的状态变为 Rejected，then方法没有注册 onRejected
    + then方法返回的 promise 对象的状态变为 Rejected
    + then方法返回的 promise 对象的拒因与原 promise 对象的拒因相同
```javascript 1.8
let p1 = new Promise((resolve,reject)=>{
	resolve(1)
})
let p2 = new Promise((resolve,reject)=>{
	reject(2)
})

let p3 = p1.then(null,null);
let p4 = p2.then(null,null);
// p3 的状态是 fulfilled 终值 1
// p4 的状态是 rejected  拒因 2


p5 = p3.then(null,null);
p6 = p4.then(null,null);
// p3 的状态是 fulfilled 终值 1
// p4 的状态是 rejected  拒因 2
```
+ 冒泡特性主要用于异常处理
```javascript 1.8
let fn1 = function(){}
let fn2 = function(){}
let fn3 = function(){}
let fn4 = function(){}
let fn5 = function(){}
let onError = function(){};
new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject()
	})
})
.then(fn1)
.then(fn2)
.then(fn3)
.then(fn4)
.then(fn5)
.then(null,onError)
```
#### **catch方法：**
catch(fn) 方法实际上是 then(null,fn) 方法的别名
```javascript 1.8
new Promise((resolve,reject)=>{
	reject()
}).then(null,function(error){

})
// 等同于
new Promise((resolve,reject)=>{
	reject()
}).catch(function(error){

})
```
### Promise 的静态方法
#### Promise.resolve
+ Promise.resolve 方法用于将现有数据转换为promise对象
    + 若入参为 promise 对象
        + 返回的 promise 对象的状态、终值、拒因与 Promise.resolve 方法的入参同步
    + 若入参为 thenable 对象
        + 会对thenable对象进行展开操作，返回的 promise 对象的状态、终值、拒因取决于thenable对象的then方法调用结果
    + 若入参为非 promise 非 thenable 对象
        + 返回的 promise 对象的状态为 Fulfilled
        + 返回的 promise 对象的终值为 Promise.resolve 方法的入参
```javascript 1.8
let p = Promise.resolve(x)
// 等价于
let p = new Promise((resolve)=>{
	resolve(x)
})
```
#### Promise.reject
+ Promise.reject 方法用于返回一个状态为 Rejected ,拒因为方法入参的promise对象
```javascript 1.8
let p = Promise.reject(x)
// 等价于
let p = new Promise((resolve,reject)=>{
	reject(x)
})
```
#### Promise.all
+ Promise.all 方法用于将多个 promise 对象包装成一个新的promise对象
```javascript 1.8
const p = Promise.all([p1, p2, p3]);
```
+ p1、p2、p3 都是 promise 对象，如果不是，调用 Promise.resolve 方法转换为 promise 对象
+ p 的状态由 p1、p2、p3 决定
    + 当 p1、p2、p3 的状态都变成fulfilled
        + p 的状态为 fulfilled
        + 此时 p1、p2、p3 的终值组成一个数组，这个数组作为 p 的终值
    + 当 p1、p2、p3 的状态有一个变成 rejected
        + p 的状态变为 rejected
        + 此时第一个状态变为 rejected 的promise对象的拒因作为 p 的拒因
```javascript 1.8
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = 3;

Promise.all([p1,p2,p3]).then((data)=>{
	console.log(data); // print: [1,2,3]
})
```
```javascript 1.8
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p2 error')
	},1000)
})
let p3 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p3 error')
	},500)
})
Promise.all([p1,p2,p3]).catch((error)=>{
	console.log(error); // print: p3 error
})
```
#### Promise.race
+ Promise.all 方法同样用于将多个 promise 对象包装成一个新的promise对象
```javascript 1.8
const p = Promise.race([p1, p2, p3]);
```
+ p1、p2、p3 都是 promise 对象，如果不是，调用 Promise.resolve 方法转换为 promise 对象
+ p 的状态由 p1、p2、p3 中状态最先变为 fulfilled 或 rejected 的 promise 对象决定
+ p 的终值或拒因由最先变更状态的 promise 对象所决定
```javascript 1.8
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p2 error')
	},1000)
})
let p3 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p3 error')
	},500)
})
Promise.race([p1,p2,p3]).then(data=>{
	console.log(data);
}).catch(error=>{
	console.log(error);
})
// print: 1
```
```javascript 1.8
let p1 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		resolve(1)
	},1000)
})
let p2 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p2 error')
	},800)
})
let p3 = new Promise((resolve,reject)=>{
	setTimeout(function(){
		reject('p3 error')
	},500)
})

Promise.race([p1,p2,p3]).then(data=>{
	console.log(data);
}).catch(error=>{
	console.log(error);
})
// print: p3 error
```
## Promise 的错误捕获
当 promise 的状态为 Rejected 且为对 promise 对象使用 catch 方法，此时的异常信息会被 promise 对象吃掉
可以通过监听 unhandledRejection 事件，专门监听未捕获的reject错误
```javascript 1.8
// node 环境下
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
});
// 浏览器下
window.addEventListener('unhandledrejection',(e)=>{
    e.preventDefault();
    console.log(e);
});
```
## Promise 的问题
+ 无法取消Promise，若没有状态变更，也无法停止promise的等待
+ 不设定then或catch方法，构造函数(excutor函数)错误，无法捕获
+ 未完成状态时，无法得知是刚开始，还是即将完成

## Promise 题目
### 题目一
```javascript 1.8
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)
```
### 题目二
```javascript 1.8
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
```
### 题目三
```javascript 1.8
Promise.resolve(1)
  .then((data) => {
    console.log(data)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((data) => {
    console.log(data)
  })
```
### 题目四
```javascript 1.8
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```
### 题目五
```javascript 1.8
new Promise((resolve,reject)=>{
    console.log(3);
    let p = new Promise((resolve, reject)=>{
        console.log(7);
        setTimeout(()=>{
           console.log(5);
           resolve(6); 
        },0)
        resolve(1);
    }); 
    resolve(2);
    p.then((arg)=>{
        console.log(arg);
    });

}).then((arg)=>{
    console.log(arg);
});
console.log(4);
```





