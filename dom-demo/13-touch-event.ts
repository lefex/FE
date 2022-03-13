/**
 * @author 素燕（我有个公众号：素燕）
 * @description touch 事件
 */

const ongoingTouches = [];
const width = 350;
const height = 1600;

function log(msg) {
    let p = document.getElementById('log');
    p.innerHTML = msg + "\n" + p.innerHTML;
}

function colorForTouch(touch) {
    let r = touch.identifier % 16;
    let g = Math.floor(touch.identifier / 3) % 16;
    let b = Math.floor(touch.identifier / 7) % 16;
    r = r.toString(16); // make it a hex digit
    g = g.toString(16); // make it a hex digit
    b = b.toString(16); // make it a hex digit
    let color = "#" + r + g + b;
    return color;
}

function copyTouch({ identifier, pageX, pageY }) {
    return { identifier, pageX, pageY };
}

function ongoingTouchIndexById(idToFind) {
    for (let i = 0; i < ongoingTouches.length; i++) {
        let id = ongoingTouches[i].identifier;

        if (id == idToFind) {
            return i;
        }
    }
    return -1;    // not found
}

function handleStart(evt: TouchEvent) {
    evt.preventDefault();
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = el.getContext("2d") as CanvasRenderingContext2D;

    // 有多少手指，就会有多少个点
    let touches = evt.changedTouches;

    for (let i = 0; i < touches.length; i++) {
        console.log("touchstart:" + touches[i].pageY);
        ongoingTouches.push(copyTouch(touches[i]));

        let color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function handleMove(evt) {
    evt.preventDefault();
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = el.getContext("2d");
    let touches = evt.changedTouches;

    for (let i = 0; i < touches.length; i++) {
        let color = colorForTouch(touches[i]);
        let idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.lineWidth = 4;
            ctx.strokeStyle = color;
            ctx.stroke();

            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
        } else {
            console.log("can't figure out which touch to continue");
        }
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    log("touchend");
    let el = document.getElementById("canvas");
    let ctx = el.getContext("2d");
    let touches = evt.changedTouches;

    for (let i = 0; i < touches.length; i++) {
        let color = colorForTouch(touches[i]);
        let idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            ctx.lineWidth = 4;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
            ongoingTouches.splice(idx, 1);  // remove it; we're done
        } else {
            console.log("can't figure out which touch to end");
        }
    }
}

function handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
    let touches = evt.changedTouches;

    for (let i = 0; i < touches.length; i++) {
        let idx = ongoingTouchIndexById(touches[i].identifier);
        ongoingTouches.splice(idx, 1);  // remove it; we're done
    }
}

function startup() {
    let el = document.getElementById("canvas") as HTMLCanvasElement;
    const dpr = window.devicePixelRatio;
    el.width = width * dpr;
    el.height = height * dpr;
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    let ctx = el.getContext("2d") as CanvasRenderingContext2D;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);

    console.log('canvas pageY', el.offsetTop)
}

startup();