(function() {
    // safari 画布有最大的宽度限制
    console.log('begin draw!!');
    const parentEl = document.getElementById('canvas-wrap');
    const text = '祖国你好！';
    /**
     *
    #if PLATFORM(IOS_FAMILY)
      return 4096 * 4096;
    #else
      return 16384 * 16384;
     */
    console.log('max width 16384/2', 16384 / 2);
    const width = 16384;
    const height = 16384;

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
}());