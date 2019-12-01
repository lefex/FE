let net = require('net');
// 创建 TCP 服务
let server = new net.Server();
// 端口号
const port = 8686;

let Log = function(msg) {
    console.log(msg);
};

// 监听 connection 事件
server.on("connection", function (socket) {
    // 当收到客户断消息会响应这个事件
    socket.on('data', function(data) {
        // data 是二进制数据
        Log(data.toString());
    });
});

// 监听某个端口
server.listen(port, function() {
    let address = server.address();
    Log("Server run on: http://127.0.0.1:" + address.port);
});