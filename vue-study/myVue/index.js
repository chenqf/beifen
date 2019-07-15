
import Vue from './instance/index.js'


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