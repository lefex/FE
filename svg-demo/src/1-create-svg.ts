/**
 * @author 素燕（我有个公众号：素燕）
 * @description 创建 SVG
 *
 * 继承关系：
 * SVGSVGElement -> SVGGraphicsElement -> SVGElement -> Element -> Node -> EventTarget
 */

(function() {
    // safari 画布有最大的宽度限制
    const parentEl = document.getElementById('content');
    const namespace = 'http://www.w3.org/2000/svg';

    // svg默认宽高的 300*150
    const svg = document.createElementNS(namespace, 'svg') as SVGSVGElement;
    // 可直接通过 style 设置样式
    svg.style.border = '1px solid #222';
    svg.classList.add('svg-container');
    console.log(`width: ${svg.width}, height: ${svg.height}`);

    parentEl.appendChild(svg);

}());