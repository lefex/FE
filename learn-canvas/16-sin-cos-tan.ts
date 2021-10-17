/**
 * @author 素燕（我有个公众号：素燕）
 * @description 数学公式相关
 */

import { initCanvas } from './share';

function syRunDemo() {
    const left = 120;
    const top = 120;
    const drawTriangle = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.moveTo(left, 40);
        ctx.lineTo(left, 160);
        ctx.lineTo(left + 160, 160);
        ctx.closePath();
        ctx.stroke();

        Math.sin(1);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawTriangle(ctx);
}

syRunDemo();