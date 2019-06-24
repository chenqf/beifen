
let obj1 = {
    name:'obj1_name',
    print:function(){
        return ()=>console.log(this.name)
    }
}

let obj2 = {name:'obj2_name'}


obj1.print()()
obj1.print().call(obj2)
obj1.print.call(obj2)()