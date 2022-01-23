/**
 * @author 素燕（我有个公众号：素燕）
 * @description 相交事件
 */

(function() {
    const width = 1000;
    const height = 600;
    const count = 20;
    const pageSelector = 'sypage';
    const rootSelector = 'syroot';
    const datas = [];
    for (let i = 0; i < count; i++) {
        datas.push({
            text: `第${i + 1}页`,
            rendered: false
        })
    }
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const intersectionObeserver = new IntersectionObserver(entries => {
        // entries 多个元素
        // console.log('observer is called', entries.length, entries);
        entries.forEach(entry => {
            let pageIndex = entry.target.id.split('-')[1];
            if (entry.isIntersecting) {
                console.log('page appear', pageIndex, entry.intersectionRatio);
            }
            else {
                console.log('page disappear', pageIndex, entry.intersectionRatio);
            }
        });
    }, {
        // top right bottom left
        /**
         * 正数
         * 元素出现：比提前要早 200px 时触发监听
         * 元素消失：比提前要晚 200px 时触发监听
        */
        // rootMargin: `0px 0px 200px 0px`,
        /**
         * 负数
         * 元素出现：比提前要晚 200px 时触发监听
         * 元素消失：比提前要晚 200px 时触发监听
        */
        // rootMargin: `0px 0px -200px 0px`,

        /**
         * 正数
         * 元素出现：比提前要早 200px 时触发监听
         * 元素消失：比提前要晚 200px 时触发监听
        */
        rootMargin: `-400px 0px 0px 0px`,
        // root: document.getElementById(rootSelector),
        // 表示在哪些比例的情况下触发回调，可设置多个值，多个值触发多次回调
        threshold: [0],
        // 相交的根元素
        root: null
    });
    console.log('intersectionObeserver = ', intersectionObeserver);

    const createParentEl = () => {
        let parentEl = document.createElement('div');
        parentEl.id = `${rootSelector}`;
        parentEl.style.width = '100%';
        parentEl.style.height = `700px`;
        parentEl.style.border = '2px solid red';
        parentEl.style.overflowY = 'scroll';
        return parentEl;
    }

    const createChildren = () => {
        // let parentEl = createParentEl();
        let parentEl = null;
        parentEl && rootEl.appendChild(parentEl);
        for(let i = 0; i < datas.length; i++) {
            let pageEl = document.createElement('div');
            pageEl.id = `${pageSelector}-${i + 1}`;
            pageEl.style.width = `${width}px`;
            pageEl.style.height = `${height}px`;
            pageEl.style.border = '2px solid green';
            pageEl.style.position = 'relative';
            pageEl.style.margin = '20px';
            pageEl.style.textAlign = 'center';
            pageEl.style.fontSize = '30px';
            pageEl.innerText = datas[i].text;

            if (parentEl) {
                parentEl.appendChild(pageEl);
            }
            else {
                rootEl.appendChild(pageEl);
            }

            intersectionObeserver.observe(pageEl);
        }
    };

    createChildren();


}());