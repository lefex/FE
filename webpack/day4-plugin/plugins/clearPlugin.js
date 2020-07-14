const del = require("del");
// 1、定义一个 JavaScript 类（class CleanPlugin）或者函数；
class ClearPlugin {
  constructor(option) {
    console.log('ClearPlugin constructor called');
  }
  // 2、需要定义一个 apply 方法；
  apply(compiler) {
    const hooks = compiler.hooks;
    if (!compiler.options.output || !compiler.options.output.path) {
      // 没有配置输出文件，什么也不干
      return;
    }
    this.outputPath = compiler.options.output.path;
    // 3、指定 hook 来「钩住」你想要的事件；
    hooks.emit.tapAsync('clean-plugin', (compilation, callback) => {
      // 4、处理 webpack 内部提供的数据；
      const stats = compilation.getStats();
      if (stats.hasErrors()) {
        // 有错误不能删除文件
        return;
      }
      // 开始删除文件
      (async () => {
        await del([this.outputPath]);
        // 5、当处理的任务结束时，要给 webpack 一个回调告诉 webpack 我完事了；
        callback();
      })();
    });
  }
}

module.exports = ClearPlugin;

// console.log(Object.keys(hooks));
// compiler.hooks.beforeRun.tap('clean-plugin', () => {
//   console.log('webpack beforeRun');
// });


// hooks.emit.tapAsync('clean-plugin', (compilation, callback) => {
//   // Create a header string for the generated file:
//   var filelist = 'In this build:\n\n';

//   // Loop through all compiled assets,
//   // adding a new line item for each filename.
//   for (var filename in compilation.assets) {
//     filelist += '- ' + filename + '\n';
//   }

//   // Insert this list into the webpack build as a new file asset:
//   compilation.assets['filelist.md'] = {
//     source: function() {
//       return filelist;
//     },
//     size: function() {
//       return filelist.length;
//     }
//   };

//   callback();
// });

// apply(compiler) {
//   console.log('ClearPlugin apply called');
//   if (!compiler.options) {
//     console.log('webpack config not found!');
//     return;
//   }

//   let hooks = compiler.hooks;
//   if (!hooks) { // 只支持 webpack4+ 
//     return;
//   }

//   hooks.emit.tap('clean-webpack-plugin', compilation => {
//     console.log('webpack4+: emit tap compilation');
//   });

//   hooks.done.tap('clean-webpack-plugin', stats => {
//     console.log('webpack4+: hooks done tap');
//   });