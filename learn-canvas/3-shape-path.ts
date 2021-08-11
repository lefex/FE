/**
 * @author 素燕（我有个公众号：素燕）
 * @description 绘制路径（path）
 */

import { initCanvas } from './share';

function syRunDrawPathDemo() {
    // 绘制一根线
    const drawLine = (ctx: CanvasRenderingContext2D) => {
        // 不调用 beginPath 会有意想不到的结果
        ctx.beginPath();
        // 移动移动到某个位置
        ctx.moveTo(40, 20);
        // 从起点画一条线
        ctx.lineTo(360, 20);
        ctx.stroke();
    }

    const drawRect = (ctx: CanvasRenderingContext2D) => {
        // 表示要开始画画
        ctx.beginPath();
        // 绘制图形不能随便写坐标，否则可能看不到任何效果
        ctx.moveTo(40, 40);
        ctx.lineTo(80, 40);
        ctx.lineTo(80, 80);
        ctx.lineTo(40, 80);
        ctx.closePath();
        ctx.stroke();
    }

    const drawTriangle = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.moveTo(160, 40);
        ctx.lineTo(200, 80);
        ctx.lineTo(120, 80);
        ctx.fill();
    }

    const drawSmil = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }

    const clearReact = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(120, 200, 80, 80);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 初始化画布的一些属性
    // 设置线的颜色
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#222';
    ctx.lineWidth = 4;

    // 在画布中画一个矩形区域
    drawLine(ctx);
    drawRect(ctx);
    drawTriangle(ctx);
    drawSmil(ctx);
}

syRunDrawPathDemo();