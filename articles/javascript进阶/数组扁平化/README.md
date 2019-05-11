# 数组扁平化

## 前言

数组扁平化，就是将一个嵌套的多维数组降维成低维数组。

举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，可将多维数组转化为一维数组，效果如下：
```javascript
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
let newArr = flatten(arr);
console.log(newArr); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```
现在效果知道了，我们开始尝试去写这个 flatten 函数

## 使用 toString 和 split 方法

我们首先考虑 toString 和 split 方法，试想一下，如果数组中的元素都是字符串，我们可以这样实现：
```javascript
function flatten(arr = []) {
  return arr.toString().split(',');
}
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
let newArr = flatten(arr); // print:　[ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```
然而这种方法的使用场景非常有限     
+ 数组中的元素必须都是字符串类型，若有别的类型，会被转换为字符串类型，导致与期望不符
+ 需求必须是从多维数组转换为一维数组，如果是多维数组降维为多维数组的需求，则无法实现

## 使用递归实现扁平化
因为数组的维度是不确定的，所以我们接着思考，使用循环并递归的方式来实现
```javascript
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
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```


我们的目标是对数组进行处理，并最终返回一个值，那么我们就可以考虑使用 reduce 来实现：
```javascript
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    return arr.reduce((init,cur)=>{
        return init.concat( Array.isArray(cur) ? flatten(cur) : cur)
    },[])
}
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```

我们还可以使用扩展运算符(spread)来实现：
```javascript
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    return [].concat(...arr.map(item=>Array.isArray(item) ? flatten(item) : item))
}
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```

以上三种方法，本质上都是使用递归来实现的，我们可以很清晰的弄懂这三段代码是如何实现数组扁平化的，但是递归会存在一定的效率问题，并且当数组的维数过多的时候，可能会出现栈溢出的问题。

那么有没有非递归的方法实现扁平化数组呢？

## 使用 while 循环
```javascript
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = []) {
    while (arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr)); // print: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```

上面的代码通过 while 循环，实现了非递归的扁平化数组，那么这就结束了么，当然没有。


## 指定降维的层数

我们之前的例子，全都是将多维数组将维为一维数组，那么我们想指定将维的层数呢？我们来看这个例子：

```javascript
let arr = ['A',['B',['C','D'],['E',['F','G']]]];
function flatten(arr = [],deep = Infinity) {
    //...
}
console.log(flatten(arr,2)); // print: ['A','B','C','D','E',['F','G']]
```

我们扩展了flatten函数的第二个参数，deep 代表降维的层数，在这个例子中，我们将四维数组降维两层，变为了二维数组。

接下来我们来实现它：
```javascript
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
```


+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
