// @flow Created by 陈其丰 on 2019/4/12.
let p = new Promise((resolve,reject)=>{
    resolve('我是p的终值');
});
let p1 = p.then((data)=>{
    throw new Error('异常')
});
p1.then(null,(err)=>{
    console.log(err);
});