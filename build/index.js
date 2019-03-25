const config = require('./config');
const fs = require('fs');
const util = require('files-tree');
const path = require('path');
const resolve = path.resolve;
const template = require('art-template');
let mainPath = resolve(__dirname,'../README.md');

let payTemplate = template(__dirname + '/pay.template.html', {
    data:config.pay
});
let mainTemplate = template(__dirname + '/main.template.html', {
    data:config
});
let linkTemplate = template(__dirname + '/link.template.html', {
    data:config
});



//批量生成首页目录
fs.writeFileSync(mainPath, mainTemplate);

//批量未每个分类下生成文章列表
let igList = [];// 分类目录，不做批量添加处理
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
    igList.push(resolve(p));
    fs.writeFileSync(p, classifyTemplate);
});

//所有文章列表
let list = util.allFile(resolve(__dirname,'../articles')).filter((item)=>/\.md$/.test(item.name) && igList.indexOf(resolve(item.path)) < 0);
//对每篇文章添加快捷链接
list.forEach(function (item) {
    let path = item.path;
    let content = fs.readFileSync(path,'utf-8');
    if(content.indexOf('博客首页') < 0){
        content = `${content.replace(/(.*?)\s*$/,'$1')}\n\n${linkTemplate}`;
        fs.writeFileSync(path, content);
    }
});

return ;

//对每篇文章增加打赏
list.forEach(function (item) {
   let path = item.path;
   let content = fs.readFileSync(path,'utf-8');
   if(content.indexOf(config.pay.title) < 0){
       content = `${content.replace(/(.*?)\s*$/,'$1')}\n\n${payTemplate}`;
       fs.writeFileSync(path, content);
   }
});







