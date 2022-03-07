/**
 * @author 素燕（我有个公众号：素燕）
 * @description 求树的高度
 */

import { SYTreeNode } from "./create"

/**
 * 递归方式实现树的遍历
 * @param root 根节点
 * @returns 树的深度
 */
export function maxDepth(root: SYTreeNode): number {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * 非递归方式实现树的遍历
 * @param root 根节点
 * @returns 树的深度
 */
export function maxDepthIteration(root: SYTreeNode): number {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let depth = 0;
    while(queue.length !== 0) {
        depth += 1;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curNode = queue.shift();
            if (curNode.left) {
                queue.push(curNode.left);
            }
            if (curNode.right) {
                queue.push(curNode.right);
            }
        }
    }
    return depth;
}