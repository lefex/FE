/**
 * @author 素燕（我有个公众号：素燕）
 * @description 测量绘制宽度
 */

import { initCanvas } from './share';

const text = '<      <     <     <     <  <';
const fontSize = 30;

interface SYNode {
    width: number;
    left: number;
    text: string;
}

const getChars = (text: string) => {
    let rets:  SYNode[] = [];
    let chars = text.split('');
    let measureCanvas = document.createElement('canvas');
    let ctx = measureCanvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.font = `${fontSize}px Times`;
    let left = 120;
    chars.forEach(char => {
        // measureText 这个方法目前没有遇到测量不准的情况，对于自定义字体，先确保自定义字体已经加载完成
        // 再使用这个方法，否则会导致测量不准
        let width = ctx.measureText(char).width;
        rets.push({
            width,
            text: char,
            left
        });
        left += width;
    });
    return rets;
}

function syRunMeasureWidthDemo() {
    const drawText = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#555';
        ctx.textBaseline = 'top';
        ctx.font = `${fontSize}px Times`;
        ctx.fillText(text, 120, 120);
    }

    const drawByChars = (ctx: CanvasRenderingContext2D) => {
        let nodes = getChars(text);
        nodes.forEach(aNode => {
            ctx.fillText(aNode.text, aNode.left, 140);
            ctx.strokeRect(aNode.left, 140, aNode.width, fontSize);
        });
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画一个矩形区域
    drawText(ctx);
    drawByChars(ctx);
}

syRunMeasureWidthDemo();