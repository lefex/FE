/**
 * @author 素燕（我有个公众号：素燕）
 * @description translate 修改坐标原点
 */

import { initCanvas } from './share';

function syRunDemo() {
    const origin = {
        x: 360,
        y: 280
    };
    const lineWidth = 200;
    const radius = 6;

    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';

        ctx.beginPath();
        ctx.moveTo(origin.x - lineWidth, origin.y);
        ctx.lineTo(origin.x + lineWidth, origin.y);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y - lineWidth);
        ctx.lineTo(origin.x, origin.y + lineWidth);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(origin.x, origin.y, radius, 0, Math.PI / 180 * 360);
        ctx.fill();

        ctx.strokeStyle = '#000';
        /**
         * ctx 默认的绘制原点为左上角
         * translate 设置后将修改画布的原点
         * 以后绘制的坐标值为相对设置后的原点
         */
        ctx.translate(origin.x, origin.y);
        ctx.strokeRect(40, 80, 160, 80);

        ctx.strokeRect(-200, -160, 160, 80);

        ctx.strokeRect(-80, -40, 160, 80);

        ctx.save();
        ctx.rotate(45 * Math.PI / 180);
        ctx.strokeRect(-80, -40, 160, 80);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawReact(ctx);
}

syRunDemo();