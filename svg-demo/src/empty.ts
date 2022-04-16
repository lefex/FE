/**
 * @author 素燕（我有个公众号：素燕）
 * @description 创建 SVG
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-椭圆';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    parentEl.appendChild(svg);

}());