/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG多边形，画任意封闭图形
 * 表示坐标的个数必须是偶数
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-多边形';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    let polygonEl = document.createElementNS(namespace, 'polygon') as SVGPolygonElement;
    // 画一个五角星
    polygonEl.setAttribute('points', '48,16 16,96 96,48 0,48 80,96');
    polygonEl.style.stroke = 'red';
    // 填充规则 nonzero
    polygonEl.style.fillRule = 'nonzero';
    svg.appendChild(polygonEl);

    parentEl.appendChild(svg);

}());