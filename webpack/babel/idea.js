/**
 * @author 公众号：素燕，帮助 10W 人入门并进阶前端
 */

let code = `function greet(input) {
    return input ?? "Hello world";
    }`;
const compilerCode = code => {
    let retCode = code;
    if (code.indexOf('??') !== -1) {
        retCode = `function greet(input) {
            return input != null ? input : "Hello world";
            }`;
    }
    return retCode;
}
const retCode = compilerCode(code);

let name = '素燕';
// 代码一
const line = `公众号${name}`
// 代码二
const line = '公众号'  + name;