// @flow Created by 陈其丰 on 2019/3/21.

const config = require('./config');
const fs = require('fs');
const path = require('path');
const resolve = path.resolve;
let  {baseUrl,path:basePath,publish = []} = config;
baseUrl = `${baseUrl}/${basePath}`;
basePath = resolve(__dirname,`../${basePath}`);

let str = '# 个人博客\n';
let mainPath = resolve(__dirname,'../README.md');

publish.forEach(function (item) {
    let {
        name,//分类主标题
        path,//分类路径
        children = [] //分类下文章
    } = item;
    //每个分类的路径
    let p = `${basePath}/${path}`;
    str = `${str}## ${name}\n`;
    children.forEach(function (i,index) {
        //每篇文章的标题
        let name = i.name;
        //每篇文章的具体内容
        let content = fs.readFileSync(`${p}/${name}.md`,'utf-8');
        //文章的url地址
        let url = i.issues || `${baseUrl}/${path}/${name}.md`;
        str = `${str}+ [${index + 1}.${name}](${url})\n`;
    });
});

fs.writeFileSync(mainPath, str);



