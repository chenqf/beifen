// import Vue from './instance/index.js';
import { h } from './vdom/vnode.js';
import render from './vdom/render.js';



let container = document.getElementById('container');

let VNode = h('div', 
    {
        style: {
            color: '#0084ff',
            background: '#0084ff1a',
            fontSize: '16px',
            padding:'10px'
        },
        id:'bingshan',
        class:['c1 c2'],
        onclick:function(){
            alert('VNode')
        }
    }, 
    [
        h('span',null,'我是span1'),
        h('br'),
        h('span',null,'我是span2')
    ]
)



// 渲染
render(VNode, container)



