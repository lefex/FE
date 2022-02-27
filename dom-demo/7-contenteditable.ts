/**
 * @author 素燕（我有个公众号：素燕）
 * @description 编辑节点
 */

 (function () {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const createDivEl = () => {
        const randomValue = Math.floor(Math.random() * 100) % 4;
        const name = 'div';
        let elm = document.createElement(name) as HTMLDivElement;
        elm.innerText = `create ${name} elm(${randomValue})`;
        rootEl.appendChild(elm);
    };
    // createDivEl();
    // createDivEl()
    // createDivEl();

    // 设置元素可编辑
    rootEl.contentEditable = 'true';

    const config: MutationObserverInit = {
        /** Set to a list of attribute local names (without namespace) if not all attribute mutations need to be observed and attributes is true or omitted. */
        attributeFilter: [],
        /** Set to true if attributes is true or omitted and target's attribute value before the mutation needs to be recorded. */
        attributeOldValue: true,
        /** Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is specified. */
        attributes: true,
        /** Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified. */
        characterData: true,
        /** Set to true if characterData is set to true or omitted and target's data before the mutation needs to be recorded. */
        characterDataOldValue: true,
        /** Set to true if mutations to target's children are to be observed. */
        childList: true,
        /** Set to true if mutations to not just target, but also target's descendants are to be observed. */
        subtree: true
    };

    const observer = new MutationObserver((mutationList, observer) => {
        console.log('DOM changed');
        for (const mutation of mutationList) {
            MutationRecord;
            console.log('mutation', mutation);
        }
    });

    observer.observe(rootEl, config);

    // 文本选择时触发事件
    document.addEventListener('selectionchange', event => {
        const selection = window.getSelection();
        console.log('selection:', selection);
    });

    // 输入时，内容还未插入文本框中
    document.addEventListener('compositionstart', e => {

    });

    document.addEventListener('compositionend', e => {

    });

    const selection = window.getSelection();
    console.log('selection first', selection);
}());