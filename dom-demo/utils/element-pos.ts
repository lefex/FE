/**
 * @author 素燕（我有个公众号：素燕）
 * @description DOM元素位置计算
 */

export const posProperties = [
    'offsetTop', 'offsetLeft', 'offsetWidth', 'offsetHeight',
    'scrollTop', 'scrollLeft', 'scrollWidth', 'scrollHeight',
    'clientTop', 'clientLeft', 'clientWidth', 'clientHeight',
    'top', 'right', 'bottom', 'left',
    'offsetParent'
];

export function getPosDes(el: HTMLElement): string[] {
    let ret: string[] = [];
    for (const key in el) {
        const element = el[key];
        if (posProperties.indexOf(key) > -1) {
            ret.push(`${key}=${element}`);
        }
    }
    return ret;
}