/**
 * @author 素燕（我有个公众号：素燕）
 * @description SVG中使用图片
 */

import { createSvg, namespace } from './helper';

(function () {
    const titleEl = document.getElementById('title');
    titleEl.textContent = '图形-椭圆';
    const parentEl = document.getElementById('content');

    // 创建一个svg
    const svg = createSvg();

    let imageEl = document.createElementNS(namespace, 'image') as SVGImageElement;
    imageEl.setAttribute('xlink:href', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20210621%2Fed3b6de5f476478e93cae9ab4deb4a62.jpeg&refer=http%3A%2F%2Fp5.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650500871&t=bd07ba8a48aed12ba5620341c5ce9f33');
    imageEl.setAttribute('x', '20');
    imageEl.setAttribute('y', '20');
    imageEl.setAttribute('width', '200');
    imageEl.setAttribute('height', '200');
    svg.appendChild(imageEl);


    parentEl.appendChild(svg);

}());