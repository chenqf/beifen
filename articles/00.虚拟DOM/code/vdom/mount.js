import {
    appendChild,
    createTextNode,
    createElementNS,
    createElement,
    queryTarget,
    patchData,
    getParentNode,
    insertBefore
} from "./opt.js";


export const mount = function (VNode, container) {
    // 挂载普通标签
    if (VNode.tag) {
        mountElement(VNode, container)
    }
    //挂载纯文本
    else if (!VNode.tag && typeof VNode.children === 'string') {
        mountText(VNode, container)
    }
    
}

export const mountElement = function (VNode, container) {

    let {
        tag,
        data,
        children
    } = VNode;

    const el = createElement(tag); // document.createElement(tag)

    // VNode.el = el;

    //处理DOM属性
    for (let key in data) {
        data.hasOwnProperty(key) && patchData(el,key,null,data[key]);
    }
    
    //处理子节点

    //多子节点
    if (children && Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            mount(children[i], el)
        }
    }
    //单节点
    else if(children){
        mount(children, el)
    }
    appendChild(container, el); // container.appendChild(el)
}

export const mountText = function (vNode, container) {
    const el = createTextNode(vNode.children); // document.createTextNode(vNode.children);
    // vNode.el = el;
    appendChild(container, el); // container.appendChild(el)
}





