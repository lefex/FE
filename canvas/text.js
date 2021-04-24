function contextForCanvasSelectorId(selector) {
    let canvas = document.getElementById(selector);
    if (!canvas) {
        throw Error(`The selector ${selector} invalid`);
    }
    let context = canvas.getContext('2d');
    if (!context) {
        throw Error(`You must use canvas id selector, eg: xxx <canvas id="xxx"></canvas>`)
    }
}

function drawText() {
    
}