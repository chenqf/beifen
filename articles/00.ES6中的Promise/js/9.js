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
let p1 = new Promise((resolve,reject)=>{
    resolve()
})
let p2 = p1.then(()=>{
    return thenable1;
})
let p3 = p1.then(()=>{
    return thenable2;
})