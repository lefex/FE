/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用 JavaScript 创建 Canvas
 */

function toDraw() {
const parentId = 'canvas-warp';
const canvasWidth = 400;
const canvasHeight = 400;
const gridSpace = 40;
const lineColor = '#cec';
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
    canvas.style.marginLeft = '40px';
    canvas.style.marginTop = '40px';
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

    for (let i = 0; i < xCount; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gridSpace * i);
        ctx.lineTo(canvasWidth, gridSpace * i);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.stroke();
        drawValue(i, true);

    }

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

const drawReact = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(40, 40, 120, 80);
}

let canvas = createACanvas();

let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.setTransform(dprValue, 0, 0, dprValue, 0, 0);

drawGrid(ctx);

let parentDom = document.getElementById(parentId);
parentDom.appendChild(canvas);

drawReact(ctx);
}

toDraw();