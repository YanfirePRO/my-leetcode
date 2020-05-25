/*
*给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
*
*示例：
*
*输入: S = "ADOBECODEBANC", T = "ABC"
*输出: "BANC"
*说明：
*
*如果 S 中不存这样的子串，则返回空字符串 ""。
*如果 S 中存在这样的子串，我们保证它是唯一的答案。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //hash表记录T
    let hashmap = new Map();
    for(let i=0;i<t.length;i++){
        console.log(i, t[i])
        hashmap.set(t[i], 0);
    }
    //预处理s
    let prefix = false;
    let suffix = false;
    let pre_i = 0;
    let suf_i = s.length - 1;
    while(!suffix && suf_i >= 0){
        if(hashmap.get(s[suf_i]) == 0){
            suffix = true;
            break
        }
        suf_i--;
    }
    while(!prefix && pre_i < s.length){
        if(hashmap.get(s[pre_i]) == 0){
            prefix = true;
            break
        }
        pre_i++;
    }
    console.log(pre_i, suf_i);
    s = s.slice(pre_i, suf_i + 1)
    console.log(s);
    //双指针滑动窗口
    let left = 0;
    let right = 0;
    let len = s.length;

    while(right < len){
        if(hashmap.has(s[right])){
            hashmap.set(s[right],  hashmap.get(s[right]) + 1);
        }
    }
};

var check = function(hashmap){
    for(let val of hashmap){
        console.log(val)
    }
}
minWindow("DOBECODEBANC","ABC")