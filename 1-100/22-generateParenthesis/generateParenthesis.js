/*数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例：
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
*/

/**
 * 1、dfs
 */

 /**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let cur_str = '';
    let left = n;
    let right = n;
    dfs(left, right, cur_str, res);
    return res
};

var dfs = function(left, right, cur_str, res){

    if(left == 0 && right == 0){
        res.push(cur_str);
        return 
    }

    if( left > 0 ){
        dfs(left - 1, right, cur_str + '(', res);
    }

    if( right > left){
        dfs(left, right - 1, cur_str + ')', res);
    }

    
}

let e = generateParenthesis(3);
console.log(e)