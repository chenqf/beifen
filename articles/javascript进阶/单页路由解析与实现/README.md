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

## hash 模式

## history 模式


+ [博客首页](https://github.com/chenqf/blog)
+ [javascript 基础](https://github.com/chenqf/blog/blob/master/articles/javascript基础)
+ [javascript 进阶](https://github.com/chenqf/blog/blob/master/articles/javascript进阶)
+ [浏览器](https://github.com/chenqf/blog/blob/master/articles/浏览器)
+ [前端性能](https://github.com/chenqf/blog/blob/master/articles/前端性能)
+ [网络](https://github.com/chenqf/blog/blob/master/articles/网络)
+ [技术随笔](https://github.com/chenqf/blog/blob/master/articles/技术随笔)
