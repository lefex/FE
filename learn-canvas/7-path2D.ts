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
    const drawUsePath2D = (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath();
        ctx.moveTo(80, 80);
        // Path2D 可以缓存并记录 path
        let pathRect = new Path2D();
        pathRect.rect(80, 80, 120, 80);

        let pathArc = new Path2D();
        pathArc.arc(80, 120, 80, 0, 2);
        pathRect.addPath(pathArc);

        ctx.stroke(pathRect);
    }


    // 1. 创建 canvas
    let ctx = initCanvas();

    // 初始化画布的一些属性
    // 设置线的颜色
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#222';
    ctx.lineWidth = 2;

    drawUsePath2D(ctx);
}

syRun();