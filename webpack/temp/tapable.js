const Tapable = require('tapable');
class Compiler extends Tapable {
    constructor() {
        this.foo = '43';
        this.applyPluginsAsync('run', this, function(err, done) {
            if (done) {
                this.doRunStuffAfterSuccess();
            }
        });
        this.applyPlugins('done', stats);
    }
}