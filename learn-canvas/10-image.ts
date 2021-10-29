/**
 * @author 素燕（我有个公众号：素燕）
 * @description 使用图片
 */

import { initCanvas } from './share';
import { GridSize } from './constant';

function syRunDrawRectDemo() {
    const drawImageAsPattern = (ctx: CanvasRenderingContext2D) => {
        let img = new Image();
        img.src = 'wm.png';
        img.onload = function () {
            // create pattern
            let parrern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = parrern;
            ctx.fillRect(40, 40, 200, 60);
        }
    }

    // 等比缩放图片到某个宽度
    const drawImageWithWidth = (ctx: CanvasRenderingContext2D, width: number) => {
        let img = new Image();
        img.src = 'zly.jpeg';
        img.onload = function () {
            /**
             * drawImage(image: CanvasImageSource, 
             * sx: number, sy: number, sw: number, sh: number, 
             * dx: number, dy: number, dw: number, dh: number): void;
             */
            let sw = img.width;
            let sh = img.height;
            let dw: number = width;
            let scale = dw / sw;
            ctx.drawImage(img, 20, 20, sw * scale, sh * scale);
        }
    }

    const drawImageWithErrorSize = (ctx: CanvasRenderingContext2D) => {
        let img = new Image();
        img.src = 'gzh.png';
        img.onload = function () {
            ctx.font = '12px Times';
            ctx.fillText(`width:${img.width}  height:${img.height}`, GridSize, GridSize - 15);
            // ctx.drawImage(img, GridSize, GridSize, img.width, img.height);
            const avtarWidth = 400.2;
            const avatarX = 40;
            ctx.drawImage(img, avatarX, avatarX, avtarWidth, avtarWidth, GridSize, GridSize, avtarWidth, avtarWidth);
        }
    }

    const drawImage = (ctx: CanvasRenderingContext2D) => {
        let img = new Image();
        img.src = 'zly.jpeg';
        img.onload = function () {
            ctx.drawImage(img, 20, 20, 50, 50);
        }
    }
    // 等比缩放图片到某个宽度
    const drawImageScale = (ctx: CanvasRenderingContext2D, width: number) => {
        let img = new Image();
        img.src = 'avatar.png';
        img.onload = function () {
            /**
             * drawImage(image: CanvasImageSource, 
             * sx: number, sy: number, sw: number, sh: number, 
             * dx: number, dy: number, dw: number, dh: number): void;
             */
            let sw = img.width;
            let sh = img.height;
            let dw: number = width;
            let scale = dw / sw;
            // 宽高乘以一个比例，即可放大缩小图片
            ctx.drawImage(img, 20, 20, sw * scale, sh * scale);

            createImageBitmap(img).then(bitmap => {
                console.log('bitmap = ', bitmap);
            });
        }
    }

    const drawImageCopy = (ctx: CanvasRenderingContext2D, width: number) => {
        let img = new Image();
        img.src = 'hsy.jpg';
        img.onload = function () {
            /**
             * drawImage(image: CanvasImageSource, 
             * sx: number, sy: number, sw: number, sh: number, 
             * dx: number, dy: number, dw: number, dh: number): void;
             */
            let sw = img.width;
            let sh = img.height;
            let dw: number = width;
            let scale = dw / sw;
            // scale = 1;
            let drawW = sw * scale;
            let drawH = sh * scale;
            // 宽高乘以一个比例，即可放大缩小图片
            ctx.drawImage(img, 20, 20, drawW, drawH);

            //
            const lrhWitdth = 300;

            // src 为原图的尺寸，即使是缩放了也应该用原图的
            // 从原图中取一块区域画到画布上
            let srcScale = 1 / scale;
            ctx.drawImage(img, 0, 0, lrhWitdth * srcScale, drawH * srcScale,
                20, drawH + 40, lrhWitdth, drawH);

            ctx.drawImage(img, lrhWitdth * srcScale + 20, 0, lrhWitdth * srcScale, drawH * srcScale,
                100 + lrhWitdth, drawH + 40, lrhWitdth, drawH);
        }
    }


    // 1. 创建 canvas
    let ctx = initCanvas();

    // 在画布中画绘制一张图片
    //  drawImageAsPattern(ctx);

    // drawImageWithWidth(ctx, 340);

    // drawImageScale(ctx, 80);

    // drawImage(ctx);

    // drawImageCopy(ctx, 600);

    drawImageWithErrorSize(ctx);
}

syRunDrawRectDemo();