/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG矩形
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-矩形';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    const rectEl1 = document.createElementNS(namespace, 'rect') as SVGRectElement;
    rectEl1.setAttribute('x', '10');
    rectEl1.setAttribute('y', '20');
    rectEl1.setAttribute('width', '200');
    rectEl1.setAttribute('height', '150');
    // 设置圆角
    rectEl1.setAttribute('rx', '10');
    rectEl1.setAttribute('ry', '20');

    rectEl1.style.stroke = 'red';
    rectEl1.style.strokeWidth = '4';
    rectEl1.style.strokeDasharray = '2';

    rectEl1.style.fill = '#999';
    rectEl1.style.fillOpacity = '0.6';

    svg.appendChild(rectEl1);

    parentEl.appendChild(svg);

}());