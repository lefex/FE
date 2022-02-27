/**
 * Promise使用
 */

interface RequestResult {
    code: number;
    msg: string;
    info: Record<string, any>;
}

function usePromise() {
    let p = new Promise<RequestResult>((resove, reject) => {
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
    })
}