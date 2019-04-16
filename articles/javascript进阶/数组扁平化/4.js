// @flow Created by 陈其丰 on 2019/4/16.


let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    return [].concat(...arr.map(item=>Array.isArray(item) ? flatten(item) : item))
}
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]