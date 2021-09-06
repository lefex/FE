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
    // 移动移动到某个位置，可以作为绘图的起点，或者绘制之间不连接的 path
    // 线宽
    ctx.lineWidth = 30;
    // 线顶点的样式 'butt', 'round', 'square'
    // butt 默认样式，不会导致线变长
    // round 圆头，会导致两顶点处的线变长 lineWidth/2
    // square 方头，会导致两顶点处线变长 lineWidth/2
    ctx.lineCap = 'round';

    // 在画线的过程中需要注意最终线被画到了那个区域
    ctx.moveTo(80, 120);
    // lineTo 画一条直线
    ctx.lineTo(320, 120);
    ctx.stroke();
}

    const drawLineJoinStyle = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.moveTo(160, 120);
        ctx.lineTo(240, 200);
        ctx.lineTo(280, 120);
        ctx.lineTo(360, 200);
        // 斜面
        ctx.lineJoin = 'bevel';
        // miter 默认的
        ctx.miterLimit = 10;
        // 倾斜的
        // ctx.lineJoin = 'miter';
        // ctx.lineJoin = 'round';

        let dashs = ctx.getLineDash();
        console.log('dashs = ', dashs);
        ctx.setLineDash([20]);

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

const drawArcs = (ctx: CanvasRenderingContext2D) => {
    // arc(x, y, radius, startAngle, endAngle, counterclockwise)
    ctx.beginPath();
    // false 顺时针 true 逆时针
    // 弧度和角度
    // 弧度是角的度量单位
    // 弧长等于半径的弧，其所对的圆心角为一弧度
    // 弧度表示：弧长与半径长相等所对应的角度
    // 圆的弧长为 2πr，一个圆的弧度为 2πr / r = 2π，π为圆周率，约为 3.14 2π = 2*3.14=6.28
    // 1π 为 180度，1度 = π / 180, 1弧度 = 180 / π

    // 起点为 3 点钟方向
    // 画一弧度
    // ctx.arc(80, 160, 40, 0, 1, false); // Outer circle
    // 画 90 度
    // ctx.arc(80, 160, 40, 0, Math.PI / 180 * 90);
    ctx.arc(80, 160, 40, 0, Math.PI / 180 * 360, false);

    // 如何才能让起点为 12 点钟方向
    // ctx.arc(80, 160, 40, Math.PI / 180 * 270, Math.PI / 180 * 180, false);

    ctx.stroke();
}

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 初始化画布的一些属性
    // 设置线的颜色
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#222';
    ctx.lineWidth = 4;

    // 在画布中画一个矩形区域
    // drawLine(ctx);
    // drawRect(ctx);
    // drawTriangle(ctx);
    drawArcs(ctx);
    // drawLineJoinStyle(ctx);
}

syRunDrawPathDemo();