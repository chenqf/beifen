// @flow Created by 陈其丰 on 2019/4/12.

let p = new Promise((resolve,reject)=>{
    throw new Error();
});
let p1 = p.then(null,(data)=>{
    return '我是p2的终值'
});
p1.then((data)=>{
    console.log(data)
});