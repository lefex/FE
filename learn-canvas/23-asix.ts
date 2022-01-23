/**
 * @author 素燕
 * @description 每个 demo 的模板
 */

import { initCanvas, SYAxisPos } from './share';
import {addCanvasEvent} from './brush';

function syRunDemo() {
    // 1. 创建 canvas
    let ctx = initCanvas(SYAxisPos.Center);
    ctx.lineWidth = 2;
    // 旋转多少度
    const degree = 30;

    // 添加画笔
    addCanvasEvent(ctx.canvas.id);

    const toHudu = (degree: number) => {
        return Math.PI / 180 * degree;
    }

    const drawPoint = (x: number, y: number, text: string) => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(x, y, 4, 0, 2*Math.PI);
        ctx.stroke();
        ctx.font = '18px Times';
        ctx.fillText(text, x + 6, y);
        ctx.restore();
    }

    let img = new Image();
    // img.src = 'content.jpeg';
    img.src = 'nazha.jpeg';
    img.onload = function () {
        let orignX = img.width / 2;
        let orignY = img.height / 2;
        ctx.save();
        ctx.globalAlpha = 0.8;

        // 旋转
        ctx.rotate(degree * Math.PI / 180);
        ctx.drawImage(img, 0, 0, img.width, img.height, -orignX, -orignY, img.width, img.height);

        ctx.restore();

        // 画一个矩形框
        ctx.strokeRect(-orignX, -orignY, img.width, img.height);

        // 求出矩形的外切圆的半径
        let radius = Math.sqrt(Math.pow(img.width/2, 2) + Math.pow(img.height/2, 2));
        // 画一个圆
        ctx.arc(0, 0, radius, 0, Math.PI*2);
        ctx.stroke();

        // let top =

        // 计算 p0
        /**
         * sinD = x / c, x = sinD * c, cosD = y / c, y = conD * c
         * 在平面内,已知一个矩形的四个角坐标,将矩形绕中心点转动一个角度,求旋转后的角坐标.
也就是已知半径,求每个点旋转后的坐标.
        */
    //    https://qb.zuoyebang.com/xfe-question/question/6b646366fadb114413a3d9c047376196.html

        let p0 = {
            x: Math.sin(toHudu(degree)) * radius,
            y: Math.cos(toHudu(degree)) * radius
        };
        console.log('p0 = ', p0);
        drawPoint(p0.x, p0.y, 'p0');

    }
}

syRunDemo();