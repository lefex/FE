/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG线段
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-线段';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    const lineEl = document.createElementNS(namespace, 'line') as SVGLineElement;
    // 设置两个点
    lineEl.setAttribute('x1', '10');
    lineEl.setAttribute('y1', '20');
    lineEl.setAttribute('x2', '500');
    lineEl.setAttribute('y2', '20');

    lineEl.style.stroke = '#222';
    lineEl.style.strokeWidth = '20';
    lineEl.style.strokeOpacity = '0.8';
    lineEl.style.strokeDasharray = '10'

    svg.appendChild(lineEl);

    parentEl.appendChild(svg);

}());