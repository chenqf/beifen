// @flow Created by 陈其丰 on 2019/4/16.

import {debounce} from './lib/debounce.js';
import {throttle} from './lib/throttle.js';


function fn(f) {
	setTimeout(()=>{
		f();
	},2000);
}


var f = function () {
	console.log(1);
}


fn(f)

f = 2;







