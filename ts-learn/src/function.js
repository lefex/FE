"use strict";
/**
 * @file enum.ts
 * @author 公众号素燕
 * @description ts 中函数的使用
 */
// 声明的函数有2个参数，age为可选参数
function change(name, age) {
}
// 函数的 name 默认值为 suyan
function update(name = 'suyan') {
}
// 函数表达式
let sum = function (x, y) {
    return x + y;
};
sum(10, 20);
let prepare;
