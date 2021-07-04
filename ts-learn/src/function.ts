/**
 * @file enum.ts
 * @author 公众号素燕
 * @description ts 中函数的使用
 */

// 声明的函数有2个参数，age为可选参数
function change(name: string, age?: number) {

}

// 函数的 name 默认值为 suyan
function update(name: string = 'suyan') {

}

// 函数表达式
let sum = function (x: number, y: number): number {
    return x + y;
};
sum(10, 20);