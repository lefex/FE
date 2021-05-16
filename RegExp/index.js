// JS中支持正则表达式的方法

/**
 * RegExp
 * exec: 执行一个查询，找到返回一个数组，否则返回 null
 * test: 测试一个字符串，返回 true 或 false
 * 
 * String
 * match：查询符合所有结果的字符串，找到返回数组、否则返回 null
 * matchAll：返回一个迭代器
 * search：测试一个字符串，返回索引，未找到返回 -1
 * replace：查找到某个字符串并执行替换
 * replaceAll：查找到所有符合条件的字符串并进行替换
 * split：把字符串通过某个字符串进行分割，返回一个数组
 * 
 * test 和 search 用来测试某个字符串中是否满足正则表达式，性能更好
 * exec 和 match 用来查找满足正则表达式的字符串
*/

const reg = /suyan/g;
const text = 'I am suyan, age 18. You can learn fe with suyan. You can follow Suyan: https://github.com/lefex';
let ret;

// 正则表达式的方法
const useExec = () => {
    // 不带标识符 g
    const text = 'I am suyan. You can learn fe with suyan';
    let reg = /suyan/;
    let ret = reg.exec(text);
    console.log('exec: ', ret);
    /**
     exec:  [
        'suyan',
        index: 5,
        input: 'I am suyan. You can learn fe with suyan',
        groups: undefined
    ]
    */

    // 带有标识符 g 或 y，reg2 将是有状态的，可以遍历获取所有匹配结果
    // 不带标识是无状态的，使用 while 将出现死循环
    const reg2 = /suyan/g;
    let arr;
    while((arr = reg2.exec(text)) !== null) {
        // lastIndex 匹配上一次结果的索引
        console.log(`Found ${arr[0]}, next starts at ${reg2.lastIndex}`);
    }
    // Found suyan, next starts at 10
    // Found suyan, next starts at 39
}
// useExec();

const useTest = () => {
    const text = 'I am suyan. You can learn fe with suyan';
    let reg = /suyan/g;
    let ret = reg.test(text);
    console.log('test: ', ret);
    ret = reg.test(text);
    console.log('test: ', ret);
    ret = reg.test(text);
    console.log('test: ', ret);
}
// useTest();

// 字符串的方法
const useMatch = () => {
    const text = 'I am suyan. You can learn fe with suyan';
    // 不带 g 将返回第一个匹配到的结果
    const reg = /suyan/;
    ret = text.match(reg);
    /**
    match:  [
        'suyan',
        index: 5,
        input: 'I am suyan. You can learn fe with suyan',
        groups: undefined
    ]
    */
    console.log('match: ', ret);

    // 带有 g 标记将返回一个匹配结果的数组
    // 设置了 g 标签将不会返回组
    const reg2 = /suyan/g;
    ret = text.match(reg2);
    // match2:  [ 'suyan', 'suyan' ]
    console.log('match2: ', ret);
}
// useMatch();

const matchAll = () => {
    // matchAll 必须带有 g 表示
    const text = 'I am suyan. You can learn fe with suyan';
    let ret = text.matchAll(/suyan/g);
    for (const item of ret) {
        console.log('matchAll: ', item);
    }
    /**
     matchAll:  [
        'suyan',
        index: 5,
        input: 'I am suyan. You can learn fe with suyan',
        groups: undefined
    ]
    matchAll:  [
        'suyan',
        index: 34,
        input: 'I am suyan. You can learn fe with suyan',
        groups: undefined
    ]
    */
}
// matchAll();

// 字符串的方法
const useReplace = () => {
    const text = 'I am suyan. learn fe with suyan';
    // 如果是字符
    let ret = text.replaceAll('suyan', 'wsy');
    console.log('replace: ', ret);

    // 不带 g 将替换第一个符合条件的子字符串
    const reg = /suyan/;
    ret = text.replace(reg, 'wsy');
    // I am wsy. learn fe with suyan
    console.log('replace: ', ret);

    // 带有 g 标记将替换所有符合条件的子字符串
    const reg2 = /suyan/g;
    ret = text.replace(reg2, 'wsy');
    // I am wsy. learn fe with wsy
    console.log('replace: ', ret);
}
// useReplace();

// 字符串的方法
const useReplaceAll = () => {
    const text = 'I am suyan. learn fe with suyan';
    // 不带 g 将替换第一个符合条件的子字符串
    // ret = text.replaceAll('suyan', 'wsy');
    // replace:  I am wsy. You can learn fe with suyan
    console.log('replace: ', ret);

    // 带有 g 标记将替换所有符合条件的子字符串
    const reg2 = /suyan/g;
    ret = text.replaceAll(reg2, 'wsy');
    // replace:  I am wsy2. You can learn fe with wsy2
    console.log('replace: ', ret);
}
// useReplaceAll();

const useSearch = () => {
    const text = 'I am suyan. You can learn fe with suyan';
    let reg = /suyan/;
    let ret = text.search(reg);
    // 5
    console.log('search: ', ret);
}
// useSearch();

const useSplit = () => {
const text = 'I8am1suyan2You3with';
let reg = /\d/;
let ret = text.split(reg);
//  [ 'I', 'am', 'suyan', 'You', 'with' ]
console.log('split: ', ret);
}
// useSplit();

/**
 * 两种创建正则表达式的方法：
 * 1、字面量 \suyan\，常用于不会改变的正则表达式，性能会更好
 * 2、new RegExp('suyan')，常用语正则表达式不确定、或者会发生变化
 */

// 转义 Escaping


/**
 * 标识 Flag
 * d：
 * g：全局查询
 * i：忽略大小写
 * m：多行查询
 * s：允许 . 匹配换行字符
 * u：
 * y：
*/

