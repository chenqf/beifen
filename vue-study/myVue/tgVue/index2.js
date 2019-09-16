// import Vue from './instance/index.js';
import { h } from './vdom/vnode.js';
import render from './vdom/render.js';



let container = document.getElementById('container');

let oldVNode = h('div', 
    null,
    [
        h('h1',null,'h1'),
        h('h2',null,'h2')
    ]
)

let newVNode =h('div', 
    null,
    [
        h('span',{style:{color:'red'}},'span1'),
        h('span',null,'span2')
    ]
)



// 渲染
render(oldVNode, container)

setTimeout(()=>{
    render(newVNode, container)
},2000);



