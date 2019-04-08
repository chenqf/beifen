

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function resolutionProcedure(promise2, x, resolve, reject) {

}



class Promise{
    constructor(fn){
        this.state = PENDING;  //状态
        this.value = undefined;//终值
        this.reason = undefined;//拒因

        // 状态为 PENDING 时，保存当状态变更为 FULFILLED 时的回调函数
        this.resolveCallback = [];
        // 状态为 PENDING 时，保存当状态变更为 REJECTED 时的回调函数
        this.rejectCallback = [];

        // fn 中的 resolve 函数
        this.resolve = (val)=>{

        }
        // fn 中的 reject 函数
        this.reject = (err)=>{

        }

        // 用于解决 fn 函数中异常，promise 对象状态变更为 REJECTED
        try{
            fn(this.resolve,this.reject)
        }catch(e){
            this.reject(e)
        }
    }
    then(onFulfilled,onRejected){
        return new this.constructor((resolve,reject)=>{

        })
        //当前then方法返回的promise对象
        let promise2;
        // onFulfilled 必须是函数，不是函数实现穿透
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
        // onRejected 必须是函数，不是函数实现穿透
        onRejected = typeof onRejected === 'function' ? onRejected : e=> {throw new Error(e)};


        //状态为 Pending 将回调函数保存，用作状态变更时调用 onFulfilled 或 onRejected
        if (this.state === PENDING) {
            return (promise2 = new Promise((resolve,reject)=>{
                this.resolveCallback.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.value);
                            resolutionProcedure(promise2,x,resolve,reject);
                        }catch(e){
                            reject(e);
                        }

                    })
                })
                this.rejectCallback.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.reason);
                            resolutionProcedure(promise2,x,resolve,reject);
                        }catch(e){
                            reject(e);
                        }

                    })
                })
            }))
        }
        //状态为 FULFILLED 异步执行 onFulfilled
        if (this.state === FULFILLED) {
            return (promise2 = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try{
                        let x = onFulfilled(this.value);
                        resolutionProcedure(promise2,x,resolve,reject);
                    }catch(e){
                        reject(e);
                    }

                })
            }))
        }
        //状态为 REJECTED 异步执行 onRejected
        if (this.state === REJECTED) {
            return (promise2 = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason)
                        resolutionProcedure(promise2,x,resolve,reject);
                    }catch(e){
                        reject(e)
                    }
                })
            }))
        }
    }
    catch(onRejected){
        return this.then(null,onRejected);
    }
    static all(arr = []){
        let len = arr.length,
            result = [];
        return new Promise((resolve,reject)=>{
            arr.forEach((p)=>{
                Promise.resolve(p).then((val)=>{
                    result.push(val);
                    if(result.length === len){
                        resolve(result)
                    }
                },(err)=>{
                    reject(err);
                })
            })
        })
    }
    static race(arr = []){
        return new Promise((resolve,reject)=>{
            arr.forEach((p)=>{
                Promise.resolve(p).then((val)=>{
                    resolve(val)
                },(err)=>{
                    reject(err)
                })
            })
        })
    }
    static resolve(val){
        return new Promise((resolve,reject)=>{
            resolve(val);
        })
    }
    static reject(err){
        return new Promise((resolve,reject)=>{
            reject(err);
        })
    }
}