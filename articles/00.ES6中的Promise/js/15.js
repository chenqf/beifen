// @flow Created by 陈其丰 on 2019/4/12.
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = 3;

Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data); // print: [1,2,3]
})