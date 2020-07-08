class FirstPlugin {
    // compiler is tabable instance
    apply(compiler) {
        // .plugin('evetname')
        compiler.plugin('run', function(compiler, cb) {
            console.log('webpack is to start bundling');
            cb();
        });
        compiler.plugin('done', function(stats) {
            console.log('webpack is finished bundling');
        });
    }
}