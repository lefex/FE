/**
 * @author 素燕（我有个公众号：素燕）
 * @description JS中数组的基础方法
 */

/**
 * push: 推
 * push(...items: T[]): number
 * 从数组【末尾插入】一个或多个元素，返回【新数组】的长度
 */
export function push() {
    let nums = [8];
    // 从数组后面插入一个1
    nums.push(1);
    // nums: 8, 1
    // 从数组后面插入2，3，4，5，返回值为新数组的长度
    let length = nums.push(2, 3, 4, 5);
    // length: 6
    // nums: 8, 1, 2, 3, 4, 5
    console.log('push1', length, nums.join(','));

    let nums2 = [9, 0];
    // 把数组中每个值添加到另一个数组中
    nums.push(...nums2);
    // nums: 8, 1, 2, 3, 4, 5, 9, 0
}

/**
 * pop: 弹出
 * pop(): T | undefined;
 * 从数组【末尾】删除一个值，返回数组最后一个元素，如果是空数组，返回 undefined
 */
export function pop() {
    let nums = [8, 4, 6];
    let poped = nums.pop();
    // poped: 6
    // nums: 8, 4
    console.log('pop1', poped, nums.join(','));
}

/**
 * shift: 移动，去除
 * shift(): T | undefined;
 * 从数组【首位】删除一个值，返回数组第一个元素，如果是空数组，返回 undefined
 */
export function shift() {
    let nums = [8, 4, 6];
    let shifted = nums.shift();
    // shifted: 8
    // nums: 4, 6
    console.log('shift1', shifted, nums.join(','));
}

/**
 * unshift: 取消移动
 * unshift(...items: T[]): number;
 * 从数组【首位】插入一个或多个值，返回【新数组】长度
 */
export function unshift() {
    let nums = [8, 4, 6];
    // 从数组前面插入 2，3
    let length = nums.unshift(2, 3);
    // length: 5
    // nums: 2, 3, 8, 4, 6
    console.log('unshift1', length, nums.join(','));
}

/**
 * slice: 切片
 * slice(start?: number, end?: number): T[];
 * 从数组中取出一部分内容，有两个参数 start（起始索引），end（结束索引）
 *
 * tip1：不会改变原始数组的内容
 * tip2：[start, end) 包含起始索引，不包含结束索引，下标从 0 开始
 * tip3：浅拷贝，对于Object，slice后的数组元素改变会影响原数组的元素；对于number、boolean、string不受影响
 * tip4: 类数组转换成数组，let arr = [].slice.call(array-like);
 * tip5: 类数组转换成数组，llet arr = Array.prototype.slice.call(array-like);
 */
export function slice() {
    let nums = [1, 2, 3, 4, 5, 6, 7];
    // 取出第1个到第3个元素
    let sliceNums = nums.slice(1, 3);
    // sliceNums: 2, 3
    // nums: 1, 2, 3, 4, 5, 6, 7

    // 取出第4个到最后所有元素
    sliceNums = nums.slice(4);
    // sliceNums: 5, 6, 7

    // 取出最后2个元素
    sliceNums = nums.slice(-2);
    // sliceNums: 6, 7
    console.log('slice1', sliceNums.join(','), '<->',nums.join(','));
}

/**
 * splice: 拼接，连接
 * splice(start: number, deleteCount?: number): T[];
 * 在指定位置删除或插入元素，返回值为被删除元素组成的数组
 */
 export function splice() {
    let nums = [1, 4, 5, 6, 7];
    // 从第1个位置起，插入 2，3
    let spliceNums = nums.splice(1, 0, 2, 3);
    // spliceNums:
    // nums: 1, 2, 3, 4, 5, 6, 7

    nums = [1, 4, 5, 6, 7];
    // 从第1个位置处删除2个元素
    spliceNums = nums.splice(1, 2);
    // spliceNums: 4, 5
    // nums: 1, 6, 7

    nums = [1, 4, 5, 6, 7];
    // 从第2个位置开始，删除之后的所有元素
    spliceNums = nums.splice(2);
    // spliceNums: 5, 6, 7
    // nums: 1, 4

    nums = [1, 4, 5, 6, 7];
    // 从第1个位置处删除2个元素，插入9
    spliceNums = nums.splice(1, 2, 9);
    // spliceNums: 4, 5
    // nums: 1, 9, 6, 7

    console.log('splice1', spliceNums.join(','), '<->',nums.join(','));
}

/**
 * reduce: 减少
 * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
 * 遍历数组中的每个元素，通过 reducer 函数
 */
export function reduce() {
    let nums = [1, 2, 3, 4];
    // 求数组中各个元素的和
    let sum = nums.reduce((pre, cur, index) => pre + cur, 5);
    // sum: 15
    console.log('reduce1', sum);

    // 求数组中最大的元素
    let max = nums.reduce((pre, cur, index) => Math.max(pre, cur));
    // max: 4
    console.log('reduce2', max);

    // 对 persons 中的对象按年龄分组
    let persons = [
        {name: 'suyan', age: 20},
        {name: 'lefex', age: 10},
        {name: 'sy', age: 20},
        {name: '素燕', age: 21},
    ];
    let ageInfo = persons.reduce((pre, cur, index) => {
        if (!pre[cur.age]) {
            pre[cur.age] = [];
        }
        pre[cur.age].push(cur);
        return pre;
    }, {});
    /**
     * {
     *   20: [{name: 'suyan', age: 20}, {name: 'sy', age: 20}],
     *   10: [{name: 'lefex', age: 10}],
     *   21: [{name: '素燕', age: 21}]
     * }
     */
    console.log('reduce3', ageInfo);
}