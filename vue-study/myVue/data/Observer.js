import Depend from './Depend.js';


const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
const arrayMethodNames = ['push','pop','shift','unshift','reverse','sort','splice','fill'];

arrayMethodNames.forEach(method=>{
    let original = arrayProto[method];
    Object.defineProperty(arrayMethods,method,{
        configurable:true,
        enumerable:true,
        writable:true,
        value:function(...args){
            let result = original.apply(this,args);
            let ob = this.__ob__;
            let inserted = [];
            if(method === 'push' || method === 'shift'){
                inserted = args;
            }else if(method === 'splice'){
                inserted = args.slice(2);
            }
            ob.observeArray(inserted);
            ob.dep.notify();
            return result;
        }
    })
})



export default class Observer {
    constructor(value) {
        this.value = value;
        //数组收集依赖 getter 和 方法拦截器都可以取到
        this.dep = new Depend();
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


function def(obj,key,val){
    Object.defineProperty(obj,key,{
        value:val,
        enumerable:false,
        writable:true,
        configurable:true,
    })
}


function defineReactive(obj, key, val) {
    if (typeof val === 'object') {
        new Observer(val)
    }

    let childOb = observe(val);

    //对象收集依赖 getter setter 都能够取到
    let dep = new Depend();
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
    if(typeof value !== 'object'){
        return ;
    }
    let ob;
    if(value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer){
        ob = value.__ob__;
    }else{
        ob = new Observer(value)
    }
    return ob;
}