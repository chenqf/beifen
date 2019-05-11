// @flow Created by 陈其丰 on 2019/4/18.






const throttle = function(func,wait){
    let preTime = 0;
    return function(...args){
        let now = Date.now();
        if(now - preTime >= wait){
            preTime = now;
            func.apply(this,args);
        }
    }
}


const throttle = function(func,wait){
    let timer = null;
    return function(...args){
        if(!timer){
            timer = setTimeout(()=>{
                timer = null;
                func.apply(this,args);
            },wait)
        }
    }
}


const throttle = function(){
    let timer = null;
    let preTime = 0;
    return function(args){
        let now = Date.now();
        if(now - preTime >= wait){
            clearTimeout(timer);
            timer = null;
            preTime = now;
            func.apply(this,args);
        }else if(!timer){
            timer = setTimeout(()=>{
                timer = null;
                preTime = Date.now();
                func.apply(this,args);
            },wait - now + preTime)
        }
    }
}







const debounce = function(func,wati,immediate){
    let timer = null;

    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        if(immediate){
            let callNow = !timer;
            timer = setTimeout(()=>{
                timer = null;
            },wait)
            if (callNow) {
                func.apply(this,args);
            }
        }else{
            timer = setTimeout(()=>{
                timer = null;
                func.apply(this,args)
            },wait)
        }

    }
}



const throttle = function(func,wait,opt = {}){
    let {leading = true,trailing = true} = opt;
    let timer = null;
    let preTime = 0;
    return function(...args){
        let now = Date.now();
        if(!leading && !preTime){
            preTime = now;
        }
        if(now - preTime >= wait){
            clearTimeout(timer);
            timer = null;
            preTime = now;
            func.apply(this,args);
        }else if(!timer && trailing){
            timer = setTimeout(()=>{
                timer = null;
                preTime = Date.now();
                func.apply(this,args);
            },wait - now + preTime)
        }
    }
}










