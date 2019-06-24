
# 题目汇总

#### 题目1

```javascript
function foo(n) {
  var f = () => arguments[0] + n;
  return f();
}

let res = foo(2);

console.log(res); // 问 输出结果
```

<details>
  <summary><b>答案及解析</b></summary>
<p>
答案: 4

箭头函数没有自己的 arguments ，所以题中的 arguments 指代的是 foo 函数的 arguments 对象。所以 arguments[0] 等于 2 ，n 等于 2，结果为 4。

</p>
</details>

***

#### 题目2

```javascript
function A() {
  this.foo = 1
}

A.prototype.bar = () => console.log(this.foo)

let a = new A()
a.bar() // 问 输出结果
```

<details><summary><b>答案</b></summary>

<p>

答案: undefined

箭头函数没有自己的 this，所以箭头函数的 this 等价于外层非箭头函数作用域的this。
由于箭头函数的外层没有普通函数，所以箭头函数中的 this 等价于全局对象，所以输出为 undefined。

</p>
</details>

***

#### 题目3

```javascript
let res = (function pt() {
  return (() => this.x).bind({ x: 'inner' })();
}).call({ x: 'outer' });

console.log(res)  // 问 输出结果
```

<details><summary><b>答案</b></summary>
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

#### 题目4

```javascript
window.name = 'window_name';

let obj1 = {
    name:'obj1_name',
    print:()=>console.log(this.name)
}

let obj2 = {name:'obj2_name'}

obj1.print()  // 问 输出结果
obj1.print.call(obj2)  // 问 输出结果
```

<details><summary><b>答案</b></summary>
<p>

答案：'window_name'  'window_name'

箭头函数没有自己的 this ，也无法通过 call、apply、bind 改变箭头函数中的 this。
箭头函数的 this 取决于外层是否有普通函数，有普通函数 this 指向普通函数中的this，外层没有普通函数，箭头函数中的 this 就是全局对象。

此题中，箭头函数外层没有普通函数，所以 this 指向全局对象，所以结果为 'window_name'、'window_name'。
</p>
</details>

***

#### 题目5

```javascript
let obj1 = {
    name:'obj1_name',
    print:function(){
        return ()=>console.log(this.name)
    }
}

let obj2 = {name:'obj2_name'}


obj1.print()() // 问 输出结果
obj1.print().call(obj2) // 问 输出结果
obj1.print.call(obj2)() // 问 输出结果
```

<details><summary><b>答案</b></summary>
<p>
答案: 'obj1_name' 'obj1_name' 'obj2_name'

箭头函数的 this 与其外层的普通函数的 this 一致，与 call、apply、bind 无关。

此题，obj1.print 返回一个箭头函数，此箭头函数中的 this 就是 obj1.print 调用时的 this。

1. obj1.print()()：此时obj1.print 中的 this 为 obj1，所以输出为 obj1_name
2. obj1.print().call(obj2)：此时obj1.print 中的 this 为 obj1，所以输出为 obj1_name
3. obj1.print.call(obj2)()：此时obj1.print 中的 this 为 obj2，所以输出为 obj2_name

</p>
</details>




TODO 








### 题目一

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
```

结果：1 2 4 3

### 题目二

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
```

结果：success1

### 题目三

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
```

结果：1 2

### 题目四

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

结果：1

### 题目五

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