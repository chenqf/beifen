// @flow Created by 陈其丰 on 2019/4/12.

let p = new Promise((resolve)=>{
    resolve()
});
let p1 = p.then(()=>{
    console.log('异步执行，第一个onFulfilled');
});
let p2 = p.then(()=>{
    console.log('异步执行，第二个onFulfilled');
});
console.log(p1.constructor === Promise);
console.log(p === p1);
console.log(p === p2);
console.log(p1 === p2);