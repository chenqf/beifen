// @flow Created by 陈其丰 on 2019/4/12.


let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p1');
    },1000);
});


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p2');
        resolve('我是p2的终值')
    },1000);
});