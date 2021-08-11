/**
 * @author 素燕（我有个公众号：素燕）
 * @description 绘制矩形
 */

import {initCanvas} from './share';

function syRunDrawRectDemo() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#555';
        ctx.fillRect(40, 40, 80, 80);
    }

    const strokeReact = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = '#555';
        ctx.strokeRect(200, 40, 120, 80);
    }

    const clearReact = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(120, 200, 80, 80);
    }

    const drawColorPannel = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 6; j++){
              ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                               Math.floor(255-42.5*j) + ',0)';
              ctx.fillRect(j*25, i*25, 25, 25);
            }
          }
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawReact(ctx);
    strokeReact(ctx);
    clearReact(ctx);
    drawColorPannel(ctx);
}

syRunDrawRectDemo();