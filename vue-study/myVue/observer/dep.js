




export default class Depend{
    constructor(){
        this.subs = [];
    }
    add(sub){
        this.subs.indexOf(sub) < 0 && this.subs.push(sub)
    }
    remove(sub){
        let index = this.subs.indexOf(sub);
        if(index >= 0){
            this.subs.splice(index,1)
        }
    }
    notify(){
        const subs = this.subs.slice();
        subs.forEach(item=>item.update());
    }
    depend(){
        if(window.target){
            this.add(window.target);
        }
    }
}