/**
 * @author 素燕（我有个公众号：素燕）
 * @description 监听DOM结构变化
 */

(function () {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const createRandomEl = () => {
        const names = ['div', 'span', 'p', 'button', 'h1'];
        const randomValue = Math.floor(Math.random() * 100) % 4;
        const name = names[randomValue] || 'div';
        let elm = document.createElement(name) as HTMLButtonElement;
        elm.innerText = `create ${name} elm(${randomValue})`;
        rootEl.appendChild(elm);
    };

    const createButton = () => {
        let btn = document.createElement('button') as HTMLButtonElement;
        btn.innerText = 'click me';
        btn.addEventListener('click', () => {
            createRandomEl();
        });
        rootEl.appendChild(btn);
    }

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

    setTimeout(() => {
        createButton();
    }, 2000);
}());