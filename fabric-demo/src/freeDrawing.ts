const drawFee = () => {
    const canvas = new fabric.Canvas('draw-app');
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = {
        color: 'red',
        width: 4
    };
}
drawFee();