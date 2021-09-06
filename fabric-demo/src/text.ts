const canvas = new fabric.Canvas('draw-app');
// canvas.selection = false;

const createTextBox = (content, pos) => {
    let textBox = new fabric.Textbox(content, {
        left: pos.x,
        top: pos.y,
        width: 800,
        fontSize: 50,
        fontWeight: 400,
        charSpacing: 0,
        underline: false,
        overline: false,
        linethrough: false,
        textAlign: 'left',
        fontStyle: 'normal',
        lineHeight: 1.2,
        hasControls: false,
        selectable: false
    });
    canvas.add(textBox).setActiveObject(textBox);
}

const createText = (content, pos) => {
    let text = new fabric.Text(content, {
        left: pos.x,
        top: pos.y,
        width: 800,
        fontSize: 50,
        fontWeight: 400,
        charSpacing: 100,
        underline: false,
        overline: false,
        linethrough: false,
        textAlign: 'left',
        fontStyle: 'normal',
        fontFamily: '方正楷体简体',
        // fontFamily: '方正字迹-侯波硬笔简体',
        // fontFamily: '方正字迹-张颢簪花小楷 简',
        lineHeight: 1.2,
        // 是否有控制手柄
        // hasControls: false,
        // selectable: false
        // stroke: '#c3bfbf',
        strokeWidth: 2,
        textBackgroundColor: 'rgb(0, 200, 0)'
    });
    canvas.add(text);
}

const nodes = [
    {text: '飞来山上千寻塔，'},
    {text: '闻说鸡鸣见日升，'},
    {text: '不畏浮云遮望眼，'},
    {text: '只缘身在最高层。'},
];

const height = 60;

nodes.forEach((item, index) => {
    createText(item.text, {
        x: 0,
        y: index * height
    })
})