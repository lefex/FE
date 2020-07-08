module.exports = {
    module: {
        rules: [
            {
                // sass-loader 把 scss 代码处理成 css
                // css-loader 会把 CSS 代码中的 @import 和 url() 语句导入，压缩 CSS
                // style-loader 将 CSS 代码转换成字符串后，注入到 js 代码中，js 文件和 css 在一起
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
}