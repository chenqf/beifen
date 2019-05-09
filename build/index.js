const config = require('./config');
const fs = require('fs');
// const util = require('files-tree');
const path = require('path');
const resolve = path.resolve;
const template = require('art-template');
let mainPath = resolve(__dirname,'../README.md');


//删除不希望发布的内容
function dealPublishData() {
    config.publish = config.publish.filter(item=>{
        let {children = []} = item;
        item.children = children.filter(i=>i.complete);
        return item.children.length;
    })
}

//生成主目录
function loadMain() {
    let mainTemplate = template(__dirname + '/main.template.html', {
        data:config
    });
    //批量生成首页目录
    fs.writeFileSync(mainPath, mainTemplate);
}

//为每个文章添加分类目录链接
function addLink() {
    let linkTemplate = template(__dirname + '/link.template.html', {
        data:config
    });
    config.publish.forEach((item)=>{
        let {path,children = []} = item;
        children.forEach((i)=>{
            let {name:p} = i;
            let _p = resolve(__dirname,`../articles/${path}/${p}/README.md`);

            let content = fs.readFileSync(_p,'utf-8');
            let index = content.indexOf('+ [博客首页]');
            if(index >= 0){
                content = content.slice(0,index);
            }
            content = `${content.replace(/(.*?)\s*$/,'$1')}\n\n${linkTemplate}`;
            fs.writeFileSync(_p, content);
        })
    })
}

//为每个分类下添加子文章链接
function addItems() {
    //批量未每个分类下生成文章列表
    config.publish.forEach((item)=>{
        let {children = [],path,name} = item;
        let {baseUrl} = config;
        let classifyTemplate = template(__dirname + '/classify.template.html', {
            data:{
                baseUrl,
                path,
                name,
                list:children
            }
        });
        let p = resolve(__dirname,`../articles/${path}/README.md`);
        fs.writeFileSync(p, classifyTemplate);
    });
}

//为每篇文章添加打赏信息
function addPay() {
    //TODO
    let payTemplate = template(__dirname + '/pay.template.html', {
        data:config.pay
    });

    //对每篇文章增加打赏
    list.forEach(function (item) {
        let path = item.path;
        let content = fs.readFileSync(path,'utf-8');
        if(content.indexOf(config.pay.title) < 0){
            content = `${content.replace(/(.*?)\s*$/,'$1')}\n\n${payTemplate}`;
            fs.writeFileSync(path, content);
        }
    });


}

//删除不希望发布的内容
dealPublishData();
//生成主目录
loadMain();
//为每个文章添加分类目录链接
addLink();
//为每个分类下添加子文章链接
addItems();










