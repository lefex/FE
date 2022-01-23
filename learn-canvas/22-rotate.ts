/**
 * @author 素燕
 * @description 旋转
 */

 (function() {
    // safari 画布有最大的宽度限制
    const scale = 1;
    const parentEl = document.getElementById('canvas-wrap');

    const canvasEl = document.createElement('canvas');
    canvasEl.style.border = '1px solid red';
    parentEl.appendChild(canvasEl);

    const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D;
    ctx.setTransform(2, 0, 0, 2, 0, 0);

    let angle = 90;

    let img = new Image();
    // img.src = 'content.jpeg';
    img.src = 'rotate90.jpeg';
    img.onload = function () {
        /**
         * drawImage(image: CanvasImageSource,
         * sx: number, sy: number, sw: number, sh: number,
         * dx: number, dy: number, dw: number, dh: number): void;
         */
        let sw = img.width * scale;
        let sh = img.height * scale;

        canvasEl.width = sh;
        canvasEl.height = sw;
        // 宽高乘以一个比例，即可放大缩小图片
        // x轴旋转180度
        let orginPointX = sw / 2;
        // orginPointX = 0;
        let orginPointY = sh / 2;
        // orginPointY = 0;
        ctx.translate(orginPointX, orginPointY);
        // ctx.rotate(Math.PI);
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
         * 沿Z轴旋转后的矩阵
         * | cosθ  -sinθ  0 |
         * | sinθ   cosθ  0 |
         * |  0       0   1 |
         *
         * x' = cos45*x + -sin45*y + 0 = cos45*x - sin45*y
         * y' = sin45*x + cos45*y + 0 = sin45*x + cos45*y
         *
         * 沿X轴旋转后的矩阵
         * | cosθ  0  0 |
         * | sinθ   1  0 |
         * |  0       0   1 |
         *
         * x' = cos45*x + 0 + 0 = cos45*x
         * y' = sin45*x + cos45*y + 0 = sin45*x + cos45*y
         * * | 1  0  0 |
         * | 0  1  0 |
         * | 0  0  1 |
         * 沿X轴旋转180度
         * | 1  0  0 |
         * |-1  0  0 |
         * | 0  0  1 |
         */
        // x轴旋转180度
        // ctx.transform(1, 0, 0, -1, 0, 0);
        // y轴旋转180度
        // ctx.transform(-1, 0, 0, 1, 0, 0);
        // x轴旋转180度、y轴旋转180度
        // ctx.transform(-1, 0, 0, -1, 0, 0);
        let timer = setInterval(() => {
            ctx.clearRect(-orginPointX+2, -orginPointY+2, sw - 2, sh -2);
            ctx.rotate(angle * Math.PI / 180);
            // 轴旋转会涉及到坐标的替换
            ctx.drawImage(img, 0, 0, sw, sh, -orginPointX -(sh - sw)/2, -orginPointY-(sh - sw)/2, sw, sh);
            angle += 1;
            if (angle > 360) {
                angle = 0;
            }
            clearInterval(timer);
        }, 100)
        // ctx.drawImage(img, 0, 0, sw, sh );
    }
}());