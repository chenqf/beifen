// @flow Created by 陈其丰 on 2019/4/12.


let p = new Promise((resolve,reject)=>{
    reject('error')
})
let p1 = new Promise((resolve,reject)=>{
    resolve(p)
})