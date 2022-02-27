"use strict";
// 类型声明的几种方式
// 类型别名声明（type sn = number | string;）
// 接口声明（interface I { x: number[]; }）
// 类声明（class C { }）
// 枚举声明（enum E { A, B, C }）
// 指向某个类型的import声明
// 声明布尔型变量
let isShow = true;
let isHidden = false;
// 数字
let age = 20;
let height = 11.2;
let count = 0x11;
// 字符串
let syname = 'suyan';
let welcome = "he's";
let from = `from ${syname}`;
// 数组
let dogs = ['xiaoming'];
let animals = ['xiaoming'];
// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let ret = ['suyan', 20];
ret[0];
ret[1];
// 枚举
var Color;
(function (Color) {
    // 设置下标起始值为 1
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const colorName = Color[1];
// any
let bookType = 'education';
bookType = 20;
// 数组中存放任意类型的值
let books = [20, 'suyan'];
// void 无类型
function warnUser() {
    console.log("This is my warning message");
}
// object
let cat = {
    name: 'miaomiao'
};
// 类型强制转化
let gooddes = 'vip good';
let lensy = gooddes.length;
let lensy2 = gooddes.length;
// 数组只能读取，不能对数组进行修改
let goods = [1, 2, 3, 4, 5];
