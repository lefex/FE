"use strict";
function on(action, handler) {
    if (action === 'pageLoaded') {
        if (handler) {
            handler();
        }
    }
    else if (action === 'pageReady') {
        if (handler) {
            handler();
        }
    }
}
on('pageLoaded', () => {
    console.log('page loaded');
});
