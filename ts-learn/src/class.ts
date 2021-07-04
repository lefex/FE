/**
 * @file class.ts
 * @author 公众号素燕
 * @description class使用
 */

class Animal {
    private _fullname: string = '';
    name: string
    constructor(name: string) {
        this.name = name;
    }
    welcome() {
        return 'I am ' + this.name;
    }
    run() {
        console.log(`${this.name} running`);
    }
    // get fullname() {
    //     console.log('begin get _fullname');
    //     return this._fullname;
    // }
    // set fullname(value: string) {
    //     console.log('begin set _fullname');
    //     this._fullname = value;
    // }
}

class Cattle extends Animal {
    // 静态变量，类拥有的变量
    static from: string = 'BaoTou'
    // 只读属性必须在声明时或构造函数里被初始化
    readonly age: number = 0;
    // 私有属性，只能在类的内部使用
    private isOld() {
        return this.age > 10;
    }
    constructor(name: string) {
        super(name);
        this.age = 0;
    }
    speak() {
        console.log('汪汪');
    }
}

// 抽象类
// 抽象类不会被直接实例化，用来描述一个类该有哪些方法、属性等
abstract class DownloadAbstract {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    // 抽象方法必须在派生类中实现
    abstract startDownload(): void;
    stopDonwload(): void {
    }
}

class Download extends DownloadAbstract {
    constructor(url: string) {
        super(url);
    }
    startDownload() {
        console.log('start downloading');
    }
}