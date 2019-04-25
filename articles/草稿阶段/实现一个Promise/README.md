# 实现一个Promise

## 前言
本文主要在于探究 Promise 的实现原理，带领大家一步一步实现一个 Promise ，不会对其概念用法做过多的说明，如果对 Promise 用法还不了解，请参考 [Promise/A+](https://promisesaplus.com/)

## promise 的基本概念
先来看一个 Promise 最基本的例子
```javascript
console.log(1)
let promise1 = new Promise((resolve,reject)=>{
    console.log(2)
	setTimeout(()=>{
	    console.log(3)
		resolve(4)
		console.log(5)
	},50)
	console.log(6)
})
console.log(7)
let promise2 = promise1.then((data)=>{
    console.log(data)
})
// print: 1 2 6 7 3 5 4
```
通过这个简单的例子，我们一边回忆 Promise 的基本概念，一边简单实现一个 MyPromise

+ Promise 对象的三种状态
    + pending  （执行态)
    + fulfilled (完成态)，此时拥有唯一终值
    + rejected  (异常态)，此时拥有唯一拒因
```javascript
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
```
+ Promise 是构造函数
    + 默认状态为 pending
    + 接收一个函数作为参数
    + 此函数接收两个用于转换 Promise 对象状态的函数作为参数
    + 此函数为同步执行,出现异常，状态变为 rejected，异常作为拒因
```javascript
class MyPromise{
	constructor(fn){
		this.state = PENDING;
		this.value = null;
		this.reason = null;
		// 期望将 state 由 PENDING 变为 FULFILLED
		let _resolve = ()=>{
			// ...
		}
		// 期望将 state 由 PENDING 变为 REJECTED		
		let _reject = ()=>{
			// ...
		}
		try{
			fn(_resolve,_reject);		
		}catch(e){
			_reject(e);
		}
	}
}
```
+ Promise 对象的 then 方法
    + then 在任何状态下均可多次调用
    + then 方法接受两个参数 onFulfilled onRejected
    + onFulfilled 函数用于当 promise 状态变为 fulfilled 时，接收终值
    + onRejected 函数用于当 promise 状态变为 rejected 时，接收拒因
    + onFulfilled onRejected 的返回值作为新生成的promise对象的终值
    + onFulfilled onRejected 执行时出现的异常作为新生成的promise对象的拒因
    + onFulfilled onRejected 异步执行
    + onFulfilled onRejected 不是函数会被忽略并出现穿透

构造函数中定义队列 fulfilledCallbacks rejectedCallbacks 用于保存当状态变更时的回调函数
状态变更时调用 fulfilledCallbacks 或 rejectedCallbacks 中的回调事件
```javascript
class MyPromise{
    constructor(fn){
        this.state = PENDING;
        this.value = null;
        this.reason = null;
        
        this.fulfilledCallback = [];
        this.rejectedCallback = [];

        // 期望将 state 由 PENDING 变为 FULFILLED
        let _resolve = (val)=>{
            // val 是 promise 对象或 thenable 对象
            if((typeof val === 'function' || typeof val === 'object') && typeof val.then === 'function'){
                return val.then(_resolve,_reject)
            }
            setTimeout(()=>{
                if (this.state === PENDING) {
                    this.state = FULFILLED;
                    this.value = val;
                    this.fulfilledCallback.forEach(f=>f())
                }
            },0)
        }
        // 期望将 state 由 PENDING 变为 REJECTED		
        let _reject = (rea)=>{
            setTimeout(()=>{
                if (this.state === PENDING) {
                    this.state = REJECTED;
                    this.reason = rea;
                    this.rejectedCallback.forEach(f=>f())
                }
            },0)
        }
        try{
            fn(_resolve,_reject);		
        }catch(e){
            _reject(e);
        }
    }
}
```  
定义 resolutionProcedure 方法
```javascript
/**
 * @param  promise2 then 方法返回的 promise 对象        
 * @param  x        onFulfilled 或 onRejected 函数的返回值     
 * @param  resolve  promise2 的状态转换函数
 * @param  reject   promise2 的状态转换函数       
 */
function resolutionProcedure(promise2,x,resolve,reject){

}
```
```javascript
class MyPromise{
    constructor(fn){
        //...
    }
    then(onFulfilled,onRejected){
        
        let promise2;
    }
}
```



+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
+ [前端性能](https://github.com/chenqf/blog/blob/master/articles/前端性能)
