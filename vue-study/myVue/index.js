
import {
    Observer,
    Watcher,
    Depend
} from './data/index.js'



class Vue{
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
        new Watcher(this,expOrFn,cb)
    }
}




window.vm = new Vue({
    data:{
        a:1,
        b:2,
        c:3,
        d:[{cqf:11},2,3,4],
        e:{
            f:{
                g:123
            }
        }
    }
})


vm.$watch('d',function(newVal,oldVal){
    console.log('new:',newVal);
    console.log('old',oldVal);
})

vm.$watch('e.f.g',function(newVal,oldVal){
    console.log('new:',newVal);
    console.log('old',oldVal);
})