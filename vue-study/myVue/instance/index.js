
import Observer from '../observer/index.js'
import Watcher from '../observer/watcher.js'

export default class Vue{
    constructor(opt = {}){
        let {
            data = {}
        } = opt;
        //转化data
        new Observer(data);
        let keys = Object.keys(data);
        keys.forEach(key=>{
            Object.defineProperty(this,key,{
                configurable:true,
                enumerable:true,
                set:function(val){
                    return data[key] = val
                },
                get:function(){
                    return data[key];
                }
            })
        })
        this.$data = data;

    }
    $watch(expOrFn,cb,options = {}){
        let vm = this;
        let {immediate = false} = options;
        let watcher = new Watcher(vm,expOrFn,cb,options)
        if(immediate){
            cb.call(vm,watcher.value);
        }
        return function unwatch(){
            watcher.teardown();
        }
    }
}