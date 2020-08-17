const SyncWaterfallHook = require('./lib/SyncWaterfallHook');

// 一个接一个的 hook，上一个函数的返回值是下一个函数的参数
const syncWaterfallHook = new SyncWaterfallHook(['source']);
syncWaterfallHook.tap('SuyanSyncWaterfallHook', (source) => {
    console.log(`source1: ${source}`);
    return `${source}和`;
});
syncWaterfallHook.tap('SuyanSyncWaterfallHook', source => {
    console.log(`source2: ${source}`);
    return `${source}素燕`;;
});
syncWaterfallHook.tap('SuyanSyncWaterfallHook', source => {
    console.log(`source3: ${source}`);
    return `${source}一起学习 webpack`;;
});

let ret = syncWaterfallHook.call('关注公众号素燕，');
console.log(`ret = ${ret}`);

function compilerCode() {
"use strict";
var _context;
var _x = this._x;
var _fn0 = _x[0];
var _result0 = _fn0(source);
if(_result0 !== undefined) {
    source = _result0;
}
var _fn1 = _x[1];
var _result1 = _fn1(source);
if(_result1 !== undefined) {
    source = _result1;
}
var _fn2 = _x[2];
var _result2 = _fn2(source);
if(_result2 !== undefined) {
    source = _result2;
}
return source;
}