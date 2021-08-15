/**
 * @author 素燕（我有个公众号：素燕）
 * @description 设置填充
 */

import { initCanvas } from './share';

function syRunDrawRectDemo() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        let img = new Image();
        img.src = 'wm.png';
        img.onload = function() {
            // create pattern
            let parrern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = parrern;
            ctx.fillRect(40, 40, 200, 60);
        }
    }

    const drawShadow = (ctx: CanvasRenderingContext2D) => {
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 8;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        ctx.font = '30px Times';
        ctx.fillStyle = 'Black';
        ctx.fillText('和素燕一起学可视化', 40, 160);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawReact(ctx);
    drawShadow(ctx);
}

syRunDrawRectDemo();