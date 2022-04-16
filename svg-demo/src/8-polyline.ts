/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG折线
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-折线';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    let polylineEl = document.createElementNS(namespace, 'polyline') as SVGPolygonElement;
    // 画一个五角星
    polylineEl.setAttribute('points', '10,40 50,20 70,60 90,10 140,20');
    polylineEl.style.stroke = 'red';
    polylineEl.style.fill = 'none';
    svg.appendChild(polylineEl);

    parentEl.appendChild(svg);

}());