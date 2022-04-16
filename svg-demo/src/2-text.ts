/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG文本
 * SVGTextElement -> SVGTextPositioningElement -> SVGTextContentElement -> SVGGraphicsElement
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = 'text文本';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    /**
     * text 和 canvas 一样，无法自动换行
     */
    const textEl = document.createElementNS(namespace, 'text') as SVGTextElement;
    // 通过 setAttribute 来设置 text 的属性
    textEl.setAttribute('x', '0');
    textEl.setAttribute('y', '100');
    // textEl.setAttribute('width', '10');
    // textEl.setAttribute('height', '50');
    // 设置字体颜色
    textEl.setAttribute('fill', '#222');

    // 通过 style 来设置样式
    textEl.style.fontSize = '30px';
    textEl.style.fontFamily = 'monospace';
    textEl.style.fontWeight = '700';
    textEl.style.fontStyle = 'italic';
    textEl.style.textDecoration = 'underline';
    textEl.style.wordSpacing = '10';
    textEl.style.letterSpacing = '10';
    // 对齐方式
    textEl.style.textAnchor = 'start';
    textEl.textContent = 'SVG是矢量图，不管你缩放多大';

    // tspan如同span，把内容拆分开，单独设置属性
    let tspanEl = document.createElementNS(namespace, 'tspan');
    tspanEl.textContent = 'tspan内容啥效果';
    textEl.appendChild(tspanEl);

    svg.appendChild(textEl);

    parentEl.appendChild(svg);

}());