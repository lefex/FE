/**
 * @author 素燕（我有个公众号：素燕）
 * @description 创建树，树的数据结构定义
 */

export class SYTreeNode {
    val: number;
    left: SYTreeNode | null = null;
    right: SYTreeNode | null = null;

    constructor(val?: number, left?: SYTreeNode | null, right?: SYTreeNode | null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * 以数组的方式来创建一颗树
 * @param nodes 树中的节点
 * 数组为满二叉树时的所有结点：
 * 可以为：[1, 2, 3, 4, 5, 6, 7]
 * 或 [[1], [2, 3], [4, 5, 6, 7]]
 */
export function createTree(nodes: number[]): SYTreeNode {
    if (!nodes || nodes.length === 0) {
        return;
    }

    /**
     * 把 [1, 2, 3, 4, 5, 6, 7] 转换成 [[1], [2, 3], [4, 5, 6, 7]]
     */
    let desNodes = [];
    if (!Array.isArray(nodes[0])) {
        let layerIndx = 0;
        let total = 0;
        while(total < nodes.length) {
            let nodeCount = Math.pow(2, layerIndx);
            let layerNodes = nodes.slice(total, total + nodeCount);
            desNodes.push(layerNodes);
            layerIndx += 1;
            total += nodeCount;
        }
    }
    else {
        desNodes = nodes;
    }

    // 开始创建二叉树
    let depth = desNodes.length;
    let root = null;
    // 上层树中所有节点
    let lastLayerQueue: SYTreeNode[] = [];
    for (let layerIndex = 0; layerIndex < depth; layerIndex++) {
        let nodes = desNodes[layerIndex];
        if (!root) {
            root = new SYTreeNode(nodes[0]);
            lastLayerQueue = [root];
        }
        else {
            let queueSize = lastLayerQueue.length;
            for (let i = 0; i < queueSize; i++) {
                let node = lastLayerQueue.shift();
                // 创建左子树
                node.left = new SYTreeNode(nodes[2*i]);
                // 创建右子树
                node.right = new SYTreeNode(nodes[2*i + 1]);

                lastLayerQueue.push(node.left);
                lastLayerQueue.push(node.right);
            }
        }
    }

    return root;
}