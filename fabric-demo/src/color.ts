const drawColor = () => {
    const canvas = new fabric.Canvas('draw-app');

    const topEdge = 0;
    const leftEdge = 0;
    const width = 40;

    /**
     * RGB (0, 255)
     * 256 = 8 * 32
     * 32 * 40 = 1280
     */
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let rect = new fabric.Rect({
                top: topEdge + (j * width),
                left: leftEdge + (i * width),
                width: width,
                height: width,
                fill: `rgba(${0*16}, ${i*16}, ${j*16}, 1)`
            });
            canvas.add(rect);
        }
    }

    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let rect = new fabric.Rect({
                top: topEdge + (j * width),
                left: leftEdge + (i * width) + 16 * width,
                width: width,
                height: width,
                fill: `rgba(${i*16}, ${0*16}, ${j*16}, 1)`
            });
            canvas.add(rect);
        }
    }

    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let rect = new fabric.Rect({
                top: topEdge + (j * width) + 16 * width,
                left: leftEdge + (i * width),
                width: width,
                height: width,
                fill: `rgba(${i*16}, ${j*16}, ${0*16}, 1)`
            });
            canvas.add(rect);
        }
    }
}
drawColor();