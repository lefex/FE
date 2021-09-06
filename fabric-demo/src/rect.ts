const drawRect = () => {
const canvas = new fabric.Canvas('draw-app');
canvas.selection = true;
// 创建一个矩形
let rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    fill: 'red',
    angle: 45
});
// 把矩形绘制到画布上
canvas.add(rect);
// 修改矩形的属性
// rect.set({
//     left: 200,
//     fill: 'red'
// });
// 进行重绘
// canvas.renderAll();
}
drawRect();