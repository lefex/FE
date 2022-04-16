/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG椭圆
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-椭圆';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    let ellipseEl = document.createElementNS(namespace, 'ellipse') as SVGEllipseElement;
    // 圆形x
    ellipseEl.setAttribute('cx', '100');
    // 圆形y
    ellipseEl.setAttribute('cy', '100');
    // x轴的半径
    ellipseEl.setAttribute('rx', '80');
    // y轴的半径
    ellipseEl.setAttribute('ry', '50');
    svg.appendChild(ellipseEl);

    parentEl.appendChild(svg);

}());