const SyncLoopHook = require('./lib/SyncLoopHook');

// 一个接一个的 hook，上一个函数的返回值是下一个函数的参数
const syncLoopHook = new SyncLoopHook(['source']);
syncLoopHook.tap('SuyansyncLoopHook', (source) => {
    console.log(`source1: ${source}`);
    return;
});
syncLoopHook.tap('SuyansyncLoopHook', source => {
    console.log(`source2: ${source}`);
    return;
});
syncLoopHook.tap('SuyansyncLoopHook', source => {
    console.log(`source3: ${source}`);
    return ;
});

let ret = syncLoopHook.call('关注公众号素燕，');
console.log(`ret = ${ret}`);

function compilerCode() {
    "use strict";
    var _context;
    var _x = this._x;
    var _loop;
    do {
        _loop = false;
        var _fn0 = _x[0];
        var _result0 = _fn0(source);
        if(_result0 !== undefined) {
            _loop = true;
        }
        else {
            var _fn1 = _x[1];
            var _result1 = _fn1(source);
            if(_result1 !== undefined) {
                _loop = true;
            }
            else {
                var _fn2 = _x[2];
                var _result2 = _fn2(source);
                if(_result2 !== undefined) {
                    _loop = true;
                }
                else {
                    if(!_loop) {

                    }
                }
            }
        }
    } while(_loop);
}