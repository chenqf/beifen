## 前言

在工作中，有时会遇到需要一些不能使用分页方式来加载列表数据的业务情况，对于此，我们称这种列表叫做`长列表`。比如，在一些外汇交易系统中，前端会实时的展示用户的持仓情况(收益、亏损、手数等)，此时对于用户的持仓列表一般是不能分页的。

在[高性能渲染十万条数据(时间分片)](https://juejin.im/post/5d76f469f265da039a28aff7)一文中，提到了可以使用`时间分片`的方式来对长列表进行渲染，但这种方式更适用于列表项的DOM结构十分简单的情况。本文会介绍使用`虚拟列表`的方式，来同时加载大量数据。

## 为什么需要使用虚拟列表

假设我们的长列表需要展示10000条记录，我们同时将10000条记录渲染到页面中，先来看看需要花费多场时间：

```html
<button id="button">button</button><br>
<ul id="container"></ul>  
```

```javascript
document.getElementById('button').addEventListener('click',function(){
    // 记录任务开始时间
    let now = Date.now();
    // 插入一万条数据
    const total = 10000;
    // 获取容器
    let ul = document.getElementById('container');
    // 将数据插入容器中
    for (let i = 0; i < total; i++) {
        let li = document.createElement('li');
        li.innerText = ~~(Math.random() * total)
        ul.appendChild(li);
    }
    console.log('JS运行时间：',Date.now() - now);
    setTimeout(()=>{
      console.log('总运行时间：',Date.now() - now);
    },0)
  })
```




在移动端WEB中，对于列表数据的加载一般都会使用滚动加载的方式，简单的说就是监听滚动条并在满足条件的时候触发回调，通过某些方法将新元素加入到列表尾部。


## 什么是虚拟列表

## 实现

## 列表项固定高度

## 缓存计算结果

## 列表项动态高度

## 





















## 系列文章推荐

## 参考

+ [浅说虚拟列表的实现原理](https://github.com/dwqs/blog/issues/70)


## 写在最后

+ 文中如有错误，欢迎在评论区指正，如果这篇文章帮到了你，欢迎`点赞`和`关注`
+ 本文同步首发与[github](https://github.com/chenqf/frontEndBlog)，可在[github](https://github.com/chenqf/frontEndBlog)中找到更多精品文章，欢迎`Watch` & `Star ★`
+ 后续文章参见：[计划](https://github.com/chenqf/frontEndBlog/blob/master/PLAN.md)

> 欢迎关注微信公众号`【前端小黑屋】`，每周1-3篇精品优质文章推送，助你走上进阶之旅

![](https://user-gold-cdn.xitu.io/2019/9/10/16d18aa76b8ad582?w=2800&h=800&f=jpeg&s=157942)

> 同时欢迎加我好友，回复`加群`，拉你入群，和我一起学前端~

![](https://user-gold-cdn.xitu.io/2019/8/21/16cb2f7ddf918f64?w=268&h=268&f=png&s=44354)

