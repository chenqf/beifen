class HashRouter {
    constructor() {
            //用于存储不同hash值对应的回调函数
            this.routers = {};
            window.addEventListener('hashchange', this.load.bind(this), false)
        }
        //用于注册每个页面
    register(url, callback = function() {}) {
            this.routers[url] = callback;
        }
        //用于注册首页
    registerIndex(callback = () => {}) {
        this.routers['index'] = callback;
    }
    registerNotFound(callback = () => {}) {
            this.routers['404'] = callback;
        }
        //用于处理异常情况
    registerError(callback = () => {}) {
            this.routers['error'] = callback;
        }
        //用于调用不同页面的回调函数
    load() {
        let hash = location.hash.slice(1),
            handler;
        //没有hash 默认为首页
        if (!hash) {
            handler = this.routers.index;
        }
        //未找到对应hash值
        else if (!this.routers.hasOwnProperty(hash)) {
            handler = this.routers['404'] || function() {};
        } else {
            handler = this.routers[hash]
        }
        //执行注册的回调函数
        try {
            handler();
        } catch (e) {
            console.error(e);
            (this.routers['error'] || function() {})(e);
        }
    }
}

let router = new HashRouter();
let container = document.getElementById('container');

//注册首页回调函数
router.registerIndex(() => container.innerHTML = '我是首页');

//注册其他页面回到函数
router.register('/page1', () => container.innerHTML = '我是page1');
router.register('/page2', () => container.innerHTML = '我是page2');
router.register('/page3', () => container.innerHTML = '我是page3');
router.register('/page4', () => { throw new Error('抛出一个异常') });

//加载页面
router.load();
//注册未找到对应hash值时的回调
router.registerNotFound(() => container.innerHTML = '页面未找到');
//注册出现异常时的回调
router.registerError((e) => container.innerHTML = '页面异常，错误消息：<br>' + e.message);