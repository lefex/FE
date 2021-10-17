/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用 JavaScript 创建 Canvas
 */

import {
    BgColor,
    TextColor,
    GridLineColor,
    AxisLineColor,
    GridSize,
    ContentColor,
    StrokeColor
} from './constant';

export interface SYPoint {
    x: number;
    y: number;
}

export enum SYAxisPos {
    TopLeft = 'topLeft',
    Center = 'center'
}

export function initCanvas(originAxis: SYAxisPos = SYAxisPos.TopLeft): CanvasRenderingContext2D {
    const pageWidth = document.documentElement.clientWidth;
    const pageHeight = document.documentElement.clientHeight;
    const parentId = 'canvas-warp';
    const canvasWidth = pageWidth;
    const canvasHeight = pageHeight;
    const gridSpace = GridSize;
    const lineColor = GridLineColor;
    const color = AxisLineColor;
    const xCount = Math.ceil(canvasWidth / gridSpace);
    const yCount = Math.ceil(canvasHeight / gridSpace);
    const centerX = Math.floor(xCount / 2) * gridSpace;
    const centerY = Math.floor(yCount / 2) * gridSpace;
    const dprValue = window.devicePixelRatio || 1;

    const createACanvas = () => {
        let canvas = document.createElement('canvas') as HTMLCanvasElement;
        // 设置画布的宽度
        canvas.width = canvasWidth * dprValue;
        // 设置画布的高度
        canvas.height = canvasHeight * dprValue;
        // 设置画布的 CSS 样式
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        canvas.style.backgroundColor = BgColor;
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
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;

        // 绘制 x 轴的线
        for (let i = 0; i < yCount; i++) {
            ctx.beginPath();
            ctx.moveTo(0, gridSpace * i);
            ctx.lineTo(canvasWidth, gridSpace * i);
            ctx.stroke();
        }

        // 绘制 y 轴的线
        for (let i = 0; i < xCount; i++) {
            ctx.beginPath();
            ctx.moveTo(gridSpace * i, 0);
            ctx.lineTo(gridSpace * i, canvasHeight);
            ctx.stroke();
        }
    };

    const drawLeftTopX = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(canvasWidth, 4);
        ctx.stroke();
    }

    const drawLeftTopY = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(4, 0);
        ctx.lineTo(4, canvasHeight);
        ctx.stroke();
    }

    const drawTopLeftValue = (ctx: CanvasRenderingContext2D) => {
        let xCount = canvasHeight / gridSpace;
        let yCount = canvasWidth / gridSpace;

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.font = '12px';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = TextColor;

        drawRedPoint({
            x: 6,
            y: 8
        }, ctx);

        for (let i = 1; i < xCount; i++) {
            ctx.fillText(`${i * gridSpace}`, 10, gridSpace * i);
        }

        for (let i = 1; i < yCount; i++) {
            ctx.fillText(`${i * gridSpace}`, gridSpace * i, 10);
        }
    }

    const drawCenterX = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvasWidth, centerY);
        ctx.stroke();
    }

    const drawCenterY = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvasHeight);
        ctx.stroke();
    }

    const drawCenterValue = (ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.font = '12px Times';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillStyle = TextColor;

        drawRedPoint({
            x: centerX,
            y: centerY
        }, ctx);

        // 绘制 x 轴的线
        for (let i = 1; i < xCount / 2; i++) {
            ctx.fillText(`${i * gridSpace}`, centerX + i * gridSpace - 8, centerY + 4);
            ctx.fillText(`-${i * gridSpace}`, centerX - i * gridSpace - 8, centerY + 4);
        }

        // 绘制 y 轴的线
        for (let i = 1; i < yCount; i++) {
            ctx.fillText(`${i * gridSpace}`, centerX + 4, centerY + i * gridSpace - 4);
            ctx.fillText(`-${i * gridSpace}`, centerX + 4, centerY - i * gridSpace + 4);
        }
    }

    // 1. 创建 canvas
    let canvas = createACanvas();

    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.setTransform(dprValue, 0, 0, dprValue, 0, 0);

    // 2. 画网格
    drawGrid(ctx);
    if (originAxis === SYAxisPos.TopLeft) {
        // 画 X 轴线
        drawLeftTopX(ctx);
        // 画 Y 轴线
        drawLeftTopY(ctx);
        // 画坐标上的值
        drawTopLeftValue(ctx);
    }
    else {
        drawCenterX(ctx);
        drawCenterY(ctx);
        drawCenterValue(ctx);
    }

    // 3. 把 canvas 添加到 DOM 节点中
    let parentDom = document.getElementById(parentId);
    parentDom.appendChild(canvas);

    // 4.创建真正要绘图的 canvas
    let drawCanvas = createDrawerCanvas();
    let drawCtx = drawCanvas.getContext('2d') as CanvasRenderingContext2D;
    drawCtx.fillStyle = ContentColor;
    drawCtx.strokeStyle = StrokeColor;
    drawCtx.lineWidth = 4;
    drawCtx.setTransform(dprValue, 0, 0, dprValue, 0, 0);
    if (originAxis === SYAxisPos.Center) {
        drawCtx.translate(centerX, centerY);
    }
    parentDom.appendChild(drawCanvas);

    // 4. 在画布中画一个矩形区域
    return drawCtx;
}

export const drawRedPoint = (p: SYPoint, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

export const drawPoint = (p, ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
    ctx.textBaseline = 'bottom';
    ctx.fillText(`  ${p.text}(${p.x},${p.y})`, p.x, p.y);
    ctx.fill();
}