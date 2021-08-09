/**
 * @author wangsuyan
 * @description canvas 文本选中并复制
 */

// import {zrender} from 'zrender';

const text = `回看历史在年奥运会的百米决赛中本约翰逊跑出的秒因服用禁药被取消由此递补冠军的美国名将卡尔刘易斯当时跑出的成绩是秒而在年亚特兰大奥运会上多诺万贝利夺冠并打破世界纪录的成绩是秒自年参加奥运会以来中国代表团内已经涌现出无数位争金夺银的选手但如果以历史意义来衡量苏炳添这次在百米跑道上取得的成绩不会输给任何一位多金王。道理很简单这可是男子米比赛在所有奥运项目中看起来最简单的一项但也正因其纯粹飞人大战被视为对于人类终极潜能的持续探索。，。`;

const text2 = `世界纪录每被缩短0.01秒，
都意味着人类极限的又一次刷新。而在这条代表全人类尝试探索的道路上，所谓人种优势论曾经大行其道。在很多人心目中，
只有黑人才能成为百米跑道上的王者，包括为此找出激素水平、肌肉结构等一系列论据。相比之下，包括中国人在内的亚洲黄种人，
似乎注定没资格在百米项目中与黑人选手争雄。哪怕刘翔当初在直道项目上横空出世，但外界对此的普遍观点，
也只是110米栏对于技巧和节奏的要求对亚洲人比较有利，依然不认为百米决赛的跑道上也能出现亚洲面孔。`;

let dpr = window.devicePixelRatio || 1;
let startTop = 0;
let nodes = [];
let fontSize = 40;
let nodeHeight = 40;
let lineHeight = 40;
let pageHeight = lineHeight * 20;
let pageWidth = fontSize * 14;
let id = 'muti-canvas';
let parentId = 'text-copy-demo';
let canvasParentId = 'canvas-outer-wrap';

const createCanvas = () => {
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = pageWidth * dpr;
    canvas.height = pageHeight * dpr;
    canvas.style.width = `${pageWidth}px`;
    canvas.style.height = `${pageHeight}px`;
    canvas.id = id;
    canvas.style.backgroundColor = '#fff';
    return canvas;
}

const drawGrid = (ctx: CanvasRenderingContext2D) => {
    let gridSpace = lineHeight;
    let xCount = pageHeight / gridSpace;
    let yCount = pageWidth / gridSpace;

    for(let i = 0; i < xCount; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gridSpace * i);
        ctx.lineTo(pageWidth, gridSpace * i);
        ctx.strokeStyle = '#222';
        ctx.stroke();
    }

    for(let i = 0; i < yCount; i++) {
        ctx.beginPath();
        ctx.moveTo(gridSpace * i, 0);
        ctx.lineTo(gridSpace * i, pageHeight);
        ctx.strokeStyle = '#222';
        ctx.stroke();
    }
};

const setCtxStyle = (ctx: CanvasRenderingContext2D) => {
   ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

   ctx.fillStyle = '#222';
   ctx.font = `${fontSize}px monospace`;
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
   for (let i = 0; i < allChars.length; i++) {
       // measureText 可计算绘制内容的宽度
       let metric = ctx.measureText(lineText + allChars[i]);
       if (metric.width <=  ctx.canvas.width / dpr) {
           lineText += allChars[i];
           if (i === allChars.length - 1) {
               // 绘制结束的文本
               ctx.fillText(lineText, 0, y);
               nodes.push({
                   x: 0,
                   y: y,
                   w: metric.width,
                   h: nodeHeight,
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
               h: nodeHeight,
               c: lineText
           });
           lineText = allChars[i];
           y =  y + lineHeight;
       }
   }
}

const drawMutiText = (text: string) => {
   let canvas = createCanvas();
   let div = document.createElement('div');
   div.id = canvasParentId;
   div.style.position = 'relative';
   div.style.display = 'inline-block';
   div.appendChild(canvas);
   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

   setCtxStyle(ctx);
   drawGrid(ctx);
   doDraw(ctx, text);

   let parent = document.getElementById(parentId);
   parent.appendChild(div);
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
   let parent = document.getElementById(canvasParentId);
   let lastHitNode = null;
   let drawNodes = [];
   let isValid = true;
   const notDrawed = (node) => {
       return drawNodes.every(item => item.lineNum !== node.lineNum);
   }
   const handleMove = (e) => {
       if (!isValid) {
           return;
       }
       if (mouseDown) {
           // 限流
           isValid = false;
           setTimeout(() => {
               isValid = true;
           }, 0);

           console.log(`offsetX = ${e.offsetX}, offsetY = ${e.offsetY}`);
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

                        let parent = document.getElementById(canvasParentId);
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

                        let parent = document.getElementById(canvasParentId);
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
       startX = e.offsetX;
       startY = e.offsetY;
       drawNodes = [];
       mouseDown = true;
       console.log('mouse down startX, startY', startX, startY);
   }, true);

   parent.addEventListener('mousemove', handleMove, true);

   // 鼠标收起
   let handleMouseUp = (e) => {
        console.log('mouse up startX, startY', e.offsetX, e.offsetY);
        mouseDown = false;
        lastHitNode = null;
        startX = 0;
        startY = 0;
   }

   parent.addEventListener('mouseup', handleMouseUp, true);
   document.querySelector('html').addEventListener('mouseup', handleMouseUp);
}

drawMutiText(text);
console.log('nodes = ', nodes);
addEvent();