const less = require('less');
// webpack 提供的模块
const loaderUtils = require('loader-utils');

// source 为源代码
module.exports = function (source) {
  console.log('--------- begin handle less file:');
  console.log(source);
  // 获取 webpack.config.js 中配置的 options
  const options = loaderUtils.getOptions(this);
  console.log('--------- options: ');
  console.log(options);

  // loader 的异步回调
  const callback = this.async();
  // less 转换函数
  less.render(source).then(({css, map, imports}) => {
    console.log('less render finished, css: ');
    console.log(css);
    callback(null, css);
  });
}


// for (const key in this) {
//   if (this.hasOwnProperty(key)) {
//     const element = this[key];
//     if (element && element != null) {
//       console.log(key, element.constructor);
//     }
//     else {
//       console.log(key);
//     }
//   }
// }