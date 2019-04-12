// @flow Created by 陈其丰 on 2019/4/12.


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('异步任务获取的数据')
    },50)
}).then((data)=>{
    console.log(data)
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('异步任务异常'))
    },50)
}).then(null,(error)=>{
    console.log(error)
})


new Promise((resolve,reject)=>{
    throw new Error('抛出一个异常');
}).then(null,(error)=>{
    console.log(error)
})




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