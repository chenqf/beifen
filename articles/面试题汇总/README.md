
# 题目汇总

```javascript
function foo(n) {
  var f = () => arguments[0] + n;
  return f();
}

let res = foo(2);

console.log(res);// 问 输出结果
```

<details>
  <summary><b>答案及解析</b></summary>
<p>
答案: 4

箭头函数没有自己的 arguments ，所以题中的 arguments 指代的是 foo 函数的 arguments 对象。所以 arguments[0] 等于 2 ，n 等于 2，结果为 4。

</p>
</details>

***

```javascript
function A() {
  this.foo = 1
}

A.prototype.bar = () => console.log(this.foo)

let a = new A()
a.bar() // 问 输出结果
```

<details><summary><b>答案及解析</b></summary>

<p>

答案: undefined

箭头函数没有自己的 this，所以箭头函数的 this 等价于外层非箭头函数作用域的this。
由于箭头函数的外层没有普通函数，所以箭头函数中的 this 等价于全局对象，所以输出为 undefined。

</p>
</details>

***

```javascript
let res = (function pt() {
  return (() => this.x).bind({ x: 'inner' })();
}).call({ x: 'outer' });

console.log(res)  // 问 输出结果
```

<details><summary><b>答案及解析</b></summary>
<p>

答案：'outer'

此题稍微复杂一点，求 res 的输出结果。

分析如下：

1. 求函数 pt 通过 call 调用后的返回值。
2. pt 函数内的 this 被 call 转换为 {x:'outer'}。
3. pt 函数内，箭头函数通过 bind 生成了新函数，并执行，执行结果为 pt 函数的返回值。
4. 箭头函数中的 this 无法通过 bind 方法绑定，箭头函数执行时的 this 就是外层作用域的 this。
5. 箭头函数执行时，外层作用域的 this 是由 call 方法指定的 {x:'outer'}。
6. 最终结果 res 为 'outer'。

</p>
</details>

***

```javascript
window.name = 'window_name';

let obj1 = {
    name:'obj1_name',
    print:()=>console.log(this.name)
}

let obj2 = {name:'obj2_name'}

// 问 输出结果
obj1.print()
obj1.print.call(obj2)
```

<details><summary><b>答案及解析</b></summary>
<p>

答案：'window_name'  'window_name'

箭头函数没有自己的 this ，也无法通过 call、apply、bind 改变箭头函数中的 this。
箭头函数的 this 取决于外层是否有普通函数，有普通函数 this 指向普通函数中的this，外层没有普通函数，箭头函数中的 this 就是全局对象。

此题中，箭头函数外层没有普通函数，所以 this 指向全局对象，所以结果为 'window_name'、'window_name'。
</p>
</details>

***

```javascript
let obj1 = {
    name:'obj1_name',
    print:function(){
        return ()=>console.log(this.name)
    }
}

let obj2 = {name:'obj2_name'}

// 问 输出结果
obj1.print()()
obj1.print().call(obj2)
obj1.print.call(obj2)()
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: 'obj1_name' 'obj1_name' 'obj2_name'

箭头函数的 this 与其外层的普通函数的 this 一致，与 call、apply、bind 无关。

此题，obj1.print 返回一个箭头函数，此箭头函数中的 this 就是 obj1.print 调用时的 this。

1. obj1.print()()：此时obj1.print 中的 this 为 obj1，所以输出为 obj1_name
2. obj1.print().call(obj2)：此时obj1.print 中的 this 为 obj1，所以输出为 obj1_name
3. obj1.print.call(obj2)()：此时obj1.print 中的 this 为 obj2，所以输出为 obj2_name

</p>
</details>

***

```javascript
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)

//问 输出顺序
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: 1 2 4 3

new Promise(fn) 时 fn 在Promise构造函数中同步执行，所以先输出 1 和 2。
then 方法注册的回调函数在下一次 Event Loop 中执行。

</p>
</details>

***

```javascript
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

//问 输出结果
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: success1

promise对象只有三种状态：pending (等待态)、fulfilled (完成态)、rejected (拒绝态)。pending 可以迁移至 fulfilled 或 rejected，但状态为 fulfilled 或 rejected 时，不可再进行转化，并且终值确定。题目中调用 resolve('success1') 时，状态已经确定为 fulfilled，并且终值为 success1。


</p>
</details>

***

```javascript
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

//问 输出结果及顺序
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: 1 2

Promise.resolve(1) 方法返回一个状态为 fulfilled 终值为 1 的promise对象。
promise 对象的 then 方法返回一个新的 promise 对象，新 promise 对象的状态取决于 then 方法中回调函数执行时是否出现异常，未出现异常时状态为 fulfilled 终值为函数的返回值。
</p>
</details>

***

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

// 问 输出结果
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: 1

promise 对象的then方法只能接收函数类型的参数，若不为函数，则会出现穿透现象，题中前两个 then 方法的入参都不是函数，所以穿透至第三个 then 方法。
</p>
</details>

***

```javascript
let a,b,result;
result = ((a = 1) || (b = 2))

console.log(a,b,result); // 问 输出结果
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: 1 undefined 1

`||`运算符先计算左侧的表达式，如果结算结果为真，那么返回这个真值，如果结果为假，才计算右侧的表达式。`=`为赋值运算符，返回赋给左操作数的值。本题中`||`运算符的左表达式为`a = 1`，返回结果为 1，数字 1 转换为 boolean 值为 true, `||`运算符不会再计算右侧的表达式`b = 2`。
</p>
</details>

***

```javascript
let foo = 1;
(function foo(){
    foo = 2;
    console.log(foo); // 问 输出结果
})()

(function foo(){
    'use strict';
    foo = 2;
    console.log(foo); // 问 输出结果
})()
```

<details><summary><b>答案及解析</b></summary>
<p>
答案: foo(){...} TypeError

题中立即执行函数拥有一个函数名 foo，用于指代其本身,非严格模式可对其进行赋值操作，但不会修改其指向的内容，严格模式下不允许对其修改。
</p>
</details>

***

















*** 

```javascript
new Promise((resolve,reject)=>{
    console.log(3);
    let p = new Promise((resolve, reject)=>{
        console.log(7);
        setTimeout(()=>{
           console.log(5);
           resolve(6); 
        },0)
        resolve(1);
    });
    resolve(2);
    p.then((arg)=>{
        console.log(arg);
    });

}).then((arg)=>{
    console.log(arg);
});
console.log(4);
```

结果：3 7 4 1 2 5