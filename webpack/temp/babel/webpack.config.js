module.exports = {
    module: {
        rules: [
            {
                // 对 js 文件采用 babel-loader 处理
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    devtool: 'source-map'
};