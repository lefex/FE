const path = require('path');

// 入口配置
const entry = {
    // 只有一个入口，入口只有 1 个文件
    entry: './app/index.js',
    // 只有一个入口，入口只有 2 个文件
    entry: ['./pc/index.js', './wap/index.js'],
    // 有 2 个入口
    entry: {
        wap: './pc/index.js',
        pc: './wap/index.js'
    }
}

const output = {
    // 输出文件的目录，必须为绝对路径
    path: path . resolve( dirname, 'dist') ,
    // 输出的文件名
    filename: 'index.js',
    // 配置多个 entry 时，为不同的 entry 定义不同的文件名
    filename: '[name].js',
    // 根据文件内容的 hash 值生成文件的名称，用于缓存
    filename: '[chunkhash].js',
    // 发布到线上的所有资源的 URL 前缀
    publicPath: '/assets/',
    // 放到根目录下
    publicPath: '',
    // 放到 CDN 上
    publicPath: 'https://www.cdn.com/',
    // 导出库的名称
    library: 'SuyanLibrary',
    // 导出库的类型
    libraryTarget: 'commonjs',
    // 是否包含有用的文件路径信息到生成的代码里
    pathinfo: true,
    // 附加 chunk 的文件名称
    chunkFilename: '[id].js',
    chunkFilename: '[chunkhash].js',
    // JSONP 异步加载资源文件的回调函数
    jsopFunction: 'suyanJsonp',
    // Source Map 文件的名称
    sourceMapFilename: '[file].map',
    // 浏览器开发者工具显示的源码模块名称
    devtoolModuleFilenameTemplate: 'webpack:lll[resource-path ]',
    // 异步加载跨域资源时使用的方式
    crossOriginLoading: 'use-credentials',
    crossOriginLoading: 'anonymous',
    crossOriginLoading: false
}

// 配置loader
const rules = [
    {
        // 要匹配的 loader 文件
        test: /\.jsx?$/,
        // 要命中的文件
        include: [
            path.resolve(__dirname, 'app')
        ],
        // 忽略 app/test 中的文件
        exclude: [
            path.resolve(__dirname, 'app/test')
        ],
        // 要使用的 loader，从后向前执行
        use: [
            // loader 名称
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    // 向 loader 中要传的参数
                }
            }
        ],
        // 不用解析和处理的模块，用正则匹配
        noParse: [
            /suyan-gongzhonghao\.js$/
        ]
    }
];

// 配置插件
const plugins = [

];

// 配置寻找模块的规则
const resolve = {
    // 寻找模块的根目录
    modules: [
        'node_modules',
        path.resolve(__dirname, 'app')
    ],
    // 模块的后缀名
    extensions: ['.js', '.json', 'jsx'],
    // 模块别名配置，用于映射模块
    alias: {
        // 将 module 转换成 new-module
        'module': 'suyan-module',
        'only-module$': 'suyan-module'
    },
    alias: [{
        // 老模块
        name: 'module',
        // 新模块
        alias: 'suyan-module',
        // 是否只映射模块
        onlyModule: true
    }],
    // 
    symlinks: true,
    // 模块的描述文件
    descriptionFiles: ['package.json'],
    // 模块的描述文件里描述入口的文件名
    mainFields: ['main'],
    // 是否强制导入语句携带文件后缀
    enforceExtension: false,
    // 性能检测配置
    performace: {
        hints: 'warning',
        hints: 'error',
        hints: false,
        maxAssetSize: 20000,
        maxEntrypointSize: 400000,
    }
}

const devServer = {
    proxy: {
        '/api': 'http://host'
    },
    contentBase: path.join(__dirname, 'public')
}

// 动态配置
const path = require('path');
const UglifyJsPlugin = require('uglifyJsPlugin');
const { rejects } = require('assert');

module.exports = function(env = {}, argv) {
    const plugins = [];
    const isProduction = env['production'];
    if (isProduction) {
        plugins.push(
            new UglifyJsPlugin()
        );
    }
    return {
        plugins: plugins,
        devtool: isProduction ? undefined : 'source-map'
    };
}
// webpack --env.production --env.name=suyan

// 直接返回一个 promise
module.exports = function(env = {}, argv) {
    return new Promise((resolve, reject) = {
        resolve();
    });
}

// 导出多份配置
module.exports = [
    {
        // 采用 Object 的方式
    },
    function() {
        // 采用函数的方式
        return {

        }
    },
    function() {
        // 采用异步的方式
        return Promise();
    }
]