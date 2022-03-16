/**
 * @author 素燕（我有个公众号：素燕）
 * @description 创建 SVG
 */

 (function() {
    // safari 画布有最大的宽度限制
    const parentEl = document.getElementById('content');
    const namespace = 'http://www.w3.org/2000/svg';

    // 创建一个svg
    const svg = document.createElementNS(namespace, 'svg');

    parentEl.appendChild(svg);

}());