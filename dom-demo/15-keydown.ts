/**
 * 键盘按下
 */

(function() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
        console.log('keydown', e);
    });

    window.addEventListener('keyup', e => {
        // console.log('keyup', e);
    });

    window.addEventListener('keypress', e => {
        // console.log('keypress', e);
    });
}());