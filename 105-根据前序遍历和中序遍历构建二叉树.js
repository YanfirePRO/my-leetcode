/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
    if (inorder.length === 0) return null // inorder不能再划分了
    let root = new TreeNode(preorder[0]) // 构建root
    let mid = inorder.indexOf(preorder[0]) // 找到root在inorder的位置
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)) 
    // 根据左子树的preorder和inorder序列，构建左子树
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    // 根据右子树的preorder和inorder序列，构建右子树
    return root
  };
  