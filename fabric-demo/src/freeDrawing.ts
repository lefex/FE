const drawFee = () => {
    const canvas = new fabric.Canvas('draw-app');
    canvas.isDrawingMode = true;
    if (canvas.freeDrawingBrush) {
        var brush = canvas.freeDrawingBrush;
        brush.color = 'red';
        brush.width = 18;
    }
}
drawFee();