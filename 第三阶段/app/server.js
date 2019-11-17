const http = require('http');
// 创建一个 HTTP server
const server = new http.Server();

/**
 * request 事件，当客户端发起请求后会响应这个事件
 * req：请求对象
 * res：响应对象
 * */ 
server.on('request', function(req, res) {
    let path = req.url;
    if (path.indexOf('/api/fe/list') == 0) {
        // 处理请求的 path 为 /api/fe/list
        res.writeHead(200, {
            "Content-type" : "application/json"
        });
        let data = {
            title: "前端小课",
            des: "内容由素燕公众号发布"
        };
        // 最终数据需要转换成 json 字符串
        res.write(JSON.stringify(data));
    } else {
        // 未实现，直接报 404 错误
        res.writeHead(404, {
            "Content-type" : "application/json"
        });
        let data = {
            code: "404",
            msg: "not found"
        };
        res.write(JSON.stringify(data));
    }
    res.end();
});

// 监听 8888 端口
server.listen(8888, function() {
    console.log('Server run in: http://127.0.0.1:8888');
});