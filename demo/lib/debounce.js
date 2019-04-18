// @flow Created by 陈其丰 on 2019/4/16.

export const debounce = function(func,wait = 50,immediate = true) {
    let timer = null;
    let result;
    let debounced = function(...args){
        if(timer){
            clearTimeout(timer);
        }
        if(immediate){
            let callNow = !timer;
            timer = setTimeout(()=>{
                timer = null;
            },wait);
            callNow && (result = func.apply(this,args));
        }else{
            timer = setTimeout(()=>{
                func.apply(this,args);
            },wait);
        }
        return result;
    };
    debounced.cancel = function(){
        clearTimeout(timer);
        timer = null;
    }
};



