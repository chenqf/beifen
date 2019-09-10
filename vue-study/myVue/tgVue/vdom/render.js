
import {mount} from './mount.js'
import {patch} from './patch.js'
import {removeChild} from './opt.js'

//渲染器
//如果旧的 VNode 不存在且新的 VNode 存在，那就直接挂载(mount)新的 VNode
//如果旧的 VNode 存在且新的 VNode 不存在，那就直接将 DOM 移除；
//如果新旧 VNode 都存在，那就打补丁(patch)
export default function(vNode,container){
    const prevVNode = container.vNode;
    //之前没有
    if(prevVNode === null || prevVNode === undefined){
        if(vNode){
            mount(vNode,container);
            container.vNode = vNode;
        }
    }
    //之前有
    else{
        //比较对比
        if(vNode){
            patch(prevVNode,vNode,container);
            container.vNode = vNode;
        }
        //以前有,现在没有,删除
        else{
            removeChild(container,prevVNode.el);
            container.vNode = null;
        }
    }
}