import {
    mount
} from "./mount.js";

import {
    patch
} from './patch.js'

import {
    removeChild,
    insertBefore,
    getNextSibling
} from './opt.js'

export const errorDiff = function(prevChildren,nextChildren,container){
    // 遍历旧的子节点，将其全部移除
    for (let i = 0; i < prevChildren.length; i++) {
        removeChild(container,prevChildren[i].el)
    }
    // 遍历新的子节点，将其全部添加
    for (let i = 0; i < nextChildren.length; i++) {
        mount(nextChildren[i], container)
    }
}

export const noKeyDiff = function(prevChildren,nextChildren,container){
    let prevLen = prevChildren.length;
    let nextLen = nextChildren.length;
    let commonLen = Math.min(prevLen,nextLen);
    for(let i = 0;i<commonLen;i++){
        patch(prevChildren[i],nextChildren[i],container)
    }
    if(nextLen > prevLen){
        for(let i = commonLen; i<nextLen; i++){
            mount(nextChildren[i],container);
        }
    }else if(prevLen > nextLen){
        for(let i = commonLen; i<prevLen; i++){
            removeChild(container,prevChildren[i].el)
        }
    }
}


export const reactDiff = function(prevChildren,nextChildren,container){
    let lastIndex = 0;
    for(let i = 0; i<nextChildren.length; i++){
        let nextVNode = nextChildren[i];
        let j = 0;
        let find = false;
        for(;j<prevChildren.length; j++){
            let prevVNode = prevChildren[j];
            if(nextVNode.key === prevVNode.key){
                find = true;
                patch(prevVNode,nextVNode,container);
                //需要移动
                if(j<lastIndex){
                    let refElement = getNextSibling(nextChildren[i - 1].el);
                    insertBefore(container,prevVNode.el,refElement)
                }else{
                    lastIndex = j;   
                }
                break;
            }
        }
        if(!find){
            let refNode = i === 0 ? prevChildren[0].el : getNextSibling(nextChildren[i - 1].el);
            mount(nextVNode,container,false,refNode)
        }
    }
    //移除不存在的节点
    for(let i = 0; i<prevChildren.length; i++){
        let prevVNode = prevChildren[i];
        let has = nextChildren.find(nextVNode => nextVNode.key === prevVNode.key);
        if(!has){
            removeChild(container,prevVNode.el)
        }
    }
}

export const vue2Diff = function(prevChildren,nextChildren,container){
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = prevChildren.length - 1;
    let newEndIdx = nextChildren.length - 1;

    let oldStartVNode = prevChildren[oldStartIdx];
    let newStartVNode = nextChildren[newStartIdx];
    let oldEndVNode = prevChildren[oldEndIdx];
    let newEndVNode = nextChildren[newEndIdx];

    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
        if(!oldStartVNode){
            oldStartIdx = oldStartIdx + 1;
            oldStartVNode = prevChildren[oldStartIdx];
        }
        else if(!oldEndVNode){
            oldEndIdx = oldEndIdx - 1;
            oldEndVNode = prevChildren[oldEndIdx];
        }
        //旧前-新前
        if(oldStartVNode.key === newStartVNode.key){
            patch(oldStartVNode, newStartVNode, container)
            oldStartIdx = oldStartIdx + 1;
            newStartIdx = newStartIdx + 1;
            oldStartVNode = prevChildren[oldStartIdx]
            newStartVNode = nextChildren[newStartIdx]
        }
        //旧后-新后-无需移动
        else if(oldEndVNode.key === newEndVNode.key){
            patch(oldEndVNode, newEndVNode, container)
            oldEndIdx = oldEndIdx - 1;
            newEndIdx = newEndIdx - 1;
            oldEndVNode = prevChildren[oldEndIdx];
            oldNewVNode = nextChildren[oldNewIdx];
        }
        //旧前-新后
        else if(oldStartVNode.key === newEndVNode.key){
            patch(oldStartVNode, newEndVNode, container);
            insertBefore(container,oldStartVNode.el,getNextSibling(oldEndVNode.el))
            oldStartIdx = oldStartIdx + 1; 
            newEndIdx = newEndIdx - 1; 
            oldStartVNode = prevChildren[oldStartIdx];
            newEndVNode = nextChildren[newEndIdx];
        }
        //旧后-新前-需要移动
        else if(oldEndVNode.key === newStartVNode.key){
            patch(oldEndVNode, newStartVNode, container)
            //移动
            insertBefore(container,oldEndVNode.el,oldStartVNode.el);
            //更新索引
            oldEndIdx = oldEndIdx - 1;
            newStartIdx = newStartIdx + 1;
            newStartVNode = prevChildren[newStartIdx];
            oldEndVNode = nextChildren[oldEndIdx];
        }
        //双端比较均没有找到
        else{
            //新前节点在 oldChildren 中的位置
            const idxInOld = prevChildren.findIndex(node=>node.key === newStartVNode.key);
            //找到
            if(idxInOld >= 0){
                //需要移动的旧节点
                const vNodeToMove = prevChildren[idxInOld];
                //先更新
                patch(vNodeToMove,newStartVNode,container);
                //移动DOM
                insertBefore(container,vNodeToMove.el,oldStartVNode.el)
                //已移动的 VNode 设置为 undefined
                prevChildren[idxInOld] = undefined;
            }
            //没有找到,代表是新节点
            else{
                mount(newStartVNode,container,false,oldStartVNode.el)
            }
            newStartIdx = newStartIdx + 1;
            newStartVNode = nextChildren[newStartIdx]
        }
    }

    //新增
    if(oldEndIdx < oldStartIdx){
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            mount(nextChildren[i], container, false, oldStartVNode.el)
        }
    }
    //移除
    else if (newEndIdx < newStartIdx) {
        // 移除操作
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            container.removeChild(prevChildren[i].el)
        }
    }
}


