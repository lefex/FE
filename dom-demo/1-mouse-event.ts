/**
 * @author 素燕（我有个公众号：素燕）
 * @description 鼠标事件
 */

(function () {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const createChild = (index) => {
        let childEl1 =  document.createElement('div');
        childEl1.style.width = '100%';
        childEl1.style.height = '400px';
        childEl1.style.backgroundColor = 'red';
        childEl1.style.marginBottom = '20px';
        childEl1.id = 'child-' + index;
        childEl1.addEventListener('focus', (e: FocusEvent) => {
            console.log('focus', e);
        });
        childEl1.addEventListener('blur', (e: FocusEvent) => {
            console.log('blur', e);
        });
        childEl1.addEventListener('click', (e: MouseEvent) => {
            log('click', e);
        });
        return childEl1;
    }

    for(let i = 0; i < 4; i++) {
        rootEl.appendChild(createChild(i));
    }

    const log = (type: string, e: MouseEvent) => {
        let pos = {
            // 表示在当前作用的视图偏移值
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            // 表示在可视区域的 x 坐标
            clientX: e.clientX,
            // 表示在可视区域的 y 坐标
            clientY: e.clientY,
            x: e.x,
            y: e.y,
            // 鼠标在屏幕上的位置
            screenX: e.screenX,
            screenY: e.screenY,
            pageX: e.pageX,
            pageY: e.pageY
        }

        // 键盘按键
        let keys = [];
        if (e.shiftKey) {
            keys.push('shift');
        }
        if (e.altKey) {
           keys.push('alt');
        }
        if (e.ctrlKey) {
            keys.push('ctrl')
        }
        if (e.metaKey) {
            keys.push('meta');
        }

        if (e.button === 0) {
            // 按下鼠标左键
        }
        else if (e.button === 2) {
            // 按下鼠标右键
        }
        else if (e.button === 1) {
            // 按下鼠标中键，滚轮键
        }

        console.log(e.target.id, keys.join(','), type, JSON.stringify(pos));
    }

    const mousedown = (e: MouseEvent) => {
        log('mousedown', e);
    };

    const mousedup = (e: MouseEvent) => {
        log('mousedup', e);
    };

    const mousemove = (e: MouseEvent) => {
        // log(e);
    };

    // 主要关注点是获得光标的元素
    const mouseover = (e: MouseEvent) => {
        log('mouseover', e);
    };

    const mouseenter = (e: MouseEvent) => {
        log('mouseenter', e);
    };

    // 鼠标从元素内部移动到外部触发
    const mouseleave = (e: MouseEvent) => {
        log('mouseleave', e);
    };

    // 鼠标从一个元素移动到另一个元素触发
    // 主要关注点是获得失去光标的元素
    const mouseout = (e: MouseEvent) => {
        log('mouseout', e);
    };

    const click = (e: MouseEvent) => {
        log('click', e);
    }

    const dblclick = (e: MouseEvent) => {
        log('dbclick', e);
    }

    /**
     * 事件触发顺序，其中一个事件被终止后，下一个事件就不会被触发：
     * mousedown
     * mouseup
     * click
     * mousedown
     * mouseup
     * click
     * dblclick
     */

    rootEl.addEventListener('mousedown', mousedown);
    rootEl.addEventListener('mouseup', mousedup);
    rootEl.addEventListener('mousemove', mousemove);
    rootEl.addEventListener('mouseover', mouseover);
    rootEl.addEventListener('mouseenter', mouseenter);
    rootEl.addEventListener('mouseleave', mouseleave);
    rootEl.addEventListener('mouseout', mouseout);
    rootEl.addEventListener('click', click);
    rootEl.addEventListener('dblclick', dblclick);

    document.addEventListener('mousewheel', (e) => {
        // 鼠标滚轮移动
        console.log('mousewheel', e);
    });

    document.addEventListener('contextmenu', e => {
        // 阻止鼠标右键
        // e.preventDefault();
    })
}());