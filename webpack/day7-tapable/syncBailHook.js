const SyncBailHook = require('./lib/SyncBailHook');

// 一个接一个的 hook，只要有一个返回 undefined 的就截止
const syncBailHook = new SyncBailHook(['source']);
syncBailHook.tap('SuyansyncBailHook', (source) => {
    console.log(`source1: ${source}`);
});
syncBailHook.tap('SuyansyncBailHook', source => {
    console.log(`source2: ${source}`);
    return '学习 webpack';
});
syncBailHook.tap('SuyansyncBailHook', source => {
    console.log(`source3: ${source}`);
});

let ret = syncBailHook.call('关注公众号素燕，');
console.log(`ret = ${ret}`);

// 编译后的代码
function compilerCode() {
"use strict";
var _context;
var _x = this._x;
console.log('this._x = : ', this._x);
var _fn0 = _x[0];
var _result0 = _fn0(source);
if (_result0 !== undefined) {
    return _result0;
} else {
    var _fn1 = _x[1];
    var _result1 = _fn1(source);
    if (_result1 !== undefined) {
        return _result1;
    } else {
        var _fn2 = _x[2];
        var _result2 = _fn2(source);
        if (_result2 !== undefined) {
            return _result2;
        } else {
        }
    }
}
}