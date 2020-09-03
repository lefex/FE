const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    // 把 jquery 个 vue 打包成动态库
    entry: {
        jquery_dll: ['jquery'],
        vue_dll: ['vue']
    },
    output: {
        // 打包后的文件名
        // [name]为 entry 里的名字(jquery_dll, vue_dll)
        filename: '[name].js',
        // 路径为 dll
        path: resolve(__dirname, 'dll'),
        // 打包库里向外暴露的的名字是什么
        // var jquery_b1c94c9f341c95430389
        library: '[name]_[hash]'
    },
    plugins: [
        // 生成 manifest 文件
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: resolve(__dirname, 'dll/[name].manifest.json')
        })
    ],
    mode: 'production'
}