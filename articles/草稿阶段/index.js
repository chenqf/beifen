let FPS = (function(){
    let request = function(){
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    let cancel = function(){
        return (
            window.cancelAnimationFrame || 
            window.webkitCancelAnimationFrame || 
            function(num){
                window.clearTimeout(num)
            }
        )
    }();


    // 请求ID，用于停止
    let requestId = null;
    // 上一秒的时间
    let lastTime = null;
    // 上一帧的时间
    let lastFrameTime = null;
    // 函数执行了多少次
    let frame = 0;
    // 函数共执行了多少次
    let allFrame = 0;

    let initParams = function(){
        lastTime = Date.now();
        lastFrameTime = Date.now();
        frame = 0;
        allFrame = 0;
    }

    let loop = function(){
        let now = Date.now();
        frame ++;
        lastFrameTime = now;
        if(now >= 1000 + lastTime){
            let fps = ~~(frame/(now - lastTime) * 1000);
            console.log('fps:',fps);
            frame = 0;
            lastTime = now;
        }
        requestId = request(loop)
    }

    return {
        getForTime:()=>{
            if(requestId){
                return ;
            }
        },
        go:()=>{
            if(requestId){
                return ;
            }
            initParams();
            loop();
        },
        stop:()=>{
            cancel(requestId);
            requestId = null;
        }
    }
}())