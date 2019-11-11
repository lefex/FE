// 导入 expres 框架
const express = require('express');
// 初始化 express
const app = express();
// 使用打印中间件
const morgan = require('morgan');
app.use(morgan('short'));
// get 方法，匹配 path 为 /api/fe/list
app.get('/api/fe/list', function (req, res) {
    console.log('request path:' + req.path);
    var result = {
		code: 200,
		data: {
            name: "前端小课",
            des: "第三阶段内容：网络编程内容 HTTP，TCP，WebServer"
		}
    }
    // 响应以 json 的方式返回给客户端
    res.json(result);
});
// 监听 8888 端口
app.listen(8888);

console.log('app start: http://127.0.0.1:8888');