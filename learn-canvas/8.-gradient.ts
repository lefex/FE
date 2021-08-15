/**
 * @author 素燕（我有个公众号：素燕）
 * @description 渐变
 */

import { initCanvas, drawPoint } from './share';

function syRun() {
    const drawRectLineargradient = (ctx: CanvasRenderingContext2D) => {
        // 渐变色的起点
        let p1 = {x: 80, y: 80, text: 'p1'};
        // 渐变色的终点
        let p2 = {x: 240, y: 80, text: 'p1'};

        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.lineCap = 'round';
        ctx.moveTo(80, 80);
        ctx.lineTo(240, 80);

        let gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        // 给渐变色添加色值
        gradient.addColorStop(0.5, 'yellow');
        gradient.addColorStop(1, 'green');

        ctx.strokeStyle = gradient;

        ctx.stroke();

        // 绘制坐标值
        drawPoint(p1, ctx);
        drawPoint(p2, ctx);
    }

    const drawRectRadiaGradient = (ctx: CanvasRenderingContext2D) => {
        // 渐变色的起点
        let p1 = {x: 80, y: 160, text: 'p1', r: 40};
        // 渐变色的终点
        let p2 = {x: 240, y: 160, text: 'p1', r: 25};

        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.lineCap = 'round';
        ctx.moveTo(80, 160);
        ctx.lineTo(240, 160);

        let gradient = ctx.createRadialGradient(p1.x, p1.y, p1.r, p2.x, p2.y, p2.r);
        // 给渐变色添加色值
        gradient.addColorStop(0.5, 'yellow');
        gradient.addColorStop(1, 'green');

        ctx.strokeStyle = gradient;

        ctx.stroke();

        // 绘制坐标值
        drawPoint(p1, ctx);
        drawPoint(p2, ctx);

        const drawArc = p => {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'black';
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.stroke();
        };
        drawArc(p1);
        drawArc(p2);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    drawRectLineargradient(ctx);
    drawRectRadiaGradient(ctx);
}

syRun();