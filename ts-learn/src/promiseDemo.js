"use strict";
/**
 * Promise使用
 */
function usePromise() {
    let p = new Promise((resove, reject) => {
        let isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resove({
                    code: 10,
                    msg: 'success',
                    info: {
                        content: 'hellow'
                    }
                });
            }
            else {
                reject();
            }
        }, 1000);
    });
}
