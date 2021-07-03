/**
 * @file util.ts
 * @author 素燕（公众号素燕），更多 https://lefex.gitee.io/
 * @description 工具函数
 */

interface Options {
    type: number;
    value: string;
}

export function getContent(): string {
    let datas: Options[] = [];
    datas.push({
        type: 1,
        value: '今天是星期一，阳光明媚',
    });
    datas.push({
        type: 3,
        value: '今天是星期三，愉快地工作',
    });
    let date = new Date();
    let day = date.getDay();
    for (const item of datas) {
        if (day === item.type) {
            return item.value;
        }
    }
    return '关注公众号素燕：学前端知识';
}