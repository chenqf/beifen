// @flow Created by 陈其丰 on 2019/4/16.


export const throttle = function(func,wait = 50,opt = {}) {
    let timer = null,
        preTime = 0,
        {leading = true,trailing = true} = opt;
    let throttled = function (...args) {
        let now = Date.now();
        if(!leading && !preTime){
            preTime = now;
        }
        if(now - preTime >= wait){
            clearTimeout(timer);
            timer = null;
            preTime = now;
            func.apply(this,args);
        }else if(trailing && !timer){
            timer = setTimeout(()=>{
                preTime = Date.now();
                timer = null;
                func.apply(this,args);
            },wait - now + preTime);
        }
    }
    throttled.cancel = function(){
        clearTimeout(timer);
        timer = null;
        preTime = 0;
    }
    return throttled;
};























