const AsyncSeriesBailHook = require('./lib/AsyncSeriesBailHook');

// 异步串行，就是一个一个来
const asyncSeriesBailHook = new AsyncSeriesBailHook(['source']);
asyncSeriesBailHook.tapAsync('SuyanasyncSeriesBailHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source1: ${source}`);
        callback();
    }, 3000);
});
asyncSeriesBailHook.tapAsync('SuyanasyncSeriesBailHook', (source, callback) => {
    setTimeout(() => {
        console.log(`source2: ${source}`);
        callback();
    }, 1000);
});

asyncSeriesBailHook.callAsync('关注公众号素燕', ret => {
    console.log(`ret = ${ret}`);
});

function bailCode() {
"use strict";
var _context;
var _x = this._x;
console.log('this._x = : ', this._x);
function _next0() {
    var _fn1 = _x[1];
    _fn1(source, (_err1, _result1) => {
        if (_err1) {
            _callback(_err1);
        } else {
            if (_result1 !== undefined) {
                _callback(null, _result1);
                ;
            } else {
                _callback();
            }
        }
    });
}
var _fn0 = _x[0];
_fn0(source, (_err0, _result0) => {
    if (_err0) {
        _callback(_err0);
    } else {
        if (_result0 !== undefined) {
            _callback(null, _result0);
            ;
        } else {
            _next0();
        }
    }
});
}

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