const config = require('./config');
const fs = require('fs');
// const util = require('files-tree');
const path = require('path');
const resolve = path.resolve;
let titles = [];

config.publish.forEach(({ path, children: list = [] }) => {
    list.forEach(i => {
        let name = i.name;
        if (!i.complete && !i.over) {
            titles.push(`${path}/${name}`);
        }
    })
})

console.log(titles);