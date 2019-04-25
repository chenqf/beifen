// @flow Created by 陈其丰 on 2019/4/16.


function flatten(arr = []) {
    return arr.toString().split(',');
}
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
let newArr = flatten(arr);