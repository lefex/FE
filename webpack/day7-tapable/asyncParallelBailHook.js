const AsyncParallelBailHook = require('./lib/AsyncParallelBailHook');

// 异步并行，所有一起上
const asyncParallelBailHook = new AsyncParallelBailHook(['source']);
asyncParallelBailHook.tapPromise('SuyanasyncParallelBailHook', (source) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`source1: ${source}`);
            resolve(`${source}，和`);
        }, 3000);
    });
});
asyncParallelBailHook.tapPromise('SuyanasyncParallelBailHook', (source) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`source2: ${source}`);
            resolve(`${source}，素燕`);
        }, 1000);
    });
});
asyncParallelBailHook.tapPromise('SuyanasyncParallelBailHook', (source) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`source3: ${source}`);
            resolve(`${source}，一起学习 webpack`);
        }, 2000);
    });
});

asyncParallelBailHook.promise('关注公众号素燕').then(ret => {
    console.log(`ret = ${ret}`);
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
                reject(_err);
        };

        var _context;
        var _x = this._x;
        var _results = new Array(3);
        var _checkDone = () => {
            for (var i = 0; i < _results.length; i++) {
                var item = _results[i];
                if (item === undefined) return false;
                if (item.result !== undefined) {
                    _resolve(item.result);
                    return true;
                }
                if (item.error) {
                    _error(item.error);
                    return true;
                }
            }
            return false;
        }

        do {
            var _counter = 3;
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
                if (_counter > 0) {
                    if (0 < _results.length && (_result0 !== undefined && (_results.length = 1), (_results[0] = { result: _result0 }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }, _err0 => {
                if (_hasResult0) throw _err0;
                if (_counter > 0) {
                    if (0 < _results.length && ((_results.length = 1), (_results[0] = { error: _err0 }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            });

            if (_counter <= 0) break;
            if (1 >= _results.length) {
                if (--_counter === 0) _done();
            } else {
                var _fn1 = _x[1];
                var _hasResult1 = false;
                var _promise1 = _fn1(source);
                if (!_promise1 || !_promise1.then)
                    throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
                _promise1.then(_result1 => {
                    _hasResult1 = true;
                    if (_counter > 0) {
                        if (1 < _results.length && (_result1 !== undefined && (_results.length = 2), (_results[1] = { result: _result1 }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }, _err1 => {
                    if (_hasResult1) throw _err1;
                    if (_counter > 0) {
                        if (1 < _results.length && ((_results.length = 2), (_results[1] = { error: _err1 }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                });
            }

            if (_counter <= 0) break;
            if (2 >= _results.length) {
                if (--_counter === 0) _done();
            } else {
                var _fn2 = _x[2];
                var _hasResult2 = false;
                var _promise2 = _fn2(source);
                if (!_promise2 || !_promise2.then)
                    throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
                _promise2.then(_result2 => {
                    _hasResult2 = true;
                    if (_counter > 0) {
                        if (2 < _results.length && (_result2 !== undefined && (_results.length = 3), (_results[2] = { result: _result2 }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }, _err2 => {
                    if (_hasResult2) throw _err2;
                    if (_counter > 0) {
                        if (2 < _results.length && ((_results.length = 3), (_results[2] = { error: _err2 }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                });
            }
        } while (false);
        _sync = false;
    });
}