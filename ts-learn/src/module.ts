/**
 * @file module.ts
 * @author 公众号素燕
 * @description ts 中的模块
 */

export interface Status {
    code: number;
    msg: string;
}

export interface ResponseInterface {
    status: Status
    data: object
}