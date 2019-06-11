// @flow Created by 陈其丰 on 2019/4/16.



let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = [],deep = Infinity) {
    //已降维的层数
    let n = 0;
    while (arr.some(item=>Array.isArray(item)) && n < deep){
        arr = [].concat(...arr);
        n++
    }
    return arr;
}
console.log(flatten(arr,2)); // print: ['A','B','C','D','E',['F','G']]