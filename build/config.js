
module.exports = {
    wait:[
        'event loop',
        '防抖和节流',
        'css 剪切',
        'http 缓存',
    ],
    pay:{
        title:'',
        images:[
            'https://raw.githubusercontent.com/chenqf/blog/master/images/wc.png',
            'https://raw.githubusercontent.com/chenqf/blog/master/images/zhi.png'
        ]
    },
    baseUrl:'https://github.com/chenqf/blog/blob/master',
    path:'articles',
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
    ]
};