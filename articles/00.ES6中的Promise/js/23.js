// @flow Created by 陈其丰 on 2019/4/12.
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)