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

window.url1 = document.querySelectorAll('canvas')[0].toDataURL('"image/png"')
var alink = document.createElement("a");alink.href = window.url1;alink.download = "wximg1.png";alink.click();
window.url2 = document.querySelectorAll('canvas')[1].toDataURL('"image/png"')
var alink = document.createElement("a");alink.href = window.url2;alink.download = "wximg2.png";alink.click();
