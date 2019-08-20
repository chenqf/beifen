
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function isArray(val){
    return Array.isArray(val)
}


const domPropsRE = /\W|^(?:value|checked|selected|muted)$/

// 获取父节点
export const getParentNode = function (element) {
    return element.parentNode;
}

//设置文本内容
export const setTextContent = function (element, text) {
    return element.setTextContent = text;
}

//删除节点
export const removeChild = function (parent, element) {
    return parent.removeChild(element)
}


//追加节点
export const appendChild = function (parent, element) {
    return parent.appendChild(element)
}

//插入节点 在 refElement 之前插入 element  (refElement 为空,代表加入到末尾)
export const insertBefore = function (parent, element, refElement) {
    return parent.insertBefore(element, refElement)
}

//获取下一个兄弟节点
export const getNextSibling = function(element){
    return element.nextSibling;
}

//创建标签
export const createElement = function (tag) {
    return document.createElement(tag);
}
export const createElementNS = function (tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

//创建文本
export const createTextNode = function (text) {
    return document.createTextNode(text);
}

//创建注释
export const createComment = function (comment) {
    return document.createComment(comment);
}

//查询dom节点
export const querySelector = function (query) {
    return document.querySelector(query);
}

export const queryTarget = function (tag) {
    return typeof tag === 'string' ? document.querySelector(tag) : tag;
}


//设置dom属性
export const patchData = function (el, key, prevValue, nextValue, isSVG) {
    switch (key) {
        case 'style':
            //应用新样式
            for (let k in nextValue) {
                el.style[k] = nextValue[k];
            }
            //找到旧样式已经不再新样式中存在
            // for (let k in prevValue) {
            //     if (!nextValue || !nextValue.hasOwnProperty(k)) {
            //         el.style[k] = '';
            //     }
            // }
            break;
        case 'class':
            let classStr = getClassStr(nextValue);
            el.className = classStr
            break
        default:
            //处理事件
            if (key.slice(0, 2) === 'on') {
                //删除事件
                if (prevValue) {
                    el.removeEventListener(key.slice(2), prevValue)
                }
                //添加事件
                if (nextValue) {
                    el.addEventListener(key.slice(2), nextValue)
                }
            }
            //特殊属性,比如如单选复选的选中
            else if (domPropsRE.test(key)) {
                // 当作 DOM Prop 处理
                el[key] = nextValue
            }
            //其他属性
            else {
                // 当作 Attr 处理
                el.setAttribute(key, nextValue)
            }
            break;
    }
}




function _getClassStr(obj, res = []) {
    if (typeof obj === 'string') {
        res.push(obj)
    } else if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            _getClassStr(obj[i], res);
        }
    } else if (isObject(obj)) {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (obj[i]) {
                    _getClassStr(i, res)
                }
            }
        }
    }
}

function getClassStr(obj) {
    let res = [];
    _getClassStr(obj, res);

    return res.length ? res.join(' ') : '';
}