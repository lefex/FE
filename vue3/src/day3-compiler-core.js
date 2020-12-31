/**
 * @file day3-compiler-core.js
 * @author 素燕
 * @description vue3 模板编译，来自公众号素燕
 */

import {
    baseCompile
} from '@vue/compiler-core';

let app = document.getElementById('suyan-app');

let ret = baseCompile(app.innerHTML);

console.log(ret);
