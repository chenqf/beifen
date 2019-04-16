// @flow Created by 陈其丰 on 2019/4/16.

let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    return arr.reduce((init,cur)=>{
        return init.concat( Array.isArray(cur) ? flatten(cur) : cur)
    },[])
}
console.log(flatten(arr));