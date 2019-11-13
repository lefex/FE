const http = require('http');
const server = new http.server();

/**
 * request 事件，当客户端发起请求后会响应这个事件
 * req：请求对象
 * res：响应对象
 * */ 
server.on('request', function(req, res) {
    res.writeHead(200, {
        "Content-type" : "application/json"
    });
    let data = {
        title: "前端小课",
        des: "内容由素燕公众号发布"
    };
    res.write(JSON.stringify(data));
    res.end();
});

server.on('conection', function(req, socket, head) {

});

server.listen(8888, function() {
    console.log('Server run in: 127');
})