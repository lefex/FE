/**
 * @file class.ts
 * @author 公众号素燕
 * @description class使用
 */
class Animal {
    _fullname = '';
    name;
    constructor(name) {
        this.name = name;
    }
    welcome() {
        return 'I am ' + this.name;
    }
    run() {
        console.log(`${this.name} running`);
    }
}
class Cattle extends Animal {
    // 静态变量，类拥有的变量
    static from = 'BaoTou';
    // 只读属性必须在声明时或构造函数里被初始化
    age = 0;
    // 私有属性，只能在类的内部使用
    isOld() {
        return this.age > 10;
    }
    constructor(name) {
        super(name);
        this.age = 0;
    }
    speak() {
        console.log('汪汪');
    }
}
// 抽象类
// 抽象类不会被直接实例化，用来描述一个类该有哪些方法、属性等
class DownloadAbstract {
    url;
    constructor(url) {
        this.url = url;
    }
    stopDonwload() {
    }
}
class Download extends DownloadAbstract {
    constructor(url) {
        super(url);
    }
    startDownload() {
        console.log('start downloading');
    }
}
const CHART_NAME = '__chat';
class SCharts {
    [CHART_NAME];
    constructor() {
        this[CHART_NAME] = 'suyan';
    }
    // setOption<Opt extends InitBasicOption>(option: Opt): void;
    // setOption<Opt extends InitBasicOption>(option: Opt, foceUpdate: boolean): void;
    setOption(option, foceUpdate, eventNum) {
        if (option.width === 0) {
            option.width = 100;
        }
    }
}
export {};
