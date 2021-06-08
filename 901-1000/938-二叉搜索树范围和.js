/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let stack = [];
    stack.push(root);
    let sum = 0;
    while(stack.length){
        sum += nodeInArray(stack, low, high)
    }
    return sum
};
function nodeInArray(stack, low ,high){
    let node = stack.shift();
    if(!node){
        return 0
    }
    if(node.val < low){
        stack.push(node.right);
    } else if(node.val > high){
        stack.push(node.left);
    } else{
        stack.push(node.right);
        stack.push(node.left);
        return node.val
    }
    return 0
}