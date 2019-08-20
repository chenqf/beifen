//创建一个纯文本的VNode
export const createTextVNode = function(text) {
    return {
        tag: null,
        data: null,
        // 纯文本类型的 VNode，其 children 属性存储的是与之相符的文本内容
        children: text
    }
}

export const h = function (tag = null, data = null, children = null) {
    if(Array.isArray(children) && children.length === 1){
        children = children[0];
    }else if(!Array.isArray(children)){
        children = createTextVNode(children + '')
    }
    return {
        tag,
        data,
        children
    }
}