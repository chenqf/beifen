// @flow Created by 陈其丰 on 2019/4/12.


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