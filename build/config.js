
module.exports = {
    wait:[
        '深度好文，https://juejin.im/post/5cb0315f518825215e61ec14?utm_source=gold_browser_extension',
        'await 在forEach 中 https://juejin.im/post/5cb1d5a3f265da03587bed99?utm_source=gold_browser_extension',
        'typeof instanceOf isPrototypeOf() 之间的区别  https://juejin.im/post/5c9216716fb9a070ef60a011?utm_source=gold_browser_extension',
        '请指出document.onload和document.ready两个事件的区别',
        '手写代码： https://juejin.im/post/5c9c3989e51d454e3a3902b6?utm_source=gold_browser_extension#heading-19',
        'event loop',
        '变量提升，函数声明变函数表达式',
        '重排与重绘 https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588825&idx=1&sn=9ce03764375441ef0a8eb4fbce702e7a&chksm=8891d6bdbfe65fab0e76b1f86ec807ab0d13dec92951604c59fd1fe23ab0619257bf1dfa32bf&scene=0&xtrack=1#rd',
        '防抖和节流',
        'css 剪切',
        'webpack 抽象语法树，https://github.com/airuikun/blog/issues/4',
        'async 实现原理 阮一峰 、https://github.com/airuikun/Weekly-FE-Interview/issues/14',
        'https 对称加密，非对称加密 https://github.com/airuikun/Weekly-FE-Interview/issues/3',
        '前后端分离项目，如何seo https://github.com/airuikun/Weekly-FE-Interview/issues/13',
        '1000-div问题 https://github.com/airuikun/Weekly-FE-Interview/issues/15',
        '开放题：2万小球问题 https://github.com/airuikun/Weekly-FE-Interview/issues/16',
        'http 缓存',
        'bind 的模拟实现',
        'http 与 https 对称加密，非对称加密',
        '手写代码实现 call apply bind https://juejin.im/post/5ca9de22e51d452b5372ed90?utm_source=gold_browser_extension',
        'promise 原生实现 https://github.com/YvetteLau/Blog/issues/2',
        '真机调试：https://juejin.im/post/5c947f5251882568396a6773?utm_source=gold_browser_extension',
    ],
    logTitle:'个人博客',
    baseUrl:'https://github.com/chenqf/blog/blob/master/articles',
    publish:[
        {
            name:'javascript 基础',//分类的标题
            path:'javascript基础',//分类的路径
            children:[
                {
                    name:'如何中断forEach循环',
                    issues:''
                },
                {
                    name:'ES6中的Promise',
                    issues:''
                }
            ]
        },
        {
            name:'javascript 进阶',//分类的标题
            path:'javascript进阶',//分类的路径
            children:[
                {
                    name:'防抖函数',
                    issues:''
                },
                {
                    name:'节流函数',
                    issues:''
                },
                {
                    name:'模拟实现call和apply',
                    issues:''
                },
                {
                    name:'模拟实现bind',
                    issues:''
                },
                {
                    name:'数组扁平化',
                    issues:''
                }
            ]
        },
        {
            name:'前端性能',//分类的标题
            path:'前端性能',//分类的路径
            children:[
                {
                    name:'如何渲染几万条数据并不卡住界面',
                    issues:''
                }
            ]
        },
    ],
    pay:{
        title:'如果您觉得此文有帮助，可以打赏一个红包，以资鼓励~'
    },
};