// @flow Created by 陈其丰 on 2019/4/16.


let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    while (arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]