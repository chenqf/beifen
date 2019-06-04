# 单页路由解析与实现


## 前言

现代前端项目多为单页Web应用(SPA)，在单页Web应用中路由是其中的重要环节。

每个现代前端框架都有与之对应的路由实现，例如 vue-router、react-router 等。

本文将深入介绍前端路由的实现方式以及其原理。


## 什么是 SPA

SPA 是 single page web application 的简称，译为单页Web应用。

简单的说 SPA 就是只有一个WEB项目只有一个 HTML 页面，一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。
取而代之的是利用 JS 动态的变换 HTML 的内容，从而来模拟多页面间的跳转。


## 前端路由的由来

最开始的网页是多页面的，直到 Ajax 的出现，才慢慢有了 SPA。

SPA 的出现大大提高了 WEB 应用的交互体验。在与用户的交互过程中，不再需要重新刷新页面，获取数据也是通过 Ajax 异步获取，页面显示变的更加流畅。

但由于 SPA 中用户的交互是通过 JS 改变 HTML 内容来实现的，页面本身的 url 并没有变化，这导致了两个问题：

1. SPA 无法记住用户的操作记录，无论是刷新、前进还是后退，都无法展示用户真实的期望内容。
2. SPA 中虽然由于业务的不同会有多种页面展示形式，但只有一个 url，对 SEO 不友好，不方便搜索引擎进行收录。

前端路由就是为了解决上述问题而出现的。


## 什么是前端路由

简单的说，就是在保证只有一个 HTML 页面，且与用户交互时不刷新和跳转页面的同时，为 SPA 中的每种页面展示形式匹配一个特殊的 url。在刷新、前进、后退和SEO时均通过这个特殊的 url 来实现。

为实现这一目标，我们需要做到以下二点：

1. 改变 url 且不让浏览器像服务器发送请求。
2. 可以监听到 url 的变化

接下来要介绍的 hash 模式和 history 模式，就是实现了上面的功能

## hash 模式

这里的 hash 就是指 url 后的 # 号以及后面的字符。比如说 "http://www.baidu.com/#hashhash" ，其中 "#hashhash" 就是我们期望的 hash 值。

由于 hash 值的变化不会导致浏览器像服务器发送请求，而且 hash 的改变会触发 hashchange 事件，浏览器的前进后退也能对其进行控制，所以在 H5 的 history 模式出现之前，基本都是使用 hash 模式来实现前端路由。

**使用到的API:**

```javascript
window.location.hash = 'hash字符串'; // 用于设置 hash 值

let hash = window.location.hash; // 获取当前 hash 值

// 监听hash变化，点击浏览器的前进后退会触发
window.addEventListener('hashchange', function(event){ 
    let newURL = event.newURL; // hash 改变后的新 url
    let oldURL = event.oldURL; // hash 改变前的旧 url
})
```

**接下来我们来实现一个路由对象**


1. 创建一个路由对象, 实现 register 函数用于注册每个 hash 值对应的回调函数

```javascript
class HashRouter{
    constructor(){
        //用于存储不同hash值对应的回调函数
        this.routers = {};
    }
    //用于注册每个页面
    register(url,callback = function(){}){
        this.routers[url] = callback;
    }
}
```

2. 不存在hash值时，认为是首页，所以实现 registerIndex 函数用于注册首页时的回调函数

```javascript
class HashRouter{
    constructor(){
        //用于存储不同hash值对应的回调函数
        this.routers = {};
    }
    //用于注册每个页面
    register(url,callback = ()=>{}){
        this.routers[url] = callback;
    }
    //用于注册首页
    registerIndex(callback = ()=>{}){
        this.routers['index'] = callback;
    }
}
```

2. 通过 hashchange 监听 hash 变化，并定义 hash 变化时的回调函数

```javascript
class HashRouter{
    constructor(){
        //用于存储不同hash值对应的回调函数
        this.routers = {};
        window.addEventListener('hashchange',this.load.bind(this),false)
    }
    //用于注册每个页面
    register(url,callback = function(){}){
        this.routers[url] = callback;
    }
    //用于注册首页
    registerIndex(callback = ()=>{}){
        this.routers['index'] = callback;
    }
    //用于调用不同页面的回调函数
    load(e){
        let hash = location.hash.slice(1);,
            handler;
        //没有hash 默认为首页
        if(!hash){
            handler = this.routers.index;
        }else{
            handler = this.routers[hash];
        }
        //执行注册的回调函数
        handler();
    }
}
```

我们做一个例子来演示一下我们刚刚完成的 HashRouter












## history 模式

已经有 hash 模式了，而且 hash 能兼容到IE8， history 只能兼容到 IE10，为什么还要搞个 history 呢？
首先，hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。其次，hash 的传参是基于 url 的，如果要传递复杂的数据，会有体积的限制，而 history 模式不仅可以在url里放参数，还可以将数据存放在一个特定的对象中。