const useCharGroup = () => {
    // 匹配 suyan，s不分大小写
    // [] 匹配一组可能出现的字符
    const text = 'Suyan is a suyan';
    const reg = /[Ss]uyan/g;
    let ret = text.match(reg);
    // [ 'Suyan', 'suyan' ]
    console.log('ret = ', ret);

    // 区间可表示多个字符
    const text2 = '$s.1e4G';
    // 匹配所有的数字、大小写字母
    // 如果要匹配特殊字符，使用 \ 即可
    const reg2 = /[a-zA-Z0-9]/g;
    ret = text2.match(reg2);
    // [ 's', '1', 'e', '4', 'G' ]
    console.log('ret = ', ret);

    const text3 = 'suyan';
    // ^ 取反，不能包含 sy
    // [ 'u', 'a', 'n' ]
    ret = text3.match(/[^sy]/g)
    console.log('ret = ', ret);
}
// useCharGroup();

const useQuickKey = () => {
    let text = 'suyan 12 age, n_name';
    // \w 表示 [a-zA-Z0-9_]，取反 \W
    let ret = text.match(/\w/g);
    // \s 匹配空白字符，空格、换行、tab
    ret = text.match(/\s/g);
    // \b 单词边界、分割成单词
    ret = text.split(/\b/g);
    console.log('ret = ', ret);
};
// useQuickKey();

const useStartEnd = () => {
    let text = 'suyan 12 age suyan, n_name';
    // 要匹配的字符串必须以 s 开头
    // suyan
    let ret = text.match(/^s\w+/g);
    console.log('ret = ', ret);
    // 要匹配的字符串必须以 e 结尾
    ret = text.match(/\w+e$/g);
    // n_name
    console.log('ret = ', ret);
}
useStartEnd();

const useAnyChar = () => {
    let text = 'n_name';
    // . 匹配任意字符，除了不能匹配 \n
    let ret = text.match(/n.../g);
    console.log('ret = ', ret);
}
// useAnyChar();

const useKeXuanChar = () => {
    let text = 'Suyan is Suuyan';
    // ? 可选字符，匹配 0 个或 1 个
    // Suyan Suuyan
    let ret = text.match(/Suu?yan/g);
    console.log('ret = ', ret);
}
// useKeXuanChar();

const useMoreChar = () => {
    let text = '010-89283 0101-8899';
    // {3} 重复3次，即3个字符
    let ret = text.match(/\d{3}-\d{4}/g);
    // {3,4} 重复 3到4次
    ret = text.match(/\d{3,4}-\d{4}/g);
    // {1,} 1到任意多个，可用+表示
    // {0,} 0到任意多个，可用 * 表示
    console.log('ret = ', ret);
}
// useMoreChar();

// 捕获组，并记住组中的内容
const useGroup = () => {
    const text = 'image size is 300x500';
    let reg = /(\d+)x(\d+)/;
    let ret = text.match(reg);
    /** 匹配结果中包含了组
     * ret =  [
        '300x500',
        '300',
        '500',
        index: 14,
        input: 'image size is 300x500',
        groups: undefined
    ]
     */
    console.log('ret = ', ret);
}
// useGroup()

// 非捕获组，捕获组中的内容，但是在结果中不会包含匹配到的结果
const useNotGroup = () => {
    const text = 'image size is 300x500';
    // （?:x）匹配 x，但是结果中不包含 x
    let reg = /(\d+)x(?:\d+)/;
    let ret = text.match(reg);
    /** 匹配结果中包含了组
     * ret =  [
        '300x500',
        '300',
        index: 14,
        input: 'image size is 300x500',
        groups: undefined
    ]
     */
    console.log('ret = ', ret);
}
// useNotGroup()

// 具名捕获组，并记住组中的内容
const useNameGroup = () => {
    const text = 'image size is 300x500';
    // （?<name>:x）匹配 x，并给组设置名字
    let reg = /(?<width>\d+)x(?<height>\d+)/;
    let ret = text.match(reg);
    /** 匹配结果中包含了组
    ret =  [
        '300x500',
        '300',
        '500',
        index: 14,
        input: 'image size is 300x500',
        groups: [Object: null prototype] { width: '300', height: '500' }
    ]
     */
    console.log('ret = ', ret.groups.width);
    console.log('ret = ', ret.groups.height);
}
// useNameGroup()

const useOr = () => {
    const text = 'Suyan and suyan';
    // 匹配 Suyan 或者 suyan
    ret = text.match(/suyan|Suyan/g);
    console.log('ret = ', ret);
}
// useOr()

const httpPort = () => {
    const text = 'http://wsy.fe:8899/user/get?id=12';
    // 匹配端口
    // 首先要是一个合法的 http
    // 从 http 中取出端口号
    // \w 表示数字和字母
    let ret = text.match(/^http(?:s?):\/\/[\w.]+:(\d+)/);
    console.log('ret = ', ret[1]);
}
// httpPort();
// function removeEndZero(num) {
//     if (num && num.indexOf('.') > 0) {
//         // 把所有结尾的 0 干掉
//         num = num.replace(/0+?$/, '');
//         // 如果结尾是 . 也干掉
//         num = num.replace(/[.]$/, '');
//     }
//     return num;
// }

const removeEndZero = text => {
    if (/\./.test(text)) {
        text = text.replace(/0+$/, '');
        text = text.replace(/\.$/, '');
    }
    return text;
}

console.log(removeEndZero('0.0100')); // 0.01
console.log(removeEndZero('0.01')); // 0.01
console.log(removeEndZero('1.00')); // 1
console.log(removeEndZero('100.')); // 100
console.log(removeEndZero('100')); // 100


