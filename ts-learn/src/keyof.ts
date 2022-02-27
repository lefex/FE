
interface Page {
    url: string;
}

type PageEvent = {
    // 页面DOM创建完成
    pageReady: Page;
    // 页面内容解析之前
    pageLoaded: boolean;
};

function on(action: keyof PageEvent, handler: () => void) {
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
})