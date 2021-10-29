/**
 * @author 素燕（我有个公众号：素燕）
 * @description transform 的理解
 * scale, rotate, translate (move), and skew the context
 * https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-settransform-dev
 */

const run = function() {
    const parentEl = document.getElementById('canvas-wrap');
    const width = 800;
    const height = 500;
    const canvasCount = 500;
    const canvasSelector = 'sy-canvas';

    const createCanvas = () => {
        for(let i = 0; i < canvasCount; i++) {
            let canvasEl = document.createElement('canvas');
            canvasEl.width = width;
            canvasEl.height = height;
            canvasEl.id = `${canvasSelector}-${i}`;
            canvasEl.style.border = '1px solid #fff';
            canvasEl.style.margin = '20px';
            const draw = () => {
                let ctx = canvasEl.getContext('2d');
                if (!ctx) {
                    console.error('ctx is null', i);
                    // clearn memory
                    let removeCount = 20;
                    for(let j = 0; j < removeCount; j++) {
                        let renderedCanvas = document.getElementById(`${canvasSelector}-${j}`) as HTMLCanvasElement;
                        console.log(renderedCanvas);
                        // let renderedCtx = renderedCanvas.getContext('2d');
                        // renderedCtx.clearRect(0, 0, renderedCanvas.width, renderedCanvas.height);
                        if (renderedCanvas) {
                            renderedCanvas.parentNode.removeChild(renderedCanvas);
                        }
                    }
                    let removeCanvas = document.getElementById(`${canvasSelector}-${removeCount + 2}`) as HTMLCanvasElement;
                    if (removeCanvas) {
                        ctx = removeCanvas.getContext('2d');
                        console.log('after remove', ctx);
                    }
                    return false;
                }
                else {
                    ctx.fillStyle = '#fff';
                    ctx.font = '60px Times';
                    ctx.fillText(`${i}`, 20, 60);
                    return true;
                }
            }
            let drawed = draw();
            if (!drawed) {
                break;
            }
            parentEl.appendChild(canvasEl);
        }
    }

    createCanvas();
};
run();