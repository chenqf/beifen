const config = require('./config');
const fs = require('fs');
// const util = require('files-tree');
const path = require('path');
const resolve = path.resolve;

let count = config.publish.reduce((init,{children:list = []})=>{
    return init + list.reduce((i,c)=>{
        return i + !!(c.complete || c.over)
        },0)
},0);


console.log(count);









