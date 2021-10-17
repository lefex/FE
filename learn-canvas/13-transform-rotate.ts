/**
 * @author 素燕（我有个公众号：素燕）
 * @description rotate 旋转
 */

import { initCanvas } from './share';

function syRunDemo() {
    const origin = {
        x: 360,
        y: 280
    };
    const lineWidth = 200;
    const radius = 6;

    const drawReact = (ctx: CanvasRenderingContext2D, degree: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width * 2, ctx.canvas.height * 2);
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
        ctx.save();
        ctx.translate(origin.x, origin.y);
        ctx.strokeRect(-80, -40, 160, 80);
        // 旋转的角度
        ctx.rotate(degree * Math.PI / 180);
        ctx.strokeStyle = 'blue';
        ctx.strokeRect(-80, -40, 160, 80);
        ctx.restore();
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    let count = 0;
    setInterval(() => {
        count += 6;
        if (count >= 360) {
            count = 0;
        }
        drawReact(ctx, count);
    }, 1000 / 60);
}

syRunDemo();