let net = require('net');
// 创建一个 Socket 连接
let client = net.Socket();

let Log = function(msg) {
    console.log(msg);
};

let msgs = [
    '素燕：你好，如何才能从 0 开始入门前端学习呢？',
    '素燕：有什么好的资源推荐吗？',
    '素燕：那我关注学习一下，谢谢你。',
    '素燕：暂时没有了。'
];

// 发消息
let sendMsg = function() {    
    if (sendIndex < msgs.length) {
        Log(msgs[sendIndex]);
        client.write(msgs[sendIndex]);
        sendIndex += 1;
    } else {
        // 发完消息可以关闭这个连接
        // client.end();
    }
};

let sendIndex = 0;

// 连接 TCP Server 端
client.connect('8888', '127.0.0.1', function () {
    Log('have connected to server');
    sendMsg();
});

// 收到 Server 端发来的消息
client.on('data', function (data) {
    Log(data.toString());
    setTimeout(() => {
        sendMsg();
    }, 1000);
});

