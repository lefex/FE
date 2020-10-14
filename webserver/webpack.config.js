// path 为 node 提供的模块，可直接使用
const path = require('path');

// 定义入口
const entry = {
    home: './index.js'
};

// webpack 的配置其实就是一个对象
module.exports = {
    // 设置打包方式，支持 development 和 production
    mode: 'development',
    // 打包入口文件w
    entry: entry,
    // 最终打包结果配置
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 2081
    }
}