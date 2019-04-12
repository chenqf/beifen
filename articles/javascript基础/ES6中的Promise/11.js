// @flow Created by 陈其丰 on 2019/4/12.
let p = new Promise((resolve,reject)=>{
    resolve('我是p1的终值');
});
let p1 = p.then(null,null);
p1.then((data)=>{
    console.log(data);
});