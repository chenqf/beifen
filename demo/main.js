

let memoize = function(fn,resolver){
    let cache = {};
    return function(...args){
        let key = typeof resolver === 'function' ? resolver.apply(this,args) :JSON.stringify(args);
        if(!cache.hasOwnProperty(key)){
            cache[key] = fn.apply(this,args);
        }
        return cache[key];
    };
}


let fibonacci = function(n){
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n - 2);
}

fibonacci = memoize(fibonacci);

// for(let i = 0; i < 10; i++){
//     console.log(`i=${i}:`,fibonacci(i))
// }

// console.log('总次数:',count)


console.time('no memoize time');
fibonacci(30);
console.timeEnd('no memoize time');
