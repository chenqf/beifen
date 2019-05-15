// 多次乱序数组的次数
let n = 100000; 
// 保存每个元素在每个位置上出现的次数
let countObj = {
    a:Array.from({length:10}).fill(0),
    b:Array.from({length:10}).fill(0),
    c:Array.from({length:10}).fill(0),
    d:Array.from({length:10}).fill(0),
    e:Array.from({length:10}).fill(0),
    f:Array.from({length:10}).fill(0),
    g:Array.from({length:10}).fill(0),
    h:Array.from({length:10}).fill(0),
    i:Array.from({length:10}).fill(0),
    j:Array.from({length:10}).fill(0),
}
for (let i = 0; i < n; i ++) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    arr.sort(() => Math.random() - 0.5);
    countObj.a[arr.indexOf('a')]++;
    countObj.b[arr.indexOf('b')]++;
    countObj.c[arr.indexOf('c')]++;
    countObj.d[arr.indexOf('d')]++;
    countObj.e[arr.indexOf('e')]++;
    countObj.f[arr.indexOf('f')]++;
    countObj.g[arr.indexOf('g')]++;
    countObj.h[arr.indexOf('h')]++;
    countObj.i[arr.indexOf('i')]++;
    countObj.j[arr.indexOf('j')]++;
}
console.table(countObj);