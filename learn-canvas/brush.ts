/**
 * @author wangsuyan
 * @description 画图面板
 */

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

export function addCanvasEvent(canvasId: string) {
    const myPics = document.getElementById(canvasId) as HTMLCanvasElement;
    const context = myPics.getContext('2d');

    console.log('draw', myPics);

    // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

    // Add the event listeners for mousedown, mousemove, and mouseup
    myPics.addEventListener('mousedown', e => {
        console.log('down =', e);
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    myPics.addEventListener('mousemove', e => {
        if (isDrawing === true) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    window.addEventListener('mouseup', e => {
        if (isDrawing === true) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });
}

function drawLine(context: CanvasRenderingContext2D, x1, y1, x2, y2) {
  const m = context.getTransform();
  context.save();
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 2;
  context.moveTo(x1 - m.e, y1 - m.f);
  context.lineTo(x2 - m.e, y2 - m.f);
  context.stroke();
  context.closePath();
  context.restore();
}

