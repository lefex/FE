/**
 * in 的使用
 */

type ElementEventName = 'click' | 'dblclick'| 'sycustom';

interface EventHandler {
    (info: Record<string, any>): void;
}

type SYEvent = {
    // 包含了 ElementEventName 中所有的名称
    [key in ElementEventName]: EventHandler
}

// 定义的属性需要包含全部
let action: SYEvent = {
    click: info => {

    },
    dblclick: info => {

    },
    sycustom: info => {

    }
}
console.log(action);