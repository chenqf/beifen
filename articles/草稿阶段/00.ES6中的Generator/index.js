function* test() {
    yield demo();
    demo()
    yield 'world';
}


function demo(){
    console.log(123);
    return 321;
}


let t = test();

console.log(t.next());
console.log(t.next());
console.log(t.next());


