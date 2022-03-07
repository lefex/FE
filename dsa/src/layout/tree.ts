/**
 * @author 素燕（我有个公众号：素燕）
 * @description 树的布局计算
 */

import { SYTreeNode } from "../subject/tree/create";
import {
    SYTreeNodeDistance,
    SYTreeRadius,
    SYTreeRowDistance,
    SYCanvasPadding
} from '../theme/index';
import {
    SYPoint,
    SYRect
} from './share';
import {
    maxDepth
} from '../subject/tree/depth';

export class SYTreeLayoutNode extends SYTreeNode {
    rect: SYRect;
}

export interface SYTreeLayoutOutput {
    layoutNodes: SYTreeLayoutNode[];
    canvasWidth: number;
    canvasHeight: number;
    depth: number;
}

export function layout(root: SYTreeNode): SYTreeLayoutOutput {
    const depth = maxDepth(root);
    const maxNodeLength = Math.pow(2, depth - 1);
    const nodeWidth = SYTreeRadius * 2;
    let canvasHeight = SYCanvasPadding * 2
        + depth * nodeWidth
        + (depth - 1) * SYTreeRowDistance;
    let canvasWidth = maxNodeLength * nodeWidth
        + maxNodeLength / 2 * SYTreeNodeDistance
        + (maxNodeLength / 2 - 1) * SYTreeNodeDistance;

    const layoutRoot = new SYTreeLayoutNode(root.val);
    let layoutNodes = [];
    for (let layerIndex = depth - 1; layerIndex >= 0; layerIndex--) {
        let nodeCount = Math.pow(2, layerIndex);
        let layerNodes = [];
        for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
            const node = new SYTreeLayoutNode(nodeIndex);
            /**
             * 满二叉树左右孩子计算公式（n为第几个节点）：
             * 左孩子：2n
             * 右孩子：2n+1
             */
            if (layerIndex === depth - 1) {
                node.rect = {
                    x: nodeWidth * nodeIndex + (nodeIndex + 1) * SYTreeNodeDistance,
                    y: layerIndex * nodeWidth + layerIndex * SYTreeRowDistance,
                    w: nodeWidth,
                    h: nodeWidth
                };
            }
            else {
                let lastLayerNodes = layoutNodes[0];
                let leftNode = lastLayerNodes[2 * nodeIndex];
                node.rect = {
                    x: leftNode.rect.x + SYTreeNodeDistance,
                    y: layerIndex * nodeWidth + layerIndex * SYTreeRowDistance,
                    w: nodeWidth,
                    h: nodeWidth
                };
            }
            layerNodes.push(node);
        }
        // 层是进行的后续遍历，从头插入
        layoutNodes.unshift(layerNodes);
    }

    return {
        layoutNodes,
        canvasWidth,
        canvasHeight,
        depth
    };
}