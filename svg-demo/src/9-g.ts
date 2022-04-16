/**
 * @author 素燕（我有个公众号：素燕）
 * @description 分组，把多个图形合并到一起
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-分组';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    const gEl = document.createElementNS(namespace, 'g') as SVGGElement;
    gEl.setAttribute('id', 'suyan');
    gEl.style.stroke = 'red';

    const lineEl = document.createElementNS(namespace, 'line') as SVGLineElement;
    lineEl.setAttribute('x1', '10');
    lineEl.setAttribute('y1', '20');
    lineEl.setAttribute('x2', '500');
    lineEl.setAttribute('y2', '20');
    gEl.appendChild(lineEl);

    let circleEl = document.createElementNS(namespace, 'circle') as SVGCircleElement;
    // 指定圆形和半径
    circleEl.setAttribute('cx', '100');
    circleEl.setAttribute('cy', '100');
    circleEl.setAttribute('r', '50');
    gEl.appendChild(circleEl);

    svg.appendChild(gEl);

    // use 使用定义好的元素
    let useEl = document.createElementNS(namespace, 'use') as SVGUseElement;
    useEl.setAttribute('xlink:href', '#suyan');
    useEl.setAttribute('x', '10');
    useEl.setAttribute('y', '200');
    svg.appendChild(useEl);

    parentEl.appendChild(svg);

}());