
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
    $watch(expOrFn,cb){
        let watcher = new Watcher(this,expOrFn,cb)
        return function unwatch(){
            watcher.teardown();
        }
    }
}