"use strict";
// 可以获取某个变量或属性的类型，获取到的类型可直接使用
// 从已有的类型中生成新的类型
let runCar = {
    name: 'run',
    go() {
        console.log(`The run car going`);
    }
};
let flyCar = {
    name: 'fly',
    go() {
        console.log(`The fly car going`);
    }
};
flyCar.go();
// 这是啥写法？
const MAX_DOGS = 10;
let dogCount = 10;
