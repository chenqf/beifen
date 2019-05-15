


/**
 * 柯里化工具函数
 * @param fn      柯里化的原函数
 * @param length  原函数需要的参数个数
 * @param holder  接收的占位符
 * @param args    已接收的参数列表
 * @param holders 已接收的占位符位置列表
 * @return        继续柯里化的函数 或 最终结果
 */
function _curry(fn,length,holder,args,holders){
    return function(..._args){
        //倒序遍历参数列表，删除无用占位符
        while(_args.length && _args[_args.length - 1] === holder){
            _args.pop();
        }
        //将参数复制一份，避免多次操作同一函数导致参数混乱
        params = args.slice();
        //将占位符位置列表复制一份，新增加的占位符增加至此
        let _holders = holders.slice();
        //循环入参，追加参数 或 替换占位符
        _args.forEach((arg,i)=>{
            //真实参数 之前存在占位符 将占位符替换为真实参数
            if (arg !== holder && holders.length) {
                let index = holders.shift();
                _holders.splice(_holders.indexOf(index),1);
                params[index] = arg;
            }
            //真实参数 之前不存在占位符 将参数追加到参数列表中
            else if(arg !== holder && !holders.length){
                params.push(arg);
            }
            //传入的是占位符,之前不存在占位符 记录占位符的位置
            else if(arg === holder && !holders.length){
                params.push(arg);
                _holders.push(params.length - 1);
            }
            //传入的是占位符,之前存在占位符 删除原占位符位置
            else if(arg === holder && holders.length){
                holders.shift();
            }
        })


        //存在占位符 或 入参小于需要参数个数 继续柯里化
        if(_holders.length || params.length < length){
            return _curry.call(this,fn,length,holder,params,_holders)
        }
        //已满足要求，直接调用函数
        else{
            return fn.apply(this,params);
        }
    }
}



function curry(fn,length = fn.length,holder = curry){
    return _curry.call(this,fn,length,holder,[],[])
}





var fn = function(a,b,c,d,e){
    console.log(a,b,c,d,e)
}


var _ = {};
var _fn = curry(fn,5,_);



_fn(1, 2, 3, 4, 5);
_fn(_, 2, 3, 4, 5)(1);
_fn(1, _, 3, 4, 5)(2);
_fn(1, _, 3)(_, 4)(2)(5);
_fn(1, _, _, 4)(_, 3)(2)(5);
_fn(_, 2)(_, _, 4)(1)(3)(5)
