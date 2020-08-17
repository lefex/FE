const AsyncParallelHook = require('./lib/AsyncParallelHook');

// 异步并行，所有一起上
// 只要有个一失败都将失败
const asyncParallelHook = new AsyncParallelHook(['source']);
asyncParallelHook.tapAsync('SuyanasyncParallelHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source1: ${source}`);
        callback('suyan');
    }, 3000);
});
asyncParallelHook.tapAsync('SuyanasyncParallelHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source1: ${source}`);
        callback('lefex');
    }, 1000);
});

asyncParallelHook.callAsync('关注公众号素燕', res => {
    console.log('ret = ', res);
});

// 编译后的代码
function compilerCode() {
    "use strict";
    var _context;
    var _x = this._x;
    console.log('this._x = : ', this._x);
    do {
        var _counter = 2;
        var _done = () => {
            _callback();
        };

        if (_counter <= 0) break;
        var _fn0 = _x[0];
        _fn0(source, _err0 => {
            if (_err0) {
                if (_counter > 0) {
                    _callback(_err0);
                    _counter = 0;
                }
            } else {
                if (--_counter === 0) _done();
            }
        });

        if (_counter <= 0) break;
        var _fn1 = _x[1];
        _fn1(source, _err1 => {
            if (_err1) {
                if (_counter > 0) {
                    _callback(_err1);
                    _counter = 0;
                }
            } else {
                if (--_counter === 0) _done();
            }
        });
    } while (false);
}