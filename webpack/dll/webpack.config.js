// path 为 node 提供的模块，可直接使用
const path = require('path');
// vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
// 使用 vue-loader 是官方要求必须要使用 VueLoaderPlugin 这个插件
// 引入时只能叫 VueLoaderPlugin 这个名字
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入 webpack，使用 DllReferencePlugin
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入 AddAssetHtmlWebpackPlugin，给 HTML 添加动态库
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

// webpack 的配置其实就是一个对象
module.exports = {
    // 设置打包方式，支持 development 和 production
    mode: 'production',
    // 打包入口文件
    entry: './home/index.js',
    // 最终打包结果配置
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    // 配置 loader，不同文件应用不同的 loader
    module: {
        rules: [
            {
                // vue 文件采用 vue-loader 来处理
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                // css 文件，先采用 css-loader 处理，再使用 style-loader 处理，注意顺序
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
plugins: [
    new HtmlWebpackPlugin({
        template: './home/index.html'
    }),
    // vue-loader 目前需要 VueLoaderPlugin，不然会报错
    // 直接创建了 VueLoaderPlugin 实例
    new VueLoaderPlugin(),
    // DLL
    // jquery 不参与打包
    new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'dll/jquery_dll.manifest.json')
    }),
    // vue 不参与打包
    new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'dll/vue_dll.manifest.json')
    }),
    // 在 HTML 中添加动态库 jquery_dll.js
    new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, 'dll/jquery_dll.js')
    }),
    // 在 HTML 中添加动态库 vue_dll.js
    new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, 'dll/vue_dll.js')
    }),
]
}