// import Vue from './instance/index.js';
import { h } from './vdom/vnode.js';
import render from './vdom/render.js';



let container = document.getElementById('container');

let oldVNode = h('div', 
    {
        style: {
            border:'1px solid grey',
            color: 'black',
            padding:'10px'
        },
        onclick:function(){
            alert('old')
        }
    },
    '我是一个DIV'
)

let newVNode = h('div', 
    {
        style: {
            border:'1px solid grey',
            color: 'red',
            padding:'10px'
        },
        onclick:function(){
            alert('new')
        }
    },
    '我是一个DIV-new'
)



// 渲染
render(oldVNode, container)

setTimeout(()=>{
    render(newVNode, container)
},2000);



