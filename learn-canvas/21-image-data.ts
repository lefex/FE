/**
 * @author 素燕（我有个公众号：素燕）
 * @description data 值
 */

 (function() {
    // safari 画布有最大的宽度限制
    const parentEl = document.getElementById('canvas-wrap');

    const canvasEl = document.createElement('canvas');
    canvasEl.width = 32;
    canvasEl.height = 32;
    canvasEl.style.border = '1px solid red';
    parentEl.appendChild(canvasEl);

    const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D;
    ctx.textBaseline = 'top';
    ctx.font = `32px sans-serif`;
    ctx.fillStyle = 'rgba(12, 200, 100, 1)';
    ctx.fillText('S', 0, 0);
    ctx.fillStyle = 'rgba(90, 10, 180, 1)';
    ctx.fillText('Y', 0, 0);

    let data = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);
    console.log('data = ', data);
}());