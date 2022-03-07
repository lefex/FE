/**
 * @author 素燕（我有个公众号：素燕）
 * @description 树的入口
 */

import { createTree, SYTreeNode } from "./create"
import { levelOrder } from './order';
import {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal
} from "./traversal";
import {
    layout
} from '../../layout/tree';
import {
    render
} from '../../renderer/tree';

const createDemo = () => {
    let root = createTree([1, 2, 3, 4, 5, 6, 7]);
    console.log('the tree is ', root);

    let leverValues = levelOrder(root);
    console.log('level order reslut ', leverValues);

    let preOrderValues = preorderTraversal(root);
    console.log('preorder result ', preOrderValues);

    let inorderValues = inorderTraversal(root);
    console.log('inorder result ', inorderValues);

    let postorderValues = postorderTraversal(root);
    console.log('post order reslut ', postorderValues);

    let layoutRet = layout(root);
    console.log('layout tree ', layoutRet);

    render(layoutRet);
}

createDemo();