// @flow Created by 陈其丰 on 2019/4/12.
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