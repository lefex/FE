/**
 * @author 素燕
 * @description 渲染文字个数限制
 */

import { initCanvas } from './share';

 (function() {
    // safari 画布有最大的宽度限制
    let ctx = initCanvas();

    const rgbValue = () => {
        return Math.random() * 255;
    }

    for (let i = 0; i < 3000; i++) {
        let x = Math.random() * ctx.canvas.width;
        let y = Math.random() * ctx.canvas.height;
        ctx.font = `${Math.random() * 30}px Times`;
        ctx.fillStyle = `rgba(${rgbValue()} ${rgbValue()} ${rgbValue()} 1)`
        ctx.fillText(`${i}`, x, y);
    }


}());