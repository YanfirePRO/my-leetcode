/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let deepvalue = new Map();
    var findNode = function(node, deep){
        if(!node.val) return 0
        if(!deepvalue.has(deep)){
            deepvalue.set(deep, node.val);
        }
        deep++;
        findNode(node.right, deep);
        findNode(node.left, deep);
    }
    findNode(root, 0);
    return [...deepvalue.values()]
};

