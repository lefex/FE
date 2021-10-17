/**
 * @author 素燕（我有个公众号：素燕）
 * @description 绘制矩形
 */

import {initCanvas} from './share';
import {GridSize} from './constant';

function syRunDrawRectDemo() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillRect(GridSize * 8, GridSize, GridSize * 2, GridSize * 2);
    }

    const strokeReact = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeRect(GridSize * 8, GridSize * 4, GridSize * 2, GridSize);
    }

    const clearReact = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(GridSize * 9, GridSize * 1, GridSize * 1, GridSize * 1);
    }

    const drawColorPannel = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 6; j++){
              ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                               Math.floor(255-42.5*j) + ',0)';
              ctx.fillRect(GridSize + j*GridSize, GridSize + i*GridSize, GridSize, GridSize);
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