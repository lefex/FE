/**
 * @author 公众号：素燕
 * @description app.js
 */

const express = require('express');
const path = require('path');
const topicRouter = require('./router/topic');
const port = 3000;
const app = express();

const suyan = {
    call: function(req, res, next) {
        console.log('suyan this = ', this);
        // next();
    }
};
suyan.call();
app.use(suyan.call);

// 中间件
// 如果中间件没结束 request-response 环，必须调用 next 方法，也就是下一个中间件，否则请求会被 hang 住
// 每次请求中间件都会被调用一次
const logger = function (req, res, next) {
    console.log('[logger midware]', req.path);
    console.log('logger this', this, typeof this);
    next();
};
const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    console.log('[logger requestTime]', req.requestTime);
    next()
}
app.use(logger);
app.use(requestTime);

app.use('/topic', topicRouter);

// 路由
// app.METHOD(PATH, HANDLER)
// 会匹配根路由 get 请求
// http://localhost:3000
app.get('/', (req, res) => {
    console.log('recevie a get request');
    res.send('suyan');
});

// http://localhost:3000/make
app.get('/make', (req, res) => {
    console.log('recevie a make get request');
    console.log('make this', this, typeof this);
    res.send('I am make');
});

// 可以匹配一个文件
// http://localhost:3000/suyan.text
app.get('/suyan.text', (req, res) => {
    console.log('recevie a suyan.text get request');
    res.send('I am suyan.text');
});

// 匹配 proxy+api，+表示至少一个字符
app.get('/proxy+api', (req, res) => {
    console.log('recevie a proxy+api get request');
    res.send('I am proxy+api');
});
// 匹配 proxy*api，*表示0个或多个字符
app.get('/proxy*api', (req, res) => {
    console.log('recevie a proxy*api get request');
    res.send('I am proxy*api');
});
// 匹配 userbaseapi 或 userapi
app.get('/user(base)?api', function (req, res) {
    res.send('/user(base)?api');
});

// 正则匹配
// 匹配包含 business 的路由
app.get(/business/, function (req, res) {
    res.send('/business/')
});
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
});

// 带有参数的路由
app.get('/book/:bookId', (req, res) => {
    res.send(req.params);
});

// post 方法
app.post('/', (req, res) => {

});

// 多个 router handler
const validsPaths = [
    '/api/login',
    '/api/add'
];
const validPath = (req, res, next) => {
    const path = req.path;
    console.log(path);
    if (validsPaths.indexOf(path) !== -1) {
        next();
    }
    else {
        res.send(`path ${path} is invalid`);
    }
};
const apiDataProvide = (req, res, next) => {
    res.send('get api data successed');
};

// 路由链
app.route('/cat')
   .get((req, res) => {
       res.send('get cat');
   })
   .post((req, res) => {
    res.send('post cat');
   });

// 处理函数
app.get('/api/*', validPath, apiDataProvide);

// 静态文件
// app.use(express.static('public'));
// 提供一个访问静态资源文件的前缀
// http://localhost:3000/static/home.js
// http://localhost:3000/static/qrcode.png

// 如果在其它路径下启动 app 将导致路径非法，比如：node ./self/app.js，只能是 node app.js
// app.use('/static', express.static('public'));
// 这种方式不必担心在哪个文件下启动app
app.use('/static', express.static(path.join(__dirname, 'public')));

// 设置模板引擎，把模板渲染成 HTML
// http://localhost:3000/suyan
app.set('views', './views');
// 设置模板引擎
app.set('view engine', 'pug');
app.get('/suyan', (req, res) => {
    res.render('suyan', {
        title: '和素燕一起学前端',
        message: '帮助10W人入门并进阶前端'
    });
});

// 监听端口
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});