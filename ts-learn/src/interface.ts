/**
 * @file interface.ts
 * @author 公众号素燕
 * @description ts 中的函数
 */

// 做为变量使用的话用 const，若做为属性则使用readonly。
interface Option {
    name: string;
    // age 可选
    age?: number;
    // 该属性只能读取
    readonly from: string;
}

// createPerson 接口必须包含一个 Option 对象，对象中需要包含一个属性名为 name
// age 属性名可以不包含
function createPerson(option: Option) {
    console.log(option.name);
    return option.name;
}

createPerson({
    name: 'suyan',
    from: 'beijing'
});

// 定义一个函数类型的接口
interface CreateAnimalFn {
    (name: string, age: number): boolean;
};
let createAnimal: CreateAnimalFn;

createAnimal = function animal(n: string, a: number) {
    const welcome = `His name ${n}, age is ${a}`;
    return true;
}

// 类
// 可以规范一个类的定义
interface AnimalInterface {
    name: string,
    age: number,
    from?: string,
    run(): void,
    speak(word: string): void
}

class Dog implements AnimalInterface {
    name: string = 'adog';
    age: number = 20;
    run() {
        console.log('The dog runing');
    }
    speak(word: string) {
        console.log('The dog speak ', + word);
    }
}

// 接口继承
interface ShapeInterface {
    width: number;
    height: number;
}

interface CircleInteface extends ShapeInterface {
    r: number;
}

class Circle implements CircleInteface {
    // 需要声明 interface 定义的接口
    width: number;
    height: number;
    r: number;
    constructor(w: number, h: number, r: number) {
        this.width = w;
        this.height = h;
        this.r = r;
    }
}

// 定义一个类，控制构造函数的参数
interface SuYanOption {
    name: string;
    des?: string;
}

class SuYan {
    option: SuYanOption;
    constructor(option: SuYanOption) {
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

// vue3 接口继承
interface SYSourceLocation {
    line: number
}
enum SYNodeType {
    TEXT = 'text',
    IMG = 'img'
}

interface SYNode {
    type: SYNodeType
    loc: SYSourceLocation
}
interface SYTextNode extends SYNode {
    type: SYNodeType.TEXT
    content: string
}

function createTextNode() {
    let node: SYTextNode = {
        content: '我是素燕',
        loc: {
            line: 1
        },
        type: SYNodeType.TEXT
    }
    return node;
}

// 定义函数
interface ParserOptions {
    /**
     * 是否为原生节点
     */
    isNativeTag?: (tag: string) => boolean
}

function parse(option: ParserOptions) {
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

// 解构
interface VideoOptions {
    name: string;
    src?: string;
}
function createVideo({name, src = 'https://lefex.gitee.io/'}: VideoOptions) {
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

interface SyBg {
    width: number;
    height: number;
}

interface SyColor {
    color: string;
}

type SyBgColor = SyBg & SyColor;

const bgColor: SyBgColor = {
    width: 100,
    height: 20,
    color: '#eee'
}