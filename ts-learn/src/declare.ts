/**
 * @file declare.ts
 * @author 公众号素燕
 * @description 如何声明某些变量
 */

// 声明全局变量
declare var atuhor: string;
// 声明一个全局常量
declare const PAGE: number;
// 声明一个局部常量
declare let rn: number;

// 声明一个全局函数
declare function callSuyan(email: string): void;

// 声明一个对象

declare namespace suyan {
    function getWechat(who: string): string;
    let fans: number;
}

// 函数重载
// 函数名相同，参数类型和返回值不一样
declare function getWidget(n: string): string;
declare function getWidget(a: number): number;

interface Setting {
    greeting: string,
    duration?: number,
    color?: string
}
declare function greeting(set: Setting): void;

// 类型别名，表示多种类型
type PersonLike = string | (() => string) | number;
declare function greet(person: PersonLike): void;

greet('suyan');
greet(20);

declare namespace LogOption {
    interface confirmOption {
        verbose?: string
    }
    interface alertOption {
        modal: boolean
        title: string
    }
}
generateLog(log: LogOption): void;
generateLog({
    verbose: false,
    name: 'suyan'
});

// 声明一个 class
declare class Animal {
    constructor(name: string);
    name: string;
    run(duration: number): void;
}

// 规范
// 不要使用如下类型Number，String，Boolean或Object

/* 错误 */
function reverse(s: String): String;
/* OK */
function reverse(s: string): string;

/* 错误 */
function fn(x: () => any) {
    x();
}
/* OK */
function fn(x: () => void) {
    x();
}

/* OK */
// 函数重载把更精准的放在最前面
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;