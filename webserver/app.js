/**
 * @file app.js
 * @author 公众号：素燕
 * @description https://lefex.github.io/fe-mini-course/
 */

const Express = require('express');
const app = new Express();
const fs = require('fs');
const path = require('path');
const os = require('os');

const port = 2081;

const generateHtml = (content) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>欢迎来到《前端小课》</h1>
        <div>${content}</div>
    </body>
    </html>`;
};


const ipAddress = () => {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

app.on('error', err => {
    console.error('server error', err) 
});

// root
app.get('/', (req, res) => {
    res.send(generateHtml(`the right address is like: http://localhost:${port}/index.html`));
});

// get html file
app.get('/*.html', (req, res) => {
    console.log(`receive a request: ${req.originalUrl}`);
    let des = path.resolve(__dirname, './dist');
    let filePath = des + req.originalUrl;
    let resHtml;
    console.log(`begin find file in: ${filePath}`);
    if (fs.existsSync(filePath)) {
        resHtml = fs.readFileSync(filePath, 'utf-8');
    }
    else {
        console.log(`file not in path: ${filePath}`);
        resHtml = generateHtml(`${req.originalUrl} file not exist, please create file in ${des}`);
    }
    res.send(resHtml)
});

app.listen(port);

console.log(`Project is running at: http://localhost:${port}`);
const appHost = ipAddress();
if (appHost) {
    console.log(`Project is running at: http://${appHost}:${port}`);
}