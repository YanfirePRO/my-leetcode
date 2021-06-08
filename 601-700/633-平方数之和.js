//给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    //枚举
    for(let a=1;a*a < c;a++){
        let b = Math.sqrt(c - a*a);
        if(b == Math.floor(b)){
            return true
        }
    }
    return false
};