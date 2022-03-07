/**
 * @author 素燕（我有个公众号：素燕）
 * @description 树的渲染
 */

import { SYTreeNode } from "../subject/tree/create";
import { SYTreeLayoutOutput } from '../layout/tree';

export function render(layout: SYTreeLayoutOutput) {
    const rootEl = document.getElementById('content');
    if (!rootEl) {
        return;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
    svg.setAttribute('width', `${layout.canvasWidth}`);
    svg.setAttribute('height', `${layout.canvasHeight}`);

    rootEl.appendChild(svg);
}