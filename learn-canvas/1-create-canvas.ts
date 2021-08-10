/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用 JavaScript 创建 Canvas
 */

import {initCanvas} from './share';

function syDraw() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(40, 40, 120, 80);
    }

    let ctx = initCanvas();
    drawReact(ctx);
}

syDraw();