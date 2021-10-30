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
    let totalMemoryCost = 0;
    let scrolled = false;
    let lastRenderedPageIndexs: number[] = [];
    const datas = [];
    for (let i = 0; i < canvasCount; i++) {
        datas.push({
            text: `祖国你好${i + 1}`,
            rendered: false
        })
    }

    let intersectionObeserver = new IntersectionObserver(entries => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            let pageIndex = entry.target.id.split('-')[1];
            if (entry.intersectionRatio > 0) {
                console.log(`${entry.target.id}-出现了`);
                let canvas = entry.target as HTMLCanvasElement;
                if (canvas.width === 0) {
                    canvas.width = width;
                    canvas.height = height;
                    let ctx = canvas.getContext('2d');
                    if (!ctx) {
                        console.error('ctx is null');
                    }
                    else {
                        ctx.scale(2, 2);
                        ctx.fillStyle = '#fff';
                        ctx.font = '60px Times';
                        ctx.textBaseline = 'top';
                        for (let i = 0; i < 4; i++) {
                            ctx.fillText(`${datas[+pageIndex-1].text}`, 0, 60 * i);
                        }
                    }
                }
            }
            else {
                console.log(`${entry.target.id}-消失了`);
                let canvas = entry.target as HTMLCanvasElement;
                if (canvas.width > 0) {
                    canvas.width = 0;
                    canvas.height = 0;
                }
            }
        });
    }, {
        threshold: [0, 0.5, 1]
    });

    const clear = () => {
        // clearn memory
        let removeCount = 20;
        for(let j = 0; j < removeCount; j++) {
            let renderedCanvas = document.getElementById(`${canvasSelector}-${j}`) as HTMLCanvasElement;
            console.log(renderedCanvas);
            if (renderedCanvas) {
                renderedCanvas.parentNode.removeChild(renderedCanvas);
            }
        }
        let removeCanvas = document.getElementById(`${canvasSelector}-${removeCount + 2}`) as HTMLCanvasElement;
        if (removeCanvas) {
            let ctx = removeCanvas.getContext('2d');
            console.log('after remove', ctx);
        }
    }

    const clearCanvas = (canvasEl) => {
        setTimeout(() => {
            // 修改了宽度已经渲染的内容会被清除
            canvasEl.width = 300;
            canvasEl.height = 300;
            let ctx2 = canvasEl.getContext('2d');
            let imageData = ctx2.getImageData(0, 0, width, height);
            console.log('get image data2 = ', imageData);
        }, 1000);
    }

    const createCanvas = () => {
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

    const getViewportPages = () => {
        return [1, 2];
    };

    const renderCurrentPage = (pageIndexs?: number[]) => {
        lastRenderedPageIndexs.forEach(pageIndex => {
            let canvasEl = document.getElementById(`${canvasSelector}-${pageIndex}`) as HTMLCanvasElement;
            canvasEl.width = width;
            canvasEl.height = height;
        });

        let pages = pageIndexs?.length ? pageIndexs : getViewportPages();
        pages.forEach(pageIndex => {
            let canvasEl = document.getElementById(`${canvasSelector}-${pageIndex}`) as HTMLCanvasElement;
            canvasEl.width = width;
            canvasEl.height = height;
            let ctx = canvasEl.getContext('2d');
            if (!ctx) {
                console.error('ctx is null');
            }
            else {
                ctx.scale(2, 2);
                ctx.fillStyle = '#fff';
                ctx.font = '60px Times';
                ctx.fillText(`${datas[pageIndex-1].text}`, 20, 60);
            }

            // 创建一个 image 元素显示 canvas 的内容，把 canvas 释放
            // let imageEl = document.createElement('img') as HTMLImageElement;
            // imageEl.width = canvasEl.width;
            // imageEl.height = canvasEl.height;
            // imageEl.style.position = 'absolute';
            // imageEl.style.left = '0';
            // imageEl.style.top = '0';
            // imageEl.style.width = `${width}px`;
            // imageEl.style.height = `${height}px`;
            // let pageEl = document.getElementById(`${pageSelector}-${pageIndex}`);
            // pageEl.appendChild(imageEl);


        });
        lastRenderedPageIndexs = pages;
    }

    const addScrollEvent = () => {
        window.addEventListener('scroll', (e) => {
            if (!scrolled) {
                scrolled = true;
                console.log('scroll', e);
                let pageEl = document.getElementById(`${pageSelector}-1`);
                let rect = pageEl.getBoundingClientRect();
                console.log('rect = ', rect);
            }
            else {
                setTimeout(() => {
                    scrolled = false;
                }, 200);
            }
        });
    }

    createCanvas();
    // renderCurrentPage();

    console.log(`cost total memory ${ totalMemoryCost / 1024 / 1024 } MB`);
};
run();