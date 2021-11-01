/**
 * @author wangsuyan
 * @description canvas 绘制多行文本
 */

// import {zrender} from 'zrender';

 const text = `回看历史，在1988年奥运会的百米决赛中，本·约翰逊跑出的9秒79因服用禁药被取消，
 由此递补冠军的美国名将卡尔·刘易斯，当时跑出的成绩是9秒92。而在1996年亚特兰大奥运会上，
 多诺万·贝利夺冠并打破世界纪录的成绩是9秒84。自1984年参加奥运会以来，中国代表团内已经涌现出无数位争金夺银的选手。
 但如果以历史意义来衡量，苏炳添这次在百米跑道上取得的成绩，不会输给任何一位“多金王”。道理很简单，这可是男子100米比赛！
 在所有奥运项目中看起来最简单的一项，但也正因其纯粹，“飞人大战”被视为对于人类终极潜能的持续探索。世界纪录每被缩短0.01秒，
 都意味着人类极限的又一次刷新。而在这条代表全人类尝试探索的道路上，所谓人种优势论曾经大行其道。在很多人心目中，
 只有黑人才能成为百米跑道上的王者，包括为此找出激素水平、肌肉结构等一系列论据。相比之下，包括中国人在内的亚洲黄种人，
 似乎注定没资格在百米项目中与黑人选手争雄。哪怕刘翔当初在直道项目上横空出世，但外界对此的普遍观点，
 也只是110米栏对于技巧和节奏的要求对亚洲人比较有利，依然不认为百米决赛的跑道上也能出现亚洲面孔。`;
 const text2 = `回看历史，在1988年奥运会的百米决赛中`;

let dpr = window.devicePixelRatio || 1;
let startTop = 8;
let pageHeight = 1000;
let pageWidth = 400;
let nodes = [];

const createCanvas = () => {
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = pageWidth * dpr;
    canvas.height = pageHeight * dpr;
    canvas.style.width = `${pageWidth}px`;
    canvas.style.height = `${pageHeight}px`;
    canvas.id = 'muti-canvas'
    // canvas.style.padding = '20px';
    // canvas.style.borderRadius = '8px';
    canvas.style.backgroundColor = '#fff';
    // canvas.style.marginTop = '20px';
    return canvas;
}

const setCtxStyle = (ctx: CanvasRenderingContext2D) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = '#222';
    ctx.font = '20px Times';
    // "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
    ctx.textBaseline = 'top';
    // "center" | "end" | "left" | "right" | "start";
    // 值不同，绘制的时候 fillText 的坐标也要修改
    ctx.textAlign = 'left';
}

const doDraw = (ctx: CanvasRenderingContext2D, text: string) => {
    // fillText(text, x, y, maxWidth)
    // maxWidth 设置了 maxWidth 绘制的文本会重叠
    let allChars = text.split('');
    // 每行的内容
    let lineText = '';
    let y = startTop;
    // 每行的高度
    let lineHeight = 34;
    for (let i = 0; i < allChars.length; i++) {
        // measureText 可计算绘制内容的宽度
        let metric = ctx.measureText(lineText + allChars[i]);
        if (metric.width < ctx.canvas.width / dpr) {
            lineText += allChars[i];
            if (i === allChars.length - 1) {
                // 绘制结束的文本
                ctx.fillText(lineText, 0, y);
                nodes.push({
                    x: 0,
                    y: y,
                    w: metric.width,
                    h: 20,
                    c: lineText
                });
            }
        }
        else {
            // 绘制整行内容
            let metric = ctx.measureText(lineText);
            ctx.fillText(lineText, 0, y);
            nodes.push({
                x: 0,
                y: y,
                w: metric.width,
                h: 20,
                c: lineText
            });
            lineText = allChars[i];
            y =  y + lineHeight;
        }
    }
}

const drawMutiText = (text: string) => {
    let canvas = createCanvas();
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    setCtxStyle(ctx);

    doDraw(ctx, text);

    let parent = document.getElementById('muti-text-demo');
    parent.appendChild(canvas);
}

let mouseDown = false;
let startX = 0;
let startY = 0;

const isInNodeArea = (e: MouseEvent) => {
    for(let i = 0; i < nodes.length; i++) {
        let aNode = nodes[i];
        aNode.lineNum = i;
        if (e.offsetX >= aNode.x && e.offsetY <= (aNode.y + aNode.h)) {
            return aNode;
        }
    }
    return null;
}

function throttle(fn, delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}

