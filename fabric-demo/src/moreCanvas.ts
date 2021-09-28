import {fabric} from 'fabric';

const width = 800;
const height = 600;
const scale = 1;

const createCanvas = (id) => {
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.border = '1px solid red';
    canvas.id = id;

    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    return canvas;
}

const addRect = id => {
    const fabricCanvas = new fabric.Canvas(id, {
        selection: true,
        enableRetinaScaling: true
    });
    fabricCanvas.selection = true;
    // 创建一个矩形
    let rect = new fabric.Rect({
        top: 100,
        left: 300,
        width: 100,
        height: 100,
        fill: 'red',
        angle: 45
    });
    // 把矩形绘制到画布上
    fabricCanvas.add(rect);
    fabricCanvas.add(addEditText('我们的家乡\n你觉得好不好！\n非常美丽\n让世人一睹为快'));
}

const addEditText = text => {
    const itext = new fabric.IText(text, {
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
    return itext;
}

const pageAddCanvas = (id) => {
    const pageDom = document.getElementById(id);
    const renderCanvasId = id + '-canvas';
    const renderCanvas = createCanvas(renderCanvasId);
    pageDom.appendChild(renderCanvas);

    const fabricCanvasId = id + '-fabricCanvas';
    const fabricCanvas = createCanvas(fabricCanvasId);
    fabricCanvas.style.position = 'absolute';
    fabricCanvas.style.left = '0';
    fabricCanvas.style.top = '0';
    fabricCanvas.style.bottom = '0';
    fabricCanvas.style.right = '0';
    pageDom.appendChild(fabricCanvas);
    addRect(fabricCanvasId);
}

pageAddCanvas('page-wrap-1');
pageAddCanvas('page-wrap-2');