export const namespace = 'http://www.w3.org/2000/svg';

export function createSvg() {
    const width = 800;
    const height = 600;

    // 创建一个svg
    const svg = document.createElementNS(namespace, 'svg');
    // 和HTML一样可以通过 style 设置样式
    svg.style.border = '1px dashed #222';
    svg.style.width = `${width}px`;
    svg.style.height = `${height}px`;
    svg.style.display = 'block';
    svg.style.margin = '0 auto';

    return svg;
}