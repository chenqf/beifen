// @flow Created by 陈其丰 on 2019/4/12.
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