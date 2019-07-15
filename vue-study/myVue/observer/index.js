
import {
    def,
    hasOwn,
    isObject,
} from '../util/index.js'

import Dep from './dep.js';
import arrayMethods from './array.js'



export default class Observer {
    constructor(value) {
        this.value = value;
        //数组收集依赖 getter 和 方法拦截器都可以取到
        this.dep = new Dep();
        def(value,'__ob__',this);
        if (Array.isArray(value)) {
            Object.setPrototypeOf(value,arrayMethods)
            this.observeArray(value);
        } else {
            this.walk(value)
        }
    }
    observeArray(array){
        array.forEach(item=>observe(item));
    }
    walk(obj) {
        const keys = Object.keys(obj);
        keys.forEach(key => {
            defineReactive(obj, key, obj[key])
        });
    }
}


function defineReactive(obj, key, val) {
    if (isObject(val)) {
        new Observer(val)
    }

    let childOb = observe(val);

    //对象收集依赖 getter setter 都能够取到
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.depend();
            if(childOb){
                childOb.dep.depend();
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    })
}

function observe(value,asRootData){
    if(!isObject(value)){
        return ;
    }
    let ob;
    if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){
        ob = value.__ob__;
    }else{
        ob = new Observer(value)
    }
    return ob;
}