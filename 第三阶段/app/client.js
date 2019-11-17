const http = require('http');

// 构建 request 对象所需要的参数
const options = {
    // 请求地址 ip
    host: '127.0.0.1',
    // 端口号
    port: 8888,
    // 方法
    method: 'GET',
    // 请求的路径
    path: '/api/fe/list',
    protocol: 'http:',
    // 超时时间设置 1秒
    timeout: 1000
}

const req = http.request(options, function (res) {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    // 响应数据
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    // 响应结束
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});
  
req.end();