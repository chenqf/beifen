// 布尔 数字 字符串
let b:boolean = true;
let n:number = 10.2;
let s:string = 'I am a str';

console.log('boolean',b);
console.log('number',n);
console.log('string',s);


// 数组
let list1:number[] = [1,2,3];
let list2:Array<number> = [3,2,1];
let list3:Array<number|string> = [4,5,6,'str'];

//元组
let x:[string,number] = ['',2];

//枚举

enum Color {Red = 1,Green,Blue};
let c:Color = Color.Green;


//Any 可以是任何类型
let notSure:any = 4;
notSure = true;
notSure = 'str';

let list4:any[] = [1,true,'str'];

//Void 表示没有任何类型

function logUser():void{
    console.log('没有返回值');
}
let void1:void = undefined; // 有疑问，null 算不算 void


// Never 永不存在值的类型
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

// Object 非基本类型 

let o:object = /1/;

//类型断言 确切知道当前类型比定义类型更确定

let num : any = 100;
let numLen:number = (num as string).length;


// 接口 其实就是定义一个数据格式
/**
 * 可选属性  key ?: type
 * 只读属性  readonly key : type   变量用 const 属性用 readonly
 * TODO 描述函数类型
 */
interface LabelledValue {
    label: string;
    width?:number;
    readonly height : number;
    readonly hh ?: number;
}

let io:LabelledValue = {label:'',height:123}
