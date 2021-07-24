const width = 600;
const height = 80;
let index = 0;

const draw = (font, text) => {
    let parentDom = document.getElementById('render-canvas-warp');

    let textCanvas = document.createElement('canvas');
    let ratio = window.devicePixelRatio;
    textCanvas.width = width * ratio;
    textCanvas.height = height * ratio;
    textCanvas.style.width = `${width}px`;
    textCanvas.style.height = `${height}px`;

    let childCtx = textCanvas.getContext('2d') as CanvasRenderingContext2D;
    childCtx.fillStyle = '#222';
    childCtx.font = font;
    if (childCtx.font === '10px sans-serif') {
        console.log('字体渲染错误：', text, childCtx.font);
    }
    childCtx.textBaseline = 'top';
    childCtx.textAlign = 'left';
    childCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    childCtx.fillText(text, 0, index * height + 20);

    parentDom.appendChild(textCanvas);
}

// 怀疑是异步字体没加载完
setTimeout(() => {
    // 可以正常渲染
    draw('40px a5a5099ebd64783e09122bbb0050001', '第一集《自然的馈赠》');
    // 不能正常渲染
    draw('40px 08c71f492b160b4e767fcf980040001', '系列晶闸管触发器在可逆直流稳压电源的应用');
}, 2000);