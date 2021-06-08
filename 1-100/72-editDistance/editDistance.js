
/*你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let D = new Array(word1.length + 1);
    for(let i = 0;i<word1.length + 1;i++){
        D[i] = new Array(word2.length + 1)
        console.log()
        for(let j = 0;j< word2.length + 1;j++){
            //边界
            D[i][0] = i;
            D[0][j] = j;
            if(i !== 0 && j !== 0){
                D[i][j] = Math.min(D[i-1][j] + 1, D[i][j-1] + 1, D[i-1][j-1] + (word1[i - 1] == word2[j - 1] ? 0 : 1));
            }
        }
    }
    return D[word1.length][word2.length]
};