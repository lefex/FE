/**
 * @file module_import.ts
 * @author 公众号素燕
 * @description ts 中的模块导入
 */
function getUserInfo(uid) {
    // 返回的结果必须遵循 ResponseInterface 接口
    let res = {
        status: {
            code: 0,
            msg: 'success'
        },
        data: {
            name: 'suyan'
        }
    };
    return res;
}
export {};