const addEvent = () => {
    let parent = document.getElementById('muti-canvas');
    let lastHitNode = null;
    let drawNodes = [];
    let isValid = true;
    const notDrawed = (node) => {
        return drawNodes.every(item => item.lineNum !== node.lineNum);
    }
    const handleMove = (e) => {
        e.stopPropagation();
        // if (e.target.id !== 'muti-canvas') {
        //     // return;
        // }
        if (!isValid) {
            return;
        }
        if (mouseDown) {
            isValid = false;
            setTimeout(() => {
                isValid = true;
            }, 0);
            // console.log('e = ', e.target);
            console.log(`offsetX = ${e.offsetX}, offsetY = ${e.offsetY}`);
            // 页面的距离
            // console.log(`pageX = ${e.pageX}, pageY = ${e.pageY}`);
            // console.log(`clientX = ${e.clientX}, clientY = ${e.clientY}`);
         /**
          * 文本框选择思路：
          *
          *
         */
            let hitNode = isInNodeArea(e);
            if (hitNode) {
                 if (notDrawed(hitNode)) {
                     console.log('find hited node', hitNode);
                     // 从来没画过这行
                     if (lastHitNode) {
                        console.log('last draw', lastHitNode);
                         // 已经画过了，
                         // 1.上一行，需要把宽度设置满
                         let id = 'select-line' + lastHitNode.lineNum;
                         let lastLineDom = document.getElementById(id) as HTMLElement;
                         lastLineDom.style.width = `${lastHitNode.w}px`;

                         // 2.开启新的一行
                         let lineDom = document.createElement('div');
                         lineDom.style.position = 'absolute';
                         lineDom.style.left = `0px`;
                         lineDom.style.top = `${hitNode.y}px`;
                         lineDom.style.height = `${hitNode.h}px`;
                         lineDom.style.backgroundColor = 'blue';
                         lineDom.style.opacity = '0.4';
                         // 需要从头画到鼠标的位置
                         lineDom.style.width = `${e.offsetX}px`;
                         lineDom.id = 'select-line' + hitNode.lineNum;
                         lineDom.addEventListener('mousemove', e => {

                         });
                         lastHitNode = hitNode;

                         let parent = document.getElementById('muti-text-demo');
                         parent.appendChild(lineDom);

                    }
                    else {
                         // 这是第一行
                         let lineDom = document.createElement('div');
                         lineDom.style.position = 'absolute';
                         lineDom.style.left = `${e.offsetX}px`;
                         lineDom.style.top = `${hitNode.y}px`;
                         lineDom.style.height = `${hitNode.h}px`;
                         lineDom.style.backgroundColor = 'blue';
                         lineDom.style.opacity = '0.4';
                         lineDom.id = 'select-line' + hitNode.lineNum;
                         lastHitNode = hitNode;

                         let parent = document.getElementById('muti-text-demo');
                         parent.appendChild(lineDom);
                    }
                    drawNodes.push(hitNode);
                }
                else {
                    // 第1行的宽度：鼠标下落的 e.offsetX - startX
                    // 画一块连续的区域
                    // 可以向上、还可以向下
                    // 画到第二行时，宽度就是 e.offsetX
                    let width = e.offsetX - startX;
                    if (drawNodes.length > 1) {
                        width = e.offsetX;
                    }
                    let id = 'select-line' + hitNode.lineNum;
                    let lineDom = document.getElementById(id) as HTMLElement;
                    if (!lineDom) {
                        console.log('can not find line dom');
                        return;
                    }
                    console.log('width = ', width);
                    if (width >= 0) {
                        lineDom.style.width = `${width}px`;
                    }
                    else {
                        // 宽度小于等于 0 移除
                     //    lineDom.parentNode.removeChild(lineDom);
                     lineDom.style.width = `0px`;
                    }
                }
            }
        }
     }
    parent.addEventListener('mousedown', (e) => {
        // if (e.target.id !== 'muti-canvas') {
        //     return;
        // }
        console.log('mouse down', e);
        startX = e.offsetX;
        startY = e.offsetY;
        drawNodes = [];
        mouseDown = true;
    }, true);
    parent.addEventListener('mousemove', handleMove, true);
    parent.addEventListener('mouseup', (e) => {
        mouseDown = false;
        console.log('mouseup', e);
        // if (e.target.id !== 'muti-canvas') {
        //     return;
        // }
        lastHitNode = null;
        startX = 0;
        startY = 0;
    }, true);
    document.querySelector('html').addEventListener('mouseup', function (e) {
        mouseDown = false;
        console.log('html mouseup', e);
        // if (e.target.id !== 'muti-canvas') {
        //     return;
        // }
        lastHitNode = null;
        startX = 0;
        startY = 0;
    });
}

// const useZrender = () => {
//     let zr = zrender.init(document.getElementById('zrender'));
//     let myText = new zrender.Text({
//         style: {
//             text: text
//         },
//         x: 0,
//         y: 10
//     });
//     zr.add(myText);
// }
// useZrender();

drawMutiText(text);
console.log('nodes = ', nodes);
addEvent();