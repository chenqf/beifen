// import Vue from './instance/index.js';
import { h } from './vdom/vnode.js';
import render from './vdom/render.js';



let container = document.getElementById('container');

let oldVNode = h('div', 
    {
        style: {
            background: '#0084ff1a',
            padding:'10px'
        },
        id:'bingshan',
        class:['c1 c2']
    }, 
    [
        h('span',null,'我是span1'),
        h('br'),
        h('span',null,'我是span2')
    ]
)

let newVNode = h('div', 
    {
        style: {
            background: '#0084ff1a',
            padding:'10px'
        },
        id:'bingshan',
        class:['c1 c2']
    }, 
    [
        h('span',null,'我是span1-new'),
        h('br'),
        h('span',null,'我是span2-new')
    ]
)



// 渲染
render(oldVNode, container)

setTimeout(()=>{
    render(newVNode, container)
},2000);



