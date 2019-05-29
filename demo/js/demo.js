"use strict";
// 布尔 数字 字符串
var b = true;
var n = 10.2;
var s = 'I am a str';
console.log('boolean', b);
console.log('number', n);
console.log('string', s);
// 数组
var list1 = [1, 2, 3];
var list2 = [3, 2, 1];
var list3 = [4, 5, 6, 'str'];
//元组
var x = ['', 2];
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//Any 可以是任何类型
var notSure = 4;
notSure = true;
notSure = 'str';
var list4 = [1, true, 'str'];
//Void 表示没有任何类型
function logUser() {
    console.log('没有返回值');
}
var void1 = undefined; // 有疑问，null 算不算 void
// Never 永不存在值的类型
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
// Object 非基本类型 
var o = /1/;
//类型断言 确切知道当前类型比定义类型更确定
var num = 100;
var numLen = num.length;
var io = { label: '', height: 123 };
//# sourceMappingURL=demo.js.map