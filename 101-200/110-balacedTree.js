/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**自顶向下寻找
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true; 
    if(Math.abs(height(root.left) - height(root.right)) > 1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

var height = function(root){
    if(!root) return -1;
    if(!root.left && !root.right) return 0;
    return Math.max(height(root.left), height(root.right)) + 1
}