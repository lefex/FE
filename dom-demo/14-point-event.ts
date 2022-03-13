/**
 * @author 素燕（我有个公众号：素燕）
 * @description touch 事件
 * https://javascript.info/pointer-events
 */

let lastPoint = {
    x: 0,
    y: 0
}

function handleStart(evt: PointerEvent) {
    // evt.preventDefault();
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = el.getContext("2d") as CanvasRenderingContext2D;

    console.log('point start', evt.offsetY);

    lastPoint = {
        x: evt.offsetX,
        y: evt.offsetY
    };

    ctx.beginPath();
    ctx.arc(evt.offsetX, evt.offsetY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = '#222';
    ctx.fill();
}

function handleMove(evt: PointerEvent) {
    console.log('point move', evt.offsetY);
    // evt.preventDefault();
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = el.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#222';
    ctx.stroke();

    lastPoint = {
        x: evt.offsetX,
        y: evt.offsetY
    };
}

function handleEnd(evt: PointerEvent) {
    // evt.preventDefault();
    console.log('point stop', evt.offsetY);
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = el.getContext("2d");

    ctx.lineWidth = 4;
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.fillRect(evt.offsetX - 4, evt.offsetY - 4, 8, 8);  // and a square at the end
}

function startup() {
    const width = 320;
    const height = 1600;
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    const dpr = window.devicePixelRatio;
    el.width = width * dpr;
    el.height = height * dpr;
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    let ctx = el.getContext("2d") as CanvasRenderingContext2D;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    el.addEventListener('pointerdown', handleStart, false);
    el.addEventListener('pointerup', handleEnd, false);
    el.addEventListener('pointermove', handleMove, false);

    console.log('canvas pageY', el.offsetTop)
}

startup();