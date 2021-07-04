
// 类型声明的几种方式

// 类型别名声明（type sn = number | string;）
// 接口声明（interface I { x: number[]; }）
// 类声明（class C { }）
// 枚举声明（enum E { A, B, C }）
// 指向某个类型的import声明

// 声明布尔型变量
let isShow: boolean = true
let isHidden: boolean = false

// 数字
let age: number = 20
let height: number = 11.2
let count: number = 0x11

// 字符串
let syname: string = 'suyan';
let welcome: string = "he's";
let from: string = `from ${syname}`;

// 数组
let dogs: string[] = ['xiaoming']
let animals: Array<string> = ['xiaoming']

// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let ret: [string, number] = ['suyan', 20];
ret[0]
ret[1]

// 枚举
enum Color {
    // 设置下标起始值为 1
    Green = 1,
    Blue
}
const colorName: string = Color[1];

// any
let bookType: any = 'education';
bookType = 20;
// 数组中存放任意类型的值
let books: any[] = [20, 'suyan']

// void 无类型
function warnUser(): void {
    console.log("This is my warning message");
}

// object
let cat: object = {
    name: 'miaomiao'
}

// 类型强制转化
let gooddes = 'vip good';
let lensy = (gooddes as string).length;
let lensy2 = (<string>gooddes).length;

// 数组只能读取，不能对数组进行修改
let goods: ReadonlyArray<number> = [1, 2, 3, 4, 5];