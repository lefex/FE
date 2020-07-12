// path 为 node 提供的模块，可直接使用
const path = require('path');
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
    // 配置 loader，不同文件应用不同的 loader
    module: {
        rules: [
            {
                // css 文件，先采用 less-loader，再采用 css-loader 处理，最后使用 style-loader 处理，注意顺序
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                    {
                        loader: 'suyanLessLoader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
}