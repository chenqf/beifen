// @flow Created by 陈其丰 on 2019/4/12.
Promise.resolve(1)
.then((data) => {
    console.log(data)
    return 2
})
.catch((err) => {
    return 3
})
.then((data) => {
    console.log(data)
})