// @flow Created by 陈其丰 on 2019/4/12.


let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p3');
        reject('我是p3的拒因')
    },1000);
});