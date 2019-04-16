// @flow Created by 陈其丰 on 2019/4/16.

let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    let result = [];
    for(let i = 0,len = arr.length; i < len ; i++){
        let item = arr[i];
        if(Array.isArray(item)){
            result = result.concat(flatten(item));
        }else{
            result.push(item);
        }
    }
    return result;
}
console.log(flatten(arr));