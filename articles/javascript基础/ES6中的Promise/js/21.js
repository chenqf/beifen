// @flow Created by 陈其丰 on 2019/4/12.
const promise = new Promise((resolve, reject) => {
    resolve('success1')
    reject('error')
    resolve('success2')
})

promise
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})