# 如何中断forEach循环

## 前言

在for循环中，我可以使用break打破当前的循环体，那么对于forEach循环，如何来打破它的循环呢？

### 首先尝试一下 break
```javascript 1.8
[0,1,2,3,4,5].forEach((item,index)=>{
    console.log(item);
    if(index === 2){
        break;
    }
});
// print error : Uncaught SyntaxError: Illegal break statement
```

### 再尝试一下 return
```javascript 1.8
[0,1,2,3,4,5].forEach((item,index)=>{
    console.log(item);
    if(index === 2){
        return ;
    }
});
// print： 0 1 2 3 4 5
```
我们发现对forEach使用break时直接会报错，而使用return时会跳过当次循环，不会对接下来的循环造成影响。

### 看一下MDN的官方解释

> 注意： 没有办法中止或者跳出 forEach() 循环，除了抛出一个异常。如果你需要这样，使用 forEach() 方法是错误的。      
> 若你需要提前终止循环，你可以使用：
> + 简单循环    
> + [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环    
> + [Array.prototype.every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 
> + [Array.prototype.some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)   
> + [Array.prototype.find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)   
> + [Array.prototype.findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)               
> 
> 这些数组方法可以对数组元素判断，以便确定是否需要继续遍历：[every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)，[some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)，[find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)，[findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### 试一试通过抛出异常来跳出循环，虽然这种方式不推荐
```javascript 1.8
try{
    [0,1,2,3,4,5].forEach((item,index)=>{
        console.log(item);
        if(index === 2){
            throw new Error('error');
        }
    });
}catch(e){
    
}
// print: 0 1 2
```

### 使用every来模拟forEach
> every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。
```javascript 1.8
[0,1,2,3,4,5].every((item,index)=>{
    console.log(item);
    return index !== 2;
})
// print: 0 1 2
```

### 使用some来模拟forEach
> some() 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。
```javascript 1.8
[0,1,2,3,4,5].some((item,index)=>{
    console.log(item);
    return index === 2;
})
// print: 0 1 2
```

### 使用find来模拟forEach
> find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。
```javascript 1.8
[0,1,2,3,4,5].find((item,index)=>{
    console.log(item);
    return index === 2;
})
// print: 0 1 2
```

### 使用findIndex来模拟forEach
> findIndex方法对数组中的每个数组索引0..length-1（包括）执行一次callback函数，直到找到一个callback函数返回真实值（强制为true）的值。
```javascript 1.8
[0,1,2,3,4,5].findIndex((item,index)=>{
    console.log(item);
    return index === 2;
})
// print: 0 1 2
```

### 其他方法

上面介绍的方法，要么是官方不推荐的抛出异常的方式，要么是使用其他方法来模拟forEach循环，我们不禁会想，难道真的没有别的办法了么？

答案是当然有！

我们来看一下MDN官方对forEach的描述
> **forEach 遍历的范围在第一次调用 callback 前就会确定。**       
> **调用 forEach 后添加到数组中的项不会被 callback 访问到。**     
> 如果已经存在的值被改变，则传递给 callback 的值是 forEach 遍历到他们那一刻的值。     
> **已删除的项不会被遍历到**。  
> 如果已访问的元素在迭代时被删除了（例如使用 shift()），之后的元素将被跳过  

注意上文中“已删除的项不会被遍历到”，那么我们可以通过删除数组内容的方式来让forEach循环结束。
```javascript 1.8
let arr = [0,1,2,3,4,5];
arr.forEach((item,index)=>{
    console.log(item);
    if(index === 2){
        arr.splice(0)
    }
});
console.log(arr);
// print：0 1 2
// print: []
```
以上代码实现了跳出forEach循环，但此时数组内容已经发生了变化，其中的内容已经被删除了。

我们再看MDN的官方描述，我们发现forEach的遍历范围在开始时就会确定，但删除元素后，删除的项就不会被遍历到，并且之后添加到数组中的元素也不会被遍历到。

所以我们可以使用先删除后添加的方式，打破forEach循环，并且原数组不发生变化。
```javascript 1.8
let arr = [0,1,2,3,4,5];
arr.forEach((item,index)=>{
    console.log(item);
    if(index === 2){
        arr = arr.concat(arr.splice(0))
    }
});
console.log(arr);
// print：0 1 2
// print: []
```
注意：这种方式虽然可以实现打破forEach循环，并且不改变原数组中的内容，但实际上原数组的指针引用已发生了变化
 
所以：如果实际工作中，真的遇到需要打破forEach循环的需求，最好还是按照MDN的官方推荐，使用其他函数来模拟。


