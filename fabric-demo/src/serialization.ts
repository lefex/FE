const drawSerialization = () => {
    const canvas = new fabric.Canvas('draw-app');

    let rect = new fabric.Rect({
        top: 10,
        left: 10,
        width: 100,
        height: 100,
        fill: 'red',
        // 标记这个对象不会被导出
        // excludeFromExport: true
    });
    canvas.add(rect);

    let text = new fabric.Text('素燕可视化', {
        left: 100,
        top: 200
    });
    canvas.add(text);

    let json = JSON.stringify(canvas);
    json = canvas.toJSON();
    console.log('json = ', json);

    let objs = canvas.toObject();
    console.log('objs = ', objs);

    let svg = canvas.toSVG();
    console.log('svg = ', svg);
}
drawSerialization();