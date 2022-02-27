/**
 * @author 素燕（我有个公众号：素燕）
 * @description toolbar
 * 由于 execCommand 方法已经废弃，故不在讨论这种实现方式
 */

/**
 * 加粗如何实现：
 */

const editorEl = document.querySelector('.editor-container') as HTMLDivElement;

editorEl.onblur = (e) => {
    console.log('editor blured', e);
    // 阻止编辑器失去焦点
    editorEl.focus();
};

editorEl.onfocus = (e) => {
    console.log('editor focused', e);
}

document.addEventListener('selectionchange', e => {
    const selection = window.getSelection();
    console.log('selection:', selection);
});

const bold = () => {
    let boldEl = document.querySelector('span[data-command="bold"]') as HTMLButtonElement;
    if (!boldEl) {
        return;
    }
    boldEl.addEventListener('click', (e) => {
        console.log('bold');
        editorEl.focus();
        e.preventDefault();
    });
}

bold();