const run3 = function () {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const log = (type: string, e: Event) => {
        let logObj = {
        }
        console.log(type, e);
    };

    window.addEventListener('beforeunload', (e) => {
        // 页面关闭时调用
        log('beforeunload', e);
    });

    window.addEventListener('load', (e) => {
        // 页面内容加载完成才会回调
        log('load', e);
    });

    document.addEventListener('DOMContentLoaded', (e) => {
        // 无需等待页面所有内容加载完成，比如图片
        log('DOMContentLoaded', e);
    });

    window.addEventListener('hashchange', e => {
        log('hashchange', e);
    })
};
run3();