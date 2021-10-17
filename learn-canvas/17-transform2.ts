/**
 * @author 素燕（我有个公众号：素燕）
 * @description transform 的理解
 * scale, rotate, translate (move), and skew the context
 * https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-settransform-dev
 */

import { initCanvas, SYAxisPos } from './share';
import { GridSize, TextColor } from './constant';

function syRunDemo() {
    const drawSkew = (ctx: CanvasRenderingContext2D) => {
        ctx.save();
        ctx.strokeStyle = '#1c4587';
        // ctx.translate(origin.x, origin.y);
        ctx.setTransform(4, .1, .1, 2, 1, 2);
        let width = 120;
        let height = 80;
        // ctx.strokeRect(-width - 40, -height - 40, width, height);
        ctx.fillRect(40, 40, width, height);
        ctx.restore();
    }

    const move = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.save();

        const drawArrow = (dash: number[]) => {
            ctx.beginPath();
            ctx.lineJoin = 'round';
            ctx.setLineDash(dash);
            ctx.moveTo(0, 0);
            ctx.lineTo(GridSize * 3, GridSize * 3);
            ctx.lineTo(3 * GridSize - GridSize * 0.5, 3*GridSize);
            ctx.moveTo(GridSize * 3, GridSize * 3);
            ctx.lineTo(3 * GridSize, 3*GridSize - GridSize * 0.5);
            ctx.stroke();
            ctx.closePath();
        }

        drawArrow([8]);

        ctx.fillStyle = TextColor;
        ctx.font = '30px Times';
        ctx.fillText('Translate 位置移动', GridSize * 3, GridSize);

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
        drawArrow([0]);

        ctx.restore();
    }

    const scale = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.save();
        ctx.fillStyle = TextColor;
        ctx.font = '30px Times';
        ctx.fillText('Scale 缩放', -GridSize * 3, GridSize);

        ctx.restore();
        ctx.save();
        ctx.globalAlpha = 0.2;
        ctx.fillRect(-GridSize*6, GridSize, GridSize*3, GridSize*2);

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
        // 等价于 scale
        // ctx.scale(x, y)
        ctx.globalAlpha = 1;
        // x，y，width，height 均按照缩放比例进行缩放
        /**
         * x = x * scaleX
         * y = y * scaleY
         * width = width * scaleX
         * height = height * scaleY
         */
        ctx.fillRect(-GridSize*6, GridSize, GridSize*3, GridSize*2);

        ctx.restore();
    }

    const rotate = (ctx: CanvasRenderingContext2D, angle: number) => {
        ctx.save();
        ctx.fillStyle = TextColor;
        ctx.font = '30px Times';
        ctx.fillText('Rotate旋转', GridSize * 3, -0.5*GridSize);

        ctx.restore();
        ctx.save();

        ctx.save();

        const drawArrow = (dash: number[]) => {
            ctx.beginPath();
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#32C5FF'
            ctx.setLineDash(dash);
            ctx.moveTo(0, 0);
            ctx.lineTo(GridSize * 3, -GridSize * 3);
            ctx.lineTo(3 * GridSize - GridSize * 0.5, -3*GridSize);
            ctx.moveTo(GridSize * 3, -GridSize * 3);
            ctx.lineTo(3 * GridSize, -3*GridSize + GridSize * 0.5);
            ctx.stroke();
            ctx.closePath();
        }

        drawArrow([8]);

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
         * | cosθ  -sinθ  0 |
         * | sinθ   cosθ  0 |
         * |  0       0   1 |
         *
         * x' = cos45*x + -sin45*y + 0 = cos45*x - sin45*y
         * y' = sin45*x + cos45*y + 0 = sin45*x + cos45*y
         *
         */
        ctx.transform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
        drawArrow([0]);

        ctx.restore();
    }

    // 1. 创建 canvas
    let ctx = initCanvas(SYAxisPos.Center);

    move(ctx, GridSize*2, GridSize);
    scale(ctx, 0.5, 2);
    rotate(ctx, 0.4);

    // drawSkew(ctx);

}

syRunDemo();