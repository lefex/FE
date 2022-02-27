"use strict";
/**
 * @file interface.ts
 * @author 公众号素燕
 * @description ts 中的函数
 */
// createPerson 接口必须包含一个 Option 对象，对象中需要包含一个属性名为 name
// age 属性名可以不包含
function createPerson(option) {
    console.log(option.name);
    return option.name;
}
createPerson({
    name: 'suyan',
    from: 'beijing'
});
;
let createAnimal;
createAnimal = function animal(n, a) {
    const welcome = `His name ${n}, age is ${a}`;
    return true;
};
class Dog {
    name = 'adog';
    age = 20;
    run() {
        console.log('The dog runing');
    }
    speak(word) {
        console.log('The dog speak ', +word);
    }
}
class Circle {
    // 需要声明 interface 定义的接口
    width;
    height;
    r;
    constructor(w, h, r) {
        this.width = w;
        this.height = h;
        this.r = r;
    }
}
class SuYan {
    option;
    constructor(option) {
        this.option = option;
    }
}
let suyan = new SuYan({
    name: '素燕'
});
let suyan2 = new SuYan({
    name: '素燕',
    des: '毒舌程序员，帮阻10W人入门并进阶前端'
});
var SYNodeType;
(function (SYNodeType) {
    SYNodeType["TEXT"] = "text";
    SYNodeType["IMG"] = "img";
})(SYNodeType || (SYNodeType = {}));
function createTextNode() {
    let node = {
        content: '我是素燕',
        loc: {
            line: 1
        },
        type: SYNodeType.TEXT
    };
    return node;
}
function parse(option) {
    // 定义的 option 需要提供一个函数 isNativeTag
    if (option.isNativeTag) {
        const isNative = option.isNativeTag('div');
        if (isNative) {
            console.log('This is a native element');
        }
    }
}
const isNaTag = tag => tag === 'div';
parse({
    isNativeTag: isNaTag
});
function createVideo({ name, src = 'https://lefex.gitee.io/' }) {
    let video = {
        name,
        src
    };
    return video;
}
createVideo({
    name: 'suyan.mp4'
});
createVideo({
    name: 'suyan.mp4',
    src: 'https://lefex.github.io/'
});
const bgColor = {
    width: 100,
    height: 20,
    color: '#eee'
};
// 函数参数可以是一个函数
const run = function play(handler) {
    handler('go to work');
};
