
const puppeteer = require('puppeteer');

const websiteUrl = 'https://lefex.github.io/';

(async () => {
    // 启动 puppeteer
    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });
    // 打开浏览器后，创建一个新的页面
    const page = await browser.newPage();
    // 设置页面的尺寸，可以模拟手机、PC不同的设备
    await page.setViewport({
    width: 1280,
    height: 1400
    });

    // 打开一个页面
    await page.goto(websiteUrl);

    // 页面渲染完毕后，开始截图，全屏
    await page.screenshot({
    path: './shot.jpeg',
    fullPage: true,
    type: 'jpeg',
    quality: 100
    });
})();
