/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用 JavaScript 创建 Canvas
 */

export function initCanvas(): CanvasRenderingContext2D {
    const parentId = 'canvas-warp';
    const canvasWidth = 400;
    const canvasHeight = 400;
    const gridSpace = 40;
    const lineColor = '#cec';
    const edge = 20;
    const color = 'blue';
    let dprValue = window.devicePixelRatio || 1;

    const createACanvas = () => {
        let canvas = document.createElement('canvas') as HTMLCanvasElement;
        // 设置画布的宽度
        canvas.width = canvasWidth * dprValue;
        // 设置画布的高度
        canvas.height = canvasHeight * dprValue;
        // 设置画布的 CSS 样式
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        canvas.style.backgroundColor = '#fff';
        return canvas;
    }

    const createDrawerCanvas = () => {
        let canvas = document.createElement('canvas') as HTMLCanvasElement;
        // 设置画布的宽度
        canvas.width = canvasWidth * dprValue;
        // 设置画布的高度
        canvas.height = canvasHeight * dprValue;
        // 设置画布的 CSS 样式
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        return canvas;
    }

    // 绘制网格
    const drawGrid = (ctx: CanvasRenderingContext2D) => {
        let xCount = canvasHeight / gridSpace;
        let yCount = canvasWidth / gridSpace;

        const drawValue = (i, isX) => {
            ctx.font = '12px';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#222';
            if (isX) {
                ctx.fillText(`${i * gridSpace}`, 0, gridSpace * i);
            }
            else {
                ctx.fillText(`${i * gridSpace}`, gridSpace * i, 0);
            }
        }

        // 绘制 x 轴的线
        for (let i = 0; i < xCount; i++) {
            ctx.beginPath();
            ctx.moveTo(0, gridSpace * i);
            ctx.lineTo(canvasWidth, gridSpace * i);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.stroke();
            drawValue(i, true);

        }

        // 绘制 y 轴的线
        for (let i = 0; i < yCount; i++) {
            ctx.beginPath();
            ctx.moveTo(gridSpace * i, 0);
            ctx.lineTo(gridSpace * i, canvasHeight);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.stroke();

            drawValue(i, false);
        }
    };

    const drawX = (ctx: CanvasRenderingContext2D) => {
        let y = edge / 2;
        ctx.beginPath();
        ctx.moveTo(edge / 2, y);
        ctx.lineTo(canvasWidth - edge, y);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.moveTo(canvasWidth - edge / 2 - edge, y / 2);
        ctx.lineTo(canvasWidth - edge, y);
        ctx.lineTo(canvasWidth - edge / 2 - edge, y / 2 + edge / 2);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.font = '16px Times';
        ctx.fillText('X', canvasWidth - edge + 2, y / 2);
    }

    const drawY = (ctx: CanvasRenderingContext2D) => {
        let xLeft = edge / 2;
        ctx.beginPath();
        ctx.moveTo(xLeft, xLeft);
        // 画线
        ctx.lineTo(xLeft, canvasHeight - edge);

        // 画箭头
        ctx.moveTo(xLeft / 2, canvasHeight - edge / 2 - edge);
        ctx.lineTo(xLeft, canvasHeight - edge);
        ctx.lineTo(xLeft + xLeft / 2, canvasHeight - edge / 2 - edge);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.font = '16px Times';
        ctx.fillText('Y', xLeft / 2, canvasHeight - edge + 2);
    }

    // 1. 创建 canvas
    let canvas = createACanvas();

    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.setTransform(dprValue, 0, 0, dprValue, 0, 0);

    // 2. 画网格
    drawGrid(ctx);
    // 画 X 轴线
    drawX(ctx);
    // 画 Y 轴线
    drawY(ctx);

    // 3. 把 canvas 添加到 DOM 节点中
    let parentDom = document.getElementById(parentId);
    parentDom.appendChild(canvas);

    // 4.创建真正要绘图的 canvas
    let drawCanvas = createDrawerCanvas();
    let drawCtx = drawCanvas.getContext('2d') as CanvasRenderingContext2D;
    drawCtx.setTransform(dprValue, 0, 0, dprValue, 0, 0);
    parentDom.appendChild(drawCanvas);

    // 4. 在画布中画一个矩形区域
    return drawCtx;
}

export const drawPoint = (p, ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
    ctx.textBaseline = 'bottom';
    ctx.fillText(`  ${p.text}(${p.x},${p.y})`, p.x, p.y);
    ctx.fill();
}