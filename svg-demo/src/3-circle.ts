/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG圆形
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-圆';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    let circleEl = document.createElementNS(namespace, 'circle') as SVGCircleElement;
    // 指定圆形和半径
    circleEl.setAttribute('cx', '100');
    circleEl.setAttribute('cy', '100');
    circleEl.setAttribute('r', '50');
    svg.appendChild(circleEl);

    const textEl = document.createElementNS(namespace, 'text') as SVGTextElement;
    // 通过 setAttribute 来设置 text 的属性
    textEl.setAttribute('x', '85');
    textEl.setAttribute('y', '110');
    // 设置字体颜色
    textEl.setAttribute('fill', '#fff');
    textEl.style.fontSize = '30px';
    textEl.textContent = '燕';
    svg.appendChild(textEl);

    parentEl.appendChild(svg);

}());