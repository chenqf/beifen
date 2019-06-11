// @flow Created by 陈其丰 on 2019/4/12.
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
});
// 浏览器下
window.addEventListener('unhandledrejection',(e)=>{
    e.preventDefault();
    console.log(e);
});