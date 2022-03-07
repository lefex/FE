/**
 * @author 素燕（我有个公众号：素燕）
 * @description 前序、中序、后序遍历
 */

 import {
    SYTreeNode
} from './create';

/**
 * 前序遍历（深度优先，递归实现）
 * 遍历顺序：根、左、右
 * @param root 树的根节点
 */
export function preorderTraversal(root: SYTreeNode): number[] {
    let ret: number[] = [];

    const preorder = (root: SYTreeNode) => {
        if (!root) {
            return;
        }
        // 根节点加入数组中
        ret.push(root.val);
        // 先遍历左子树
        preorder(root.left);
        // 遍历右子树
        preorder(root.right);
    };

    preorder(root);

    return ret;
}

/**
 * 中序遍历（深度优先，递归实现）
 * 先左子树，然后根节点，最后右子树
 * @param root 树的根节点
 */
 export function inorderTraversal(root: SYTreeNode): number[] {
    let ret: number[] = [];

    const inorder = (root: SYTreeNode) => {
        if (!root) {
            return;
        }
        // 先遍历左子树
        inorder(root.left);
        // 根节点加入数组中
        ret.push(root.val);
        // 遍历右子树
        inorder(root.right);
    };

    inorder(root);

    return ret;
}

/**
 * 后序遍历（深度优先，递归实现）
 * 遍历顺序：左、右、根
 * @param root 树的根节点
 */
 export function postorderTraversal(root: SYTreeNode): number[] {
    let ret: number[] = [];

    const postorder = (root: SYTreeNode) => {
        if (!root) {
            return;
        }
        // 先遍历左子树
        postorder(root.left);
        // 遍历右子树
        postorder(root.right);
        // 根节点加入数组中
        ret.push(root.val);
    };

    postorder(root);

    return ret;
}
