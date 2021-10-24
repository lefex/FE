/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用 JavaScript 创建 Canvas
 */

import {initCanvas} from './share';
import {GridSize} from './constant';

function syDraw() {
    const drawReact = (ctx: CanvasRenderingContext2D) => {
        ctx.fillRect(GridSize, GridSize, GridSize * 2, 80);
    }

    const useHTML = () => {
        let canvasElement = document.getElementById('sy-canvas') as HTMLCanvasElement;
    }

    // let ctx = initCanvas();
    // drawReact(ctx);
}

syDraw();