/**
 * 范型
 * 参考：
 * https://segmentfault.com/a/1190000022993503
 */

// 定义一个字典
export type Dictionary<T> = {
    [key: string]: T
}

export type ArrayLike<T> = {
    [key: number]: T;
    length: number;
}

export class Eventful<EvtDef extends Dictionary<string>> {

}

class Player extends Eventful<Dictionary<string>> {

}


