const drawCircle = () => {
    const canvas = new fabric.Canvas('draw-app');

    const create = () => {
        let rect = new fabric.Circle({
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            fill: 'red',
            radius: 50
        });
        return rect;
    }
    let el = create();
    canvas.add(el);
}
drawCircle();