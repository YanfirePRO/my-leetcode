/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    //对s进行层序遍历
    if(!s.val){
        return false;
    }
    let cengxu_s = cengxu(s);
    let cengxu_t = cengxu(t);
    for(let i=0;i<cengxu_s.length;i++){
        let flag = true;
        if(cengxu_s[i].val == cengxu_t[0].val){
            let cengxu_child = cengxu(cengxu_s[i]);
            if(cengxu_child.length == cengxu_t.length){
                for(let j=0;j<cengxu_t.length;j++){
                    if(cengxu_t[j].val != cengxu_child[j].val){
                        flag = false;
                        break;
                    }
                }
            }
            if(flag){
                return true;
            }
        }
    }
    return false
};

var cengxu = function(t){
    let queue = [];
    let res = [];
    queue.push(t);
    while(queue.length){
        let node = queue.shift();
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
        res.push(node);
    }
    return res;
}
