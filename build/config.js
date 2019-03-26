
module.exports = {
    wait:[
        'event loop',
        '重排与重绘 https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588825&idx=1&sn=9ce03764375441ef0a8eb4fbce702e7a&chksm=8891d6bdbfe65fab0e76b1f86ec807ab0d13dec92951604c59fd1fe23ab0619257bf1dfa32bf&scene=0&xtrack=1#rd',
        '防抖和节流',
        '数组扁平化',
        'css 剪切',
        'http 缓存',
        'bind 的模拟实现',
        'promise 介绍',
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
                }
            ]
        },
    ],
    pay:{
        title:'如果您觉得此文有帮助，可以打赏一个红包，以资鼓励~'
    },
};