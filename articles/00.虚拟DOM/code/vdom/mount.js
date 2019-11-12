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
    // æè½½æ®éæ ç­¾
    if (VNode.tag) {
        mountElement(VNode, container)
    }
    //æè½½çº¯ææ¬
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

    VNode.el = el;

    //å¤çDOMå±æ§
    for (let key in data) {
        data.hasOwnProperty(key) && patchData(el,key,null,data[key]);
    }
    
    //å¤çå­èç¹

    //å¤å­èç¹
    if (children && Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            mount(children[i], el)
        }
    }
    //åèç¹
    else if(children){
        mount(children, el)
    }
    appendChild(container, el); // container.appendChild(el)
}

export const mountText = function (vNode, container) {
    const el = createTextNode(vNode.children); // document.createTextNode(vNode.children);
    vNode.el = el;
    appendChild(container, el); // container.appendChild(el)
}





