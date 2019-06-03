# ES7 Async/Await 陷阱


## 什么是Async/Await

ES6新增了Promise函数用于简化项目代码流程。
然而在使用promise时，我们仍然要使用callback，并且并不知道程序要干什么，例如：

```javascript
function doSomething() {
    let i = 0;
    waitOneSecond() // 返回一个Promise对象
        .then(() => console.log(i));
    i = 5;
}
```

最终console.log(i) 的结果是5，并不是0

为此，ES7引入了async函数，前面的例子可以改写这样：

```javascript
async function doSomething() {
    let i = 0;
    await waitOneSecond();// 等待1秒
    console.log(i);
    i = 5;
}
```

这段代码片段中console.log(i)的结果是0。
其中关键字await停止当前函数的执行，
直到waitOneSecond()返回的promise对象状态变更为fulfilled(完成)，
并产生其返回值。

当返回的promise对象的状态变更为rejected(失败)，
错误信息会被 try/catch 代码块所捕获。

## 常见陷阱

#### 效率损失

乱用async/await，可能导致低效的设计模式。
例如，假设我们想从数据库中获得一些用户他们的年龄平均。
我们会这样做的：
```javascript
async function getUserAge(userId) {
    await waitOneSecond();// 等待1秒
    return 7;  
}
async function getAverageAge(userIds) {
    let sumOfAges = 0;
    let numOfUsers = userIds.length;
    for (let userId of userIds) {
        sumOfAges += await getUserAge(userId);
    }
    return sumOfAges / numOfUsers;
}
```

显而易见，这是错误的，假设我们有5个用户，上面的代码片段会轮训所有的用户并且等待每一个单独调用数据库，所以最终整个函数的等待时间是5秒。

为了更好的性能，降低等待时间，修改如下：

```javascript
async function getAverageAge(userIds) {
    let sumOfAges = 0;
    let numOfUsers = userIds.length;
    let agesPromises = userIds.map(getUserAge);//将每个用户对应的promise对象封装到数组中
    let ages = await Promise.all(agesPromises);//使用Promise.all调用
    for (let age of ages) {
        sumOfAges += age;
    }
    return sumOfAges / numOfUsers;
}
```
修改之后，代码变得复杂了一些，但是所有的数据库调用，
都是同时进行的。无论你有多少用户，这个方法的等待时间只需要1秒。
 
在使用async/await函数时，当函数体内需要使用await多次调用外部函数并且函数返回值彼此无依赖关系时，
使用Promise.all降低函数整体的等待时间。

#### 变量污染

当使用async函数时，会令代码更易阅读，但是他们并不是真正的将你的代码变为同步，
只是promise的语法糖而已，看下面这个例子:

```javascript
let currentUserId = 0;
async function getInfoAboutUser() {
    currentUserId++; // 令每个用户id均唯一
    let data = await waitTenSeconds(); // 获取某些其他数据，等待时间10秒
    return { id: currentUserId , data };
}
async function registerUser() {
    let user = await getInfoAboutUser();
    await storeUser(user);
}
```

现在假设，有2个不同的用户接连注册，getInfoAboutUser 函数将被接连执行，当10秒的等待时间结束后，2个用户的id都是相同的。

在这个例子中，我们可以很简单的避免这个问题：

```javascript
async function getInfoAboutUser() {
    let data = await waitTenSeconds(); // 获取某些其他数据，等待时间10秒
    currentUserId++; //令每个用户id均唯一
    return { id: currentUserId };
}
```

## 结语
async/await函数的出现，极大的提高了javascript代码的可读性，但是他们并不是魔法，依然有很多未知的问题等待我们去发现。


+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
+ [前端性能](https://github.com/chenqf/blog/blob/master/articles/前端性能)
+ [网络](https://github.com/chenqf/blog/blob/master/articles/网络)
+ [技术随笔](https://github.com/chenqf/blog/blob/master/articles/技术随笔)
