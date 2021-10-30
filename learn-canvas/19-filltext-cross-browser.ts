/**
 * @author 素燕
 * @description transform 的理解
 * 不同浏览器 filltext 对齐方式不一样
 * https://pqina.nl/blog/cross-browser-alignment-of-the-canvas-filltext-draw-call/
 */

(function() {
    console.log('begin draw!!');
    const parentEl = document.getElementById('canvas-wrap');
    const text = 'F';
    const width = 32;
    const height = 32;

    const canvasEl = document.createElement('canvas');
    canvasEl.width = width;
    canvasEl.height = height;
    canvasEl.style.border = '1px solid red';
    parentEl.appendChild(canvasEl);

    const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D;
    ctx.font = `100px sans-serif`;
    ctx.fillStyle = 'rgba(12, 200, 100, 1)';
    ctx.textBaseline = 'top';
    ctx.fillText(text, 0, 0);

    const data = ctx.getImageData(0, 0, width, height).data;
    let p;
    // 4096 = 32 * 32 * 4
    console.log('image data length = ', data.length, data.length === width * height * 4);
    console.log('image data', data);
    let from = data.length - width*4;

    for (p = from; p < data.length; p += 4) {
        if (data[p]) {
            console.log('xp === ', p);
            break;
        }
    }

    const x = (p - from) / 4;

    from = (width) - 1 * 4;
    for (p = from; p < data.length; p += 4) {
        if (data[p]) {
            console.log('yp === ', p);
            break;
        }
    }

    const y = (p - from) / (width * 4);

    console.log(`x=${x}, y=${y}`);

    const fontSize = 182;
    const xOffset = x * (fontSize * 0.01);
    const yOffset = y * (fontSize * 0.01);
    console.log(`xOffset=${xOffset}, yOffset=${yOffset}`);

    const textCanvas = document.createElement('canvas');
    textCanvas.width = 800;
    textCanvas.height = 100;
    textCanvas.style.border = '1px solid red';
    let textCtx = textCanvas.getContext('2d') as CanvasRenderingContext2D;
    textCtx.font = `${fontSize}px sans-serif`;
    textCtx.fillStyle = '#fff';
    textCtx.textBaseline = 'top';
    textCtx.fillText('三国演义', 20 - xOffset, 20 - yOffset);

    parentEl.appendChild(textCanvas);
}());