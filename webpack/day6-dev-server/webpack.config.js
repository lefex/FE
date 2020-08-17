// path 为 node 提供的模块，可直接使用
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义入口
const entry = {
    home: './home/index.js',
    topic: './topic/index.js'
};

// 根据入口生成 html plugins
const plugins = [];
!(function(){
    let keys = Object.keys(entry);
    keys.map(key => {
        let htmlPlugin = new HtmlWebpackPlugin({
            // 标题
            title: 'webpack训练营',
            template: './index.tpl.html',
            // 模板额为的参数
            templateParameters: {
                'welcome': '和素燕一起学透 webpack',
                'des': '关注公众号素燕，每天学一点'
            },
            // 这个 html 使用哪个输出结果，可使用多个
            chunks: [key],
            filename: `${key}.html`,
            // 压缩处理
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            // meta 标签
            meta: {
                charset: { charset: 'utf-8' },
                viewport: 'width=device-width, initial-scale=1'
            },
            // 控制 script 标签插入的位置(head(true),body(false),)
            inject: "body",
            favicon: 'favicon.png',
        });
        plugins.push(htmlPlugin);
    });
}());

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
    plugins: plugins,
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}