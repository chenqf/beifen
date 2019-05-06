// @flow Created by 陈其丰 on 2019/4/16.

import {debounce} from './lib/debounce.js';
import {throttle} from './lib/throttle.js';




let container = document.getElementById('container');


container.onclick = function () {
	console.log(this);
}







