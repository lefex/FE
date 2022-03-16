/**
 * @author 素燕（我有个公众号：素燕）
 * @description 获取元素的位置
 */

/**
 * getBoundingClientRect:
 *
 * The Element.getBoundingClientRect() method returns a DOMRect object providing information
 * about the size of an element and its position relative to the viewport.
 */

(function (){
    let el = document.getElementById('contnet') as HTMLDivElement;
    let rect = el?.getBoundingClientRect();
    /**
     * rect 为相对可视区域的坐标值（左上角、右下角）
     */

});