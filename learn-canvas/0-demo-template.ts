/**
 * @author 素燕（我有个公众号：素燕）
 * @description 每个 demo 的模板
 */

import { initCanvas } from './share';

function syRunDemo() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#555';
        ctx.fillRect(40, 40, 80, 80);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawReact(ctx);
}

syRunDemo();