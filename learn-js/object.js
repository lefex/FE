/*
属性的4个参数：
Object.defineProperty() 定义属性
configurable：是否可通过 delete 删除属性，默认 true
enumerable：是否可以通过 for-in 遍历，默认 true
writable: 是否能够修改属性的值，默认 true
value：属性设置的值，默认 undefined
*/
let person = {};

// 数据属性
Object.defineProperty(person, 'name', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'suyan'
});

// 访问器属性 get set
Object.defineProperty(person, 'age', {
    configurable: true,
    enumerable: true,
    get() {
        return this._age;
    },
    set(newValue) {
        this._age = newValue;
    }
});

// 获取属性的属性描述符
let nameDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log('nameDescriptor = ', nameDescriptor);
let ageDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log('ageDescriptor = ', ageDescriptor);