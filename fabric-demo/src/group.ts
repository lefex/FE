const drawGroup = () => {
    const canvas = new fabric.Canvas('draw-app');

    var circle = new fabric.Circle({
        radius: 100,
        fill: '#eef',
        scaleY: 0.5,
        // originX originX 表示在 group 居中显示
        originX: 'center',
        originY: 'center'
    });

    var text = new fabric.Text('素燕可视化', {
        fontSize: 30,
        originX: 'center',
        originY: 'center'
    });

    var group = new fabric.Group([circle, text], {
        left: 150,
        top: 100,
        angle: -10
    });

    canvas.add(group);

    group.item(0).set('fill', 'red');
    group.item(1).set({
        text: '渲染引擎',
        fill: 'white'
    });
}
drawGroup();