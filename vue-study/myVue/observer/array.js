


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


export default arrayMethods;