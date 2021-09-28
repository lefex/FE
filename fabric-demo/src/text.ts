
// canvas.selection = false;

const drawText2 = () => {
    const canvas = new fabric.Canvas('draw-app');

const text = new fabric.Text('前端小课，公众号素燕', {
    left: 0,
    top: 10,
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
    lineHeight: 1.2,
    // 是否有控制手柄
    hasControls: false,
    selectable: false,
    // stroke: '#c3bfbf',
    strokeWidth: 2,
    textBackgroundColor: 'rgb(0, 200, 0)'
});

const text1 = new fabric.IText('我们的家乡\n你觉得好不好！\n非常美丽\n让世人一睹为快', {
    top: 80,
    left: 0,
    fontSize: 30,
    cursorColor: 'red',
    editable: true,
    styles: {
        0: {
            0: { fill: 'red' , top: 10},
            2: { fill: 'blue', fontSize: 50, top: 100 }
        },
        2: {
            0: { fill: 'red' },
            2: { fill: 'blue', fontSize: 50 }
        }
    }
});

const text2 = new fabric.Textbox('我 in 北京😀😃🤬(´▽`ʃƪ)＼(☆o☆)／æ🥰🍊🎿🚝🆔🇰🇵', {
    top: 300,
    left: 0,
    fontSize: 30,
    cursorColor: 'red',
    editable: true,
});

    canvas.add(text, text1, text2);
}

drawText2();


// const createText = (content, pos) => {
//     const canvas = new fabric.Canvas('draw-app');
//     let text = new fabric.Text(content, {
//         left: pos.x,
//         top: pos.y,
//         width: 800,
//         fontSize: 50,
//         fontWeight: 400,
//         charSpacing: 100,
//         underline: false,
//         overline: false,
//         linethrough: false,
//         textAlign: 'left',
//         fontStyle: 'normal',
//         fontFamily: '方正楷体简体',
//         // fontFamily: '方正字迹-侯波硬笔简体',
//         // fontFamily: '方正字迹-张颢簪花小楷 简',
//         lineHeight: 1.2,
//         // 是否有控制手柄
//         // hasControls: false,
//         // selectable: false
//         // stroke: '#c3bfbf',
//         strokeWidth: 2,
//         textBackgroundColor: 'rgb(0, 200, 0)'
//     });
//     canvas.add(text);
// }

// const nodes = [
//     {text: '飞来山上千寻塔，'},
//     {text: '闻说鸡鸣见日升，'},
//     {text: '不畏浮云遮望眼，'},
//     {text: '只缘身在最高层。'},
// ];

// const height = 60;

// nodes.forEach((item, index) => {
//     createText(item.text, {
//         x: 0,
//         y: index * height
//     })
// })

