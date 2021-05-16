const express = require('express');
const path = require('path');

const port = process.env.PORT || 8686;
const app = express();

// 把文件夹 suyan 的内容交给 express.static
app.use('/', express.static(path.join(__dirname, 'suyan')));

// start http server
app.listen(port, () => {
    console.log(`Open in browser http://localhost:${port}/index.html}`);
});