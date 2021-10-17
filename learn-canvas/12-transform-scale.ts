/**
 * @author 素燕（我有个公众号：素燕）
 * @description canvas 设置 scale
 */

import { initCanvas } from './share';

function syRunDemo() {
    const left = 80;
    const top = 80;
    const height = 80;
    const text = '| 和素燕一起学 Canvas，😄￥ |';

    const scaleText = (ctx: CanvasRenderingContext2D) => {
        ctx.font = '40px Times';
        ctx.textBaseline = 'top';
        ctx.fillText(text, left, top);

        // 保持绘制上下文当前的状态
        ctx.save();
        /**
         * 不会影响已经绘制内容的显示
         * scaleX：坐标x和width都会按比例进行缩放
         * scaleY：坐标y和height都会按比例进行缩放
         */
        ctx.scale(0.5, 1);
        ctx.fillText(text, left, top + height);
        // 恢复绘制上下文的上一次状态
        ctx.restore();

        ctx.fillText(text, left, top + 2 * height);
    }

    const scaleRect = (ctx: CanvasRenderingContext2D) => {
        ctx.fillRect(left*2, top + 3 * height, height, height / 2);
        // 保持绘制上下文当前的状态
        ctx.save();
        /**
         * 不会影响已经绘制内容的显示
         * scaleX：坐标x和width都会按比例进行缩放
         * scaleY：坐标y和height都会按比例进行缩放
         */
        ctx.scale(2, 0.5);
        ctx.fillRect(left*2, top + 4 * height, height, height / 2);
        // 恢复绘制上下文的上一次状态
        ctx.restore();

        ctx.fillRect(left*2, top + 5 * height, height, height / 2);
    }

    // 1. 创建 canvas
    let ctx = initCanvas();

    scaleText(ctx);
    scaleRect(ctx);
}

syRunDemo();