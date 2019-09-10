import {
    mount
} from "./mount.js";

import {
    removeChild,
    patchData,
    queryTarget,
    appendChild,
    insertBefore,
    getNextSibling
} from './opt.js'




export const patch = function (prevVNode, nextVNode, container) {
    // 类型不同,直接替换
    if ((prevVNode.tag || nextVNode.tag) && prevVNode.tag !== nextVNode.tag) {
        removeChild(container, prevVNode.el);
        mount(nextVNode, container);
    }
    // 都是文本
    else if(!prevVNode.tag && !nextVNode.tag){
        const el = (nextVNode.el = prevVNode.el)
        if(nextVNode.children !== prevVNode.children){
            el.nodeValue = nextVNode.children;
        }
    }
    // 都是相同类型的元素
    else {
        patchElement(prevVNode, nextVNode, container)
    }
}



export const patchElement = function (prevVNode, nextVNode, container) {

    const el = (nextVNode.el = prevVNode.el);

    const prevData = prevVNode.data;
    const nextData = nextVNode.data;

    if (nextData) {
        for (let key in nextData) {
            let prevValue = prevData[key];
            let nextValue = nextData[key];
            patchData(el, key, prevValue, nextValue);
        }
    }
    if (prevData) {
        for (let key in prevData) {
            let prevValue = prevData[key];
            if (prevValue && !nextData.hasOwnProperty(key)) {
                patchData(el, key, prevValue, null);
            }
        }
    }
    
    //比较子节点
    patchChildren(
        prevVNode.children,
        nextVNode.children,
        el
    )
}


function patchChildren(prevChildren, nextChildren, container) {
    //旧:单个子节点
    if(prevChildren && !Array.isArray(prevChildren)){
        //新：单个子节点
        if(nextChildren && !Array.isArray(nextChildren)){
            patch(prevChildren,nextChildren,container)
        }
        //新：没有子节点
        else if(!nextChildren){
            removeChild(container,prevChildren.el)
        }
        //新：多个子节点
        else{
            removeChild(container,prevChildren.el)
            for(let i = 0; i<nextChildren.length; i++){
                mount(nextChildren[i], container)
            }
        }
    }
    //旧:没有子节点
    else if(!prevChildren){
        //新：单个子节点
        if(nextChildren && !Array.isArray(nextChildren)){
            mount(nextChildren, container) 
        }
        //新：没有子节点
        else if(!nextChildren){
            //什么都不做
        }
        //新：多个子节点
        else{
            for (let i = 0; i < nextChildren.length; i++) {
                mount(nextChildren[i], container)
            }
        }
    }
    //旧:多个子节点
    else {
        //新：单个子节点
        if(nextChildren && !Array.isArray(nextChildren)){
            for(let i = 0; i<prevChildren.length; i++){
                removeChild(container,prevChildren[i].el)
            }
            mount(nextChildren,container)   
        }
        //新：没有子节点
        else if(!nextChildren){
            for(let i = 0; i<prevChildren.length; i++){
                removeChild(container,prevChildren[i].el)
            }
        }
        //新：多个子节点
        else{
            // 遍历旧的子节点，将其全部移除
            for (let i = 0; i < prevChildren.length; i++) {
                removeChild(container,prevChildren[i].el)
            }
            // 遍历新的子节点，将其全部添加
            for (let i = 0; i < nextChildren.length; i++) {
                mount(nextChildren[i], container)
            }
        }
    }

}



