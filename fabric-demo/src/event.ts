const drawEvent = () => {
    const canvas = new fabric.Canvas('draw-app');

    canvas.on('mouse:down', options => {
        // e 表示原先的事件
        // target 表示当前点击的事件
        console.log('mouse down canvas', options.target?.type);
    });

    // 监听渲染完成
    canvas.on('after:render',  options => {
        console.log('after:render', options);
    })

    let rect = new fabric.Circle({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: 'red',
        radius: 50,
        selectable: true
    });
    // 选中了矩形
    rect.on('selected',  options => {
        console.log('selected', options);
    })

    canvas.add(rect);
}
drawEvent();