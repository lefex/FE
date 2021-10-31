/**
 * @author 素燕（我有个公众号：素燕）
 * @description transform 的理解
 * scale, rotate, translate (move), and skew the context
 * https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-settransform-dev
 */

const run = function() {
    const parentEl = document.getElementById('canvas-wrap');
    const width = 1000;
    const height = 600;
    const canvasCount = 2000;
    const canvasSelector = 'sycanvas';
    const pageSelector = 'sypage';
    const isResetWidth = false;
    let totalMemoryCost = 0;
    const datas = [];
    for (let i = 0; i < canvasCount; i++) {
        datas.push({
            text: `第${i + 1}页，公众号素燕`,
            rendered: false
        })
    }

    const resetWidth = (entry: IntersectionObserverEntry) => {
        let pageIndex = entry.target.id.split('-')[1];
        let canvas = entry.target as HTMLCanvasElement;
        if (entry.intersectionRatio > 0) {
            console.log(`${entry.target.id}-出现了`);
            if (canvas.width === 0) {
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.scale(2, 2);
                ctx.fillStyle = '#fff';
                ctx.font = '40px Times';
                ctx.textBaseline = 'top';
                for (let i = 0; i < 1; i++) {
                    ctx.fillText(`${datas[+pageIndex-1].text}`, 0, 60 * i);
                }
            }
        }
        else {
            console.log(`${entry.target.id}-消失了`);
            canvas.width = 0;
            canvas.height = 0;
        }
    }

    const removeCanvasEl = (entry: IntersectionObserverEntry) => {
        let pageIndex = entry.target.id.split('-')[1];
        if (entry.intersectionRatio > 0) {
            console.log(`${entry.target.id}-出现了`);
            let pageEl = entry.target as HTMLElement;
            let canvasEl = document.getElementById(`${canvasSelector}-${pageIndex}`) as HTMLCanvasElement;
            if (!canvasEl) {
                canvasEl = document.createElement('canvas') as HTMLCanvasElement;
                canvasEl.style.position = 'absolute';
                canvasEl.style.left = '0';
                canvasEl.style.top = '0';
                canvasEl.width = width;
                canvasEl.height = height;
                canvasEl.style.width = `${width}px`;
                canvasEl.style.height = `${height}px`;
                canvasEl.id = `${canvasSelector}-${pageIndex}`;
                canvasEl.style.border = '2px solid #fff';
                pageEl.appendChild(canvasEl);

                let ctx = canvasEl.getContext('2d');
                if (!ctx) {
                    console.error('ctx is null');
                }
                else {
                    ctx.scale(2, 2);
                    ctx.fillStyle = '#fff';
                    ctx.font = '40px Times';
                    ctx.textBaseline = 'top';
                    for (let i = 0; i < 1; i++) {
                        ctx.fillText(`${datas[+pageIndex-1].text}`, 0, 60 * i);
                    }
                }
            }
        }
        else {
            console.log(`${entry.target.id}-消失了`);

            let canvasEl = document.getElementById(`${canvasSelector}-${pageIndex}`);
            if (canvasEl) {
                let parentEl = canvasEl.parentElement;
                parentEl.removeChild(canvasEl);
            }
        }
    }

    let intersectionObeserver = new IntersectionObserver(entries => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (isResetWidth) {
                resetWidth(entry);
            }
            else {
                removeCanvasEl(entry);
            }
        });
    }, {
        threshold: [0]
    });

    const createPageCanvas = () => {
        for(let i = 0; i < datas.length; i++) {
            let pageEl = document.createElement('div');
            pageEl.id = `${pageSelector}-${i + 1}`;
            pageEl.style.width = `${width}px`;
            pageEl.style.height = `${height}px`;
            pageEl.style.border = '2px solid green';
            pageEl.style.position = 'relative';
            pageEl.style.margin = '20px';
            parentEl.appendChild(pageEl);

            let canvasEl = document.createElement('canvas');
            canvasEl.width = 0;
            canvasEl.height = 0;
            canvasEl.style.position = 'absolute';
            canvasEl.style.left = '0';
            canvasEl.style.top = '0';
            canvasEl.style.width = `${width}px`;
            canvasEl.style.height = `${height}px`;
            canvasEl.id = `${canvasSelector}-${i + 1}`;
            canvasEl.style.border = '2px solid #fff';
            pageEl.appendChild(canvasEl);

            intersectionObeserver.observe(canvasEl);

            let memoryCost = canvasEl.width * canvasEl.height * 4;
            totalMemoryCost += memoryCost;
        }
    }

    const createPage = () => {
        for(let i = 0; i < datas.length; i++) {
            let pageEl = document.createElement('div');
            pageEl.id = `${pageSelector}-${i + 1}`;
            pageEl.style.width = `${width}px`;
            pageEl.style.height = `${height}px`;
            pageEl.style.border = '2px solid green';
            pageEl.style.position = 'relative';
            pageEl.style.margin = '20px';
            parentEl.appendChild(pageEl);

            intersectionObeserver.observe(pageEl);

            let memoryCost = width * height * 4;
            totalMemoryCost += memoryCost;
        }
    }

    if (isResetWidth) {
        createPageCanvas();
    }
    else {
        createPage();
    }

    console.log(`cost total memory ${ totalMemoryCost / 1024 / 1024 } MB`);
};
run();