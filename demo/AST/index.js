// @flow Created by 陈其丰 on 2019/4/19.


const recast = require('recast');

const code =`const answer = 8 * 9;`;
// 用螺丝刀解析机器
const ast = recast.parse(code);


//将AST对象重新转回可以阅读的代码
// const output = recast.print(ast).code;

console.log(ast);