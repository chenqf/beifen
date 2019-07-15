
import {
    parsePath
} from '../util/index.js'



export default class Watcher{
    constructor(vm,expOrFn,cb){
        this.vm = vm;
        if(typeof expOrFn === 'function'){
            this.getter = expOrFn;
        }else{
            this.getter = parsePath(expOrFn);
        }
        this.cb = cb;
        this.value = this.get();
    }
    get(){
        window.target = this;
        let value = this.getter.call(this.vm,this.vm)
        window.target = undefined;
        return value;
    }
    update(){
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm,this.value,oldValue)
    }
}



