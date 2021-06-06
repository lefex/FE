const presets = [
    [
        // 这个人插件，可以帮助你通过不同的环境生成不同的代码
        "@babel/preset-env",
        {
            // 支持的浏览器环境
            "targets": {
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1"
            },
            'targets': {
                // 支持ie8，直接使用iOS浏览器版本9
                // 设置不同的浏览器版本，打包结果会不一样
                // https://github.com/browserslist/browserslist#queries
                'browsers': ['ie >= 11', 'iOS 9']
            },
            // 如果有未用到的 api，会自动引入 polyfill
            // entry 在入口出引入所有的特性
            // usage 在使用的位置引入
            // false 默认值，
            "useBuiltIns": "usage",
            // 转化的还是 ES6 语法
            // "modules": false,
            "corejs": "3.6.5"
        }
    ],
    '@babel/preset-typescript'
    // preset 作用顺序，从后向前
];

const plugins = [
    // plugin 执行顺序是从前到后
    // plugin 先执行，preset 后执行
    "@babel/plugin-transform-arrow-functions",
    // 可以减少代码量
    "@babel/plugin-transform-runtime",
    // [
    //     './lib/bplugin/name-reverse',
    //     {
    //         // option
    //         author: 'suyan'
    //     }
    // ]
];

module.exports = {
    presets,
    plugins
}