//未完成
export const vue3Diff = function(prevChildren,nextChildren,container){
    outer:{
        //更新相同前缀
        let j = 0;
        let prevVNode = prevChildren[j];
        let nextVNode = nextChildren[j];
        while(prevVNode.key === nextVNode.key){
            patch(prevVNode,nextVNode,container);
            j++;
            if(j > prevEndIdx || j > nextEndIdx){
                break outer;
            }
            prevVNode = prevChildren[j];
            nextVNode = nextChildren[j];
        }

        //更新相同后缀
        let prevEndIdx = prevChildren.length - 1;
        let nextEndIdx = nextChildren.length - 1;

        prevVNode = prevChildren[prevEndIdx];
        nextVNode = nextChildren[nextEndIdx];

        while(prevVNode.key === nextVNode.key){
            patch(prevVNode,nextVNode,container);
            prevEndIdx--;
            nextEndIdx--;
            if(j > prevEndIdx || j > nextEndIdx){
                break outer;
            }
            prevVNode = prevChildren[prevEndIdx];
            nextVNode = nextChildren[nextEndIdx];
        }
    }
    

    //仅新增
    if(j > prevEndIdx){
        let nextPos = nextEndIdx + 1;
        let refNode = nextPos < nextChildren.length ? nextChildren[nextPos].el : null;
        while(j <= nextEndIdx){
            mount(nextChildren[j++],container,false,refNode)
        }
    }
    //仅删除
    else if(j > nextEndIdx){
        while(j <= prevEndIdx){
            removeChild(container,prevChildren[j++].el);
        }
    }
    //其他情况
    else{
        // 构造 sources 数组 用于存储 newVNode 在 oldVNode 中的位置
        const nextLeft = nextEndIdx - j + 1  // 新 children 中剩余未处理节点的数量
        let sources = Array.from({length:nextLeft}).map(()=>-1);

        let moved = false;
        let pos = 0;
        let patched = 0
        //构建索引表 新节点的key对应的索引位置
        let keyIndex = {};
        for(let i = j; i <= nextEndIdx; i++){
            keyIndex[nextChildren[i].key] = i;
        }
        //先遍历旧节点
        for(let i = j; i <= prevEndIdx; i++){
            const prevVNode = prevChildren[i];

            if(patched < nextLeft){
                // 通过索引表快速找到新 children 中具有相同 key 的节点的位置
                const k = keyIndex[prevVNode.key];
                //找到
                if(typeof k !== 'undefined'){
                    const nextVNode = nextChildren[k]
                    patch(prevVNode,nextVNode,container);
                    patched++
                    sources[k - j] = i;
                    if(k < pos){
                        moved = true;
                    }else{
                        pos = k;
                    }
                }
                //没找到,删除旧节点
                else{
                    removeChild(container,prevVNode.el)
                }
            }else{
                removeChild(container,prevVNode.el)
            }
        }

        //需要移动
        if(moved){
            // 计算最长递增子序列
            const seq = lis(sources) // [ 0, 1 ]
        }
    }   
}


function lis(sources){

}