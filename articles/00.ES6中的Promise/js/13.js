// @flow Created by 陈其丰 on 2019/4/12.

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