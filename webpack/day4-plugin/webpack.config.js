// path 为 node 提供的模块，可直接使用
const path = require('path');
const ClearPlugin = require('./plugins/clearPlugin');
const OnlinePlugin = require('./plugins/onlinePlugin');
// webpack 的配置其实就是一个对象
module.exports = {
    // 设置打包方式，支持 development 和 production
    mode: 'development',
    // 打包入口文件
    entry: './index.js',
    // 最终打包结果配置
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new ClearPlugin({
            removeAll: true
        }),
        new OnlinePlugin({
            errorTodo: true
        })
    ]
}