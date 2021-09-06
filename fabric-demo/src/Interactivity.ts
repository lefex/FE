const drawInteractivity = () => {
    const canvas = new fabric.Canvas('draw-app');
    // 控制是否可以组选
    canvas.selection = true;

    let rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: 'red'
    });

    let circle = new fabric.Circle({
        top: 100,
        left: 300,
        width: 100,
        height: 100,
        fill: 'red',
        radius: 50
    });

    let circle2 = new fabric.Circle({
        top: 100,
        left: 500,
        width: 100,
        height: 100,
        fill: 'blue',
        radius: 50,
        // 不可选择
        selectable: false
    });

    let text = new fabric.Text('素燕你好呀！', {
        top: 200,
        left: 100
    });
    canvas.add(rect);
    canvas.add(circle);
    canvas.add(circle2);
    canvas.add(text);
}
drawInteractivity();