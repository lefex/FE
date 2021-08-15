/**
 * @author 素燕（我有个公众号：素燕）
 * @description 三次次贝塞尔曲线
 */

import { initCanvas } from './share';

/**
 * cubic: 立方体，三次
 * curves：曲线
 * bezier：贝塞尔曲线
 * quadratic：二次的
 * quadratic bezier：二次贝塞尔曲线，只有一个控制点
 * cubic bezier：三次贝塞尔曲线，有两个控制点
 */

function syRun() {
    // 画一个圆形坐标点
    const drawPoint = (p, ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.textBaseline = 'bottom';
        ctx.fillText(`  ${p.text}(${p.x},${p.y})`, p.x, p.y);
        ctx.fill();
    }

    const drawBezierCurveTo = (ctx: CanvasRenderingContext2D, startP, p1, p2, endP) => {
        ctx.beginPath();

        // 画各个坐标点
        drawPoint(startP, ctx);
        drawPoint(p1, ctx);
        drawPoint(p2, ctx);
        drawPoint(endP, ctx);

        // 连接3个点
        ctx.beginPath();
        ctx.moveTo(startP.x, startP.y);
        ctx.lineTo(p1.x, p1.y);
        // ctx.moveTo(endP.x, endP.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(endP.x, endP.y);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // 使用 arcTo 画弧度
        ctx.beginPath();
        ctx.moveTo(startP.x, startP.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, endP.x, endP.y);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }

    const randomTo = (max: number) => {
        return ((Math.random() * 100) % 100 * (max / 100)).toFixed(0);
    }

    const drawBezierCurveAnimated = (ctx: CanvasRenderingContext2D) => {
        let startP = { x: 80, y: 80, text: 'start' };
        let controlP1 = { x: 240, y: 120, text: 'controlp1' };
        let controlP2 = { x: 280, y: 200, text: 'controlp2' };
        let endP = { x: 120, y: 280, text: 'end' };
        setInterval(() => {
            // 获取 0 到 300 的随机数
            let y1 = randomTo(300);
            let x1 = randomTo(300);
            controlP1.y = +y1;
            // controlP1.x = +x1;

            // let y2 = randomTo(300);
            // let x2 = randomTo(300);
            // controlP2.y = +y2;
            // controlP2.x = +x2;
            // endP.y = +y;
            // endP.x = +x;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            drawBezierCurveTo(ctx, startP, controlP1, controlP2, endP);
        }, 2000000);
        drawBezierCurveTo(ctx, startP, controlP1, controlP2, endP);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 初始化画布的一些属性
    // 设置线的颜色
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#222';
    ctx.lineWidth = 2;

    drawBezierCurveAnimated(ctx);
}

syRun();