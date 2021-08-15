/**
 * @author 素燕（我有个公众号：素燕）
 * @description 绘制路径（path）
 */

import { initCanvas } from './share';

function syRunDrawPathDemo() {
    const drawRect = (ctx: CanvasRenderingContext2D) => {
        // 表示要开始画画，无论如何建议画线的时候先调用这个方法
        ctx.beginPath();
        // 绘制图形不能随便写坐标，否则可能看不到任何效果
        ctx.rect(40, 40, 200, 120);
        ctx.stroke();
    }

    // 画一个圆形坐标点
    const drawPoint = (p, ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
        ctx.textBaseline = 'bottom';
        ctx.fillText(`  ${p.text}(${p.x},${p.y})`, p.x, p.y);
        ctx.fill();
    }

    const drawRadius = (ctx: CanvasRenderingContext2D) => {
        // 起点
        let startP = {x: 80, y: 40, text: 's'};
        // p1 为两条线相交的点
        let p1 = {x: 240, y: 40, text: 'p1'};
        // p2 为要画弧的切点坐标
        let p2 = {x: 240, y: 120, text: 'p2'}; 
        // 画各个坐标点
        drawPoint(startP, ctx);
        drawPoint(p1, ctx);
        drawPoint(p2, ctx);

        // 画圆角
        ctx.beginPath();
        // 把起点移动到某个位置
        ctx.moveTo(startP.x, startP.y);
        ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 80);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }

    const drawArcTo = (ctx: CanvasRenderingContext2D, p1, p2) => {
        ctx.beginPath();

        let startP = {x: 80, y: 200, text: 's'};

        // 画各个坐标点
        drawPoint(startP, ctx);
        drawPoint(p1, ctx);
        drawPoint(p2, ctx);

        // 连接3个点
        ctx.beginPath();
        ctx.moveTo(startP.x, startP.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // 使用 arcTo 画弧度
        ctx.beginPath();
        ctx.moveTo(startP.x, startP.y);
        ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 60);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 初始化画布的一些属性
    // 设置线的颜色
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#222';
    ctx.lineWidth = 2;

    // 在画布中画一个矩形区域
    drawRect(ctx);
    drawRadius(ctx);

    let p1 = {x: 240, y: 280, text: 'p1'};
    let p2 = {x: 120, y: 360, text: 'p2'}; 
    drawArcTo(ctx, p1, p2);
}

syRunDrawPathDemo();