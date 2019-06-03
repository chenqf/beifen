const config = require('./config');
const fs = require('fs');
// const util = require('files-tree');
const path = require('path');
const resolve = path.resolve;
let titles = [];
let count = config.publish.reduce((init, { children: list = [] }) => {
    return init + list.reduce((i, c) => {
        if (c.complete || c.over) {

            titles.push(c.name)
            return i + 1;
        } else {
            return i;
        }
    }, 0)
}, 0);


console.log(count);
console.log(titles);