import { getPosDes } from './utils/element-pos';

/**
 * viewport 可视区域，能够看到的区域；
 * el.getBoundingClientRect() 获取元素el相对于可视区域左上角与右下角的坐标
 * scrollHeight: 带有滚动区域是，包含了不可滚动的内容
 * clientHeight: 包含元素的padding，不包含border、margin、horizontal scrollbar
 * scrollTop: 滚动了多少
 *
 *
 * tip:
 * 是否滚动底部：Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
 * 是否可滚动：window.getComputedStyle(element).overflowY !== 'hidden'
 *
 * 在滚动区域内的坐标 Y：
 * curEl.rect.top - scrollEl.rect.top + scrollEl.scrollTop
 */

let midContainer = document.getElementById('content-container') as HTMLDivElement;

console.log(' midContainer = ', midContainer.clientHeight);

const addPos = (elementSel: string, resultSel: string) => {
    let line1El = document.querySelector(elementSel) as HTMLDivElement;
    line1El.addEventListener('click', () => {
        let rect = line1El.getBoundingClientRect();
        midContainer.scrollTo({
            left: 0,
            top: rect.top
        });
    });
    let clintRect = line1El.getBoundingClientRect();
    let rect1El = document.querySelector(resultSel) as HTMLDivElement;
    rect1El.innerText = `${getPosDes(rect1El).join('   ')}\n${JSON.stringify(clintRect)}`;
}

const updatePos = (elementSel: string) => {
    let line1El = document.querySelector(elementSel) as HTMLDivElement;
    let clintRect = line1El.getBoundingClientRect();
    return `${elementSel}: ${JSON.stringify(clintRect)}`;
}

addPos('.line1', '.rect1');
addPos('.line2', '.rect2');
addPos('.line3', '.rect3');

const updateLinesPos = () => {
    let poses = [];
    poses.push(updatePos('.line1'));
    poses.push(updatePos('.line2'));
    poses.push(updatePos('.line3'));
    poses.push(updatePos('.container'));

    let rect1El = document.querySelector('.outer-content') as HTMLBodyElement;
    rect1El.innerText = `${poses.join('\n')}`;
};
updateLinesPos();

midContainer.addEventListener('scroll', () => {
    // updateLinesPos();
    console.log('midContainer scrollTop = ', midContainer.scrollTop);
});

/**
 * 获取可视区域的size
 * 算上了 scroll 区域的高度
*/
const getViewport = () => {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }
    } else {
        return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
        }
    }
};

/**
 * 可视区域的高度，不算滚动部分
 * @returns
 */
const getViewportClient = () => {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
};

console.log('viewport scroll size = ', getViewport());
console.log('viewport client size = ', getViewportClient());

window.addEventListener('keydown', (e) => {
    if (e.key === 'f') {
        updateLinesPos();
    }
});