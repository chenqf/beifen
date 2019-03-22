
module.exports = {
    wait:[
        'event loop',
        '防抖和节流',
        'css 剪切',
        'http 缓存',
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
                }
            ]
        }
    ],
    pay:{
        title:'如果您觉得此文有帮助，可以打赏一个红包，以资鼓励~',
        images:[
            'https://raw.githubusercontent.com/chenqf/blog/master/images/wc.png',
            'https://raw.githubusercontent.com/chenqf/blog/master/images/zhi.png'
        ]
    },
};