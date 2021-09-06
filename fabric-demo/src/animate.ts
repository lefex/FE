const drawAnimate = () => {
    const canvas = new fabric.Canvas('draw-app');

    const createRect = () => {
        let rect = new fabric.Rect({
            top: 200,
            left: 200,
            width: 100,
            height: 100,
            fill: 'red'
        });
        return rect;
    }
    let rect = createRect();

    rect.animate('angle', 360, {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeInOutBack,
        onComplete: () => {
            console.log('animate stop');
        }
    });

    canvas.add(rect);
}
drawAnimate();