/**
 * sync：同步
 * async：异步
 * bail：保释
 * loop：循环
 * parallel：并行的，同时发生的
 * series：连续
 * waterfall：瀑布流
 * https://www.jianshu.com/p/273e1c9904d2
 * */
// const {
//     // sync hook 只能使用同步的 hook
//     // 只会调用 tap 的函数
//     SyncHook,
//     // 如果遇到一个 return，后面的 hook 就不走了
//     SyncBailHook,
//     // 瀑布流 hook，会从一个函数调用到下一个函数
//     SyncWaterfallHook,
//     // TODO，这个还没实现
//     SyncLoopHook,

//     // 可使用 tap、tapAsync、tapPromise，只不过是串行的
//     AsyncParallelHook,
//     AsyncParallelBailHook,
//     // 可使用 tap、tapAsync、tapPromise
//     AsyncSeriesHook,
//     AsyncSeriesBailHook,
//     AsyncSeriesWaterfallHook
// } = require('tapable');

const SyncHook = require('./lib/SyncHook');

// 创建一个 SyncHook，后面跟一个参数列表
const syncHook = new SyncHook(['name', 'age']);
// 添加一个 hook 事件
syncHook.tap('SuyanSyncHook', (name, age) => {
    console.log(`syncHook name: ${name}, age: ${age}`);
});
// 添加一个 hook 事件
syncHook.tap('SuyanSyncHook', (name, age) => {
    console.log(`1syncHook name: ${name}, age: ${age}`);
});
// 调用 hook
syncHook.call('suyan', 20);

function compilerCode() {
    "use strict";
    var _context;
    // _x 保存了所有的回调函数，也就是 tap 时的函数
    // syncHook.tap('SuyanSyncHook', FN);
    var _x = this._x;

    // 执行第一个回调函数
    var _fn0 = _x[0];
    _fn0(name, age);

    // 执行第二个回调函数
    var _fn1 = _x[1];
    _fn1(name, age);
}

// 直接定义函数
function sum(a, b) {
    return a + b;
}
// 通过 new Function 生成函数
const sum = new Function(['a', 'b'], 'return a + b;');

// 为 hook 添加拦截器
// syncHook.intercept({
//     // 当 hook 被调用时，可监听到 hook 的参数
//     call: (name, age) => {
//         console.log(`syncHook.intercept call: ${name} - ${age}`);
//     },
//     // 添加了 tap
//     tap: tap => {
//         console.log(`syncHook.intercept tap: ${tap}`);
//     },
//     // loop hook
//     loop: (name, age) => {
//         console.log(`syncHook.intercept loop: ${name} - ${age}`);
//     },
//     register: tapInfo => {
//         console.log(`syncHook.intercept register: ${tapInfo}`);
//         // 一定要有返回值的
//         return tapInfo;
//     }
// })
