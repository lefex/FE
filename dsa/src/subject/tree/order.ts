/**
 * @author 素燕（我有个公众号：素燕）
 * @description 树的遍历
 */

import {
    SYTreeNode
} from './create';

/**
 * 层序遍历（广度优先）
 * @param root
 * 思路：
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
 */
export function levelOrder(root: SYTreeNode): number[][] {
    if (!root) {
        return null;
    }

    // 结果保存到二维数组中
    let ret: number[][] = [];
    // 先把根节点放到队列中
    let queue: SYTreeNode[] = [root];

    // 循环遍历队列中每个节点
    while (queue.length > 0) {
        let values = [];
        let size = queue.length;
        // 遍历当前层的所有节点
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            values.push(node.val);

            // 子节点加入队列
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        ret.push(values);
    }

    return ret;
};