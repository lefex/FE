const AsyncSeriesHook = require('./lib/AsyncSeriesHook');

// 异步串行，就是一个一个来
const asyncSeriesHook = new AsyncSeriesHook(['source']);
asyncSeriesHook.tapAsync('SuyanasyncSeriesHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source1: ${source}`);
        callback();
    }, 3000);
});
asyncSeriesHook.tapAsync('SuyanasyncSeriesHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source2: ${source}`);
        callback();
    }, 1000);
});

asyncSeriesHook.callAsync('关注公众号素燕', ret => {
    console.log(`ret = ${ret}`);
});

// 编译后的代码
function compilerCode() {
"use strict";
var _context;
var _x = this._x;
// 下一个要执行的函数
function _next0() {
    var _fn1 = _x[1];
    _fn1(source, _err1 => {
        if (_err1) {
            _callback(_err1);
        } else {
            _callback();
        }
    });
}
// 第一个要执行的函数
var _fn0 = _x[0];
_fn0(source, _err0 => {
    if (_err0) {
        _callback(_err0);
    } else {
        _next0();
    }
});
}