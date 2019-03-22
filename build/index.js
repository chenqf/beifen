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

//批量生成首页目录
fs.writeFileSync(mainPath, mainTemplate);

//对每篇文章增加打赏
let list = util.allFile(resolve(__dirname,'../articles'));
list.forEach(function (item) {
   let path = item.path;
   let content = fs.readFileSync(path,'utf-8');
   if(content.indexOf(config.pay.title) < 0){
       content = `${content.replace(/(.*?)\s*$/,'$1')}\n\n${payTemplate}`;
       fs.writeFileSync(path, content);
   }
});







