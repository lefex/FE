const AsyncParallelHook = require('./lib/AsyncParallelHook');

// 异步并行，所有一起上
// 只要有个一失败都将失败
const asyncParallelHook = new AsyncParallelHook(['source']);
asyncParallelHook.tapPromise('SuyanasyncParallelHook', (source) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`source1: ${source}`);
            resolve();
        }, 3000);
    });
});
asyncParallelHook.tapPromise('SuyanasyncParallelHook', (source) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`source2: ${source}`);
            resolve();
        }, 1000);
    });
});

asyncParallelHook.promise('关注公众号素燕').then(() => {
    // 无回调值
});

// 编译后的代码
function compilerCode() {
    "use strict";
    return new Promise((_resolve, _reject) => {
        var _sync = true;
        function _error(_err) {
            if (_sync)
                _resolve(Promise.resolve().then(() => { throw _err; }));
            else
                _reject(_err);
        };
        var _context;
        var _x = this._x;
        console.log('this._x = : ', this._x);
        do {
            var _counter = 2;
            var _done = () => {
                _resolve();
            };
            if (_counter <= 0) break;
            var _fn0 = _x[0];
            var _hasResult0 = false;
            var _promise0 = _fn0(source);
            if (!_promise0 || !_promise0.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
            _promise0.then(_result0 => {
                _hasResult0 = true;
                if (--_counter === 0) _done();
            }, _err0 => {
                if (_hasResult0) throw _err0;
                if (_counter > 0) {
                    _error(_err0);
                    _counter = 0;
                }
            });
            if (_counter <= 0) break;
            var _fn1 = _x[1];
            var _hasResult1 = false;
            var _promise1 = _fn1(source);
            if (!_promise1 || !_promise1.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
            _promise1.then(_result1 => {
                _hasResult1 = true;
                if (--_counter === 0) _done();
            }, _err1 => {
                if (_hasResult1) throw _err1;
                if (_counter > 0) {
                    _error(_err1);
                    _counter = 0;
                }
            });
        } while (false);
        _sync = false;
    });
}