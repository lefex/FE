/**
 * @author 素燕（我有个公众号：素燕）
 * @description transform 的理解
 * scale, rotate, translate (move), and skew the context
 * https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-settransform-dev
 */

import { initCanvas } from './share';

function syRunDemo() {
    const origin = {
        x: 360,
        y: 280
    };
    const lineWidth = 240;
    const radius = 6;

    const drawAxis = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';

        ctx.beginPath();
        ctx.moveTo(origin.x - lineWidth, origin.y);
        ctx.lineTo(origin.x + lineWidth, origin.y);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y - lineWidth);
        ctx.lineTo(origin.x, origin.y + lineWidth);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(origin.x, origin.y, radius, 0, Math.PI / 180 * 360);
        ctx.fill();
    }

    const drawSkew = (ctx: CanvasRenderingContext2D) => {
        ctx.save();
        ctx.strokeStyle = '#1c4587';
        // ctx.translate(origin.x, origin.y);
        ctx.setTransform(4, .1, .1, 2, 1, 2);
        let width = 120;
        let height = 80;
        // ctx.strokeRect(-width - 40, -height - 40, width, height);
        ctx.fillRect( 40, 40, width, height);
        ctx.restore();
    }

    const move = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        let matric = ctx.getTransform();
        console.log(`init matric = ${matric}`);

        ctx.save();
        ctx.translate(origin.x, origin.y);
        matric = ctx.getTransform();
        console.log(`after translate matric = ${matric}`);

        ctx.strokeRect(40, 80, 120, 80);

        /**
         * 平移，相当于修改 e、f 的值，初始矩阵
         * | a  c  e |
         * | b  d  f |
         * | 0  0  1 |
         * x' = ax + cy + e
         * y' = bx + dy + f
         *
         * | 1  0  0 |
         * | 0  1  0 |
         * | 0  0  1 |
         *
         * | 1  0  40 |
         * | 0  1  20 |
         * | 0  0  1 |
         *
         * x' = 1*x + 0*y + 40 = x + 40
         * y' = 0*x + 1*y + 20 = y + 20
         *
         */
        ctx.transform(1, 0, 0, 1, x, y);
        matric = ctx.getTransform();
        console.log(`after move matric = ${matric}`);
        ctx.fillRect(40, 80, 120, 80);

        ctx.restore();
    }

    const scale = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        let matric = ctx.getTransform();
        console.log(`init matric = ${matric}`);

        ctx.save();
        ctx.translate(origin.x, origin.y);
        matric = ctx.getTransform();
        console.log(`after translate matric = ${matric}`);

        ctx.strokeRect(-180, 80, 120, 80);

        /**
         * 平移，相当于修改 e、f 的值，初始矩阵
         * | a  c  e |
         * | b  d  f |
         * | 0  0  1 |
         * x' = ax + cy + e
         * y' = bx + dy + f
         *
         * 初始矩阵：
         * | 1  0  0 |
         * | 0  1  0 |
         * | 0  0  1 |
         *
         * 缩放后的矩阵
         * | 4  0  0 |
         * | 0  2  0 |
         * | 0  0  1 |
         *
         * x' = 4*x + 0*y + 0 = 4x
         * y' = 0*x + 2*y + 0 = 2y
         *
         */
        ctx.transform(x, 0, 0, y, 0, 0);
        matric = ctx.getTransform();
        console.log(`after scale matric = ${matric}`);
        ctx.fillRect(-180, 80, 120, 80);

        ctx.restore();
    }

    const rotate = (ctx: CanvasRenderingContext2D, angle: number) => {
        let matric = ctx.getTransform();
        console.log(`init matric = ${matric}`);

        ctx.save();
        ctx.translate(origin.x, origin.y);
        matric = ctx.getTransform();
        console.log(`after translate matric = ${matric}`);

        ctx.strokeRect(-180, -200, 120, 80);

        /**
         * 平移，相当于修改 e、f 的值，初始矩阵
         * | a  c  e |
         * | b  d  f |
         * | 0  0  1 |
         * x' = ax + cy + e
         * y' = bx + dy + f
         *
         * 初始矩阵：
         * | 1  0  0 |
         * | 0  1  0 |
         * | 0  0  1 |
         *
         * 旋转后的矩阵
         * | cosθ  -sinθ  0 |
         * | sinθ   cosθ  0 |
         * |  0       0   1 |
         *
         * x' = cos45*x + -sin45*y + 0 = cos45*x - sin45*y
         * y' = sin45*x + cos45*y + 0 = sin45*x + cos45*y
         *
         * 沿X轴旋转后的矩阵
         * | cosθ  -sinθ  0 |
         * | sinθ   cosθ  0 |
         * |  0       0   1 |
         *
         * x' = cos45*x + -sin45*y + 0 = cos45*x - sin45*y
         * y' = sin45*x + cos45*y + 0 = sin45*x + cos45*y
         *
         */
        ctx.transform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
        matric = ctx.getTransform();
        console.log(`after scale matric = ${matric}`);
        ctx.strokeRect(-180, -200, 120, 80);

        ctx.restore();
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 画一个坐标系
    drawAxis(ctx);

    move(ctx, 20, 10);
    scale(ctx, 0.8, 0.8);
    rotate(ctx, 1);

    // drawSkew(ctx);

}

syRunDemo();