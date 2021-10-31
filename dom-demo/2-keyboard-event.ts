/**
 * @author 素燕（我有个公众号：素燕）
 * @description 键盘事件
 */

(function() {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const log = (type: string, e: KeyboardEvent) => {
        let logObj = {
            key: e.key,
            char: e.char,
            // keyCode ASCII码值
            keyCode: e.keyCode
        }
        console.log(type, JSON.stringify(logObj));
    };

    document.addEventListener('keydown', (e) => {
        log('keydown', e);
    });

    document.addEventListener('keypress', (e) => {
        log('keypress', e);
    });

    document.addEventListener('keyup', (e) => {
        log('keyup', e);
    });
}());