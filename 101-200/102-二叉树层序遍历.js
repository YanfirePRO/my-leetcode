/*
102. 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    let res = [];
    let depth = 0;
    queue.push(root);
    while(queue && queue.length){
        let cur = queue.shift();
        if(res[depth]){
            res[depth].push(cur.val);
        } else{
            res[depth] = new Array();
            res[depth].push(cur.val);
        }
        if(!queue.length){
            depth++;
        }
        cur.left && queue.push(cur.left);
        cur.right && queue.push(cur.right);
    }
    console.log(res);
    return res
};