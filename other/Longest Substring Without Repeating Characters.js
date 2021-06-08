// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

//滑动窗口 Set
function maxLength(str){
    let len = str.length;
    let set = new Set();
    let i = 0 , j = 0 ,ans = 0;
    while(i < len && j < len){
        if(!set.has(str.charAt(j))){
            set.add(str.charAt(j++));
            ans = Math.max(ans, j - i);
        }
        else{
            set.delete(str.charAt(i++));
        }
    }
    console.log(ans)
    return ans
}

maxLength('abba')

//优化滑动窗口 Map 当j 与 [i,j)范围内的j'重复时，可以直接跳过[i,j']之间的数，i = j' + 1

function lengthOfLongestSubstring(str){
    let len = str.length;
    let ans = 0;
    let map = new Map();
    for(let i=0,j=0;j<len;j++){
        if(map.has(str.charAt(j))){
            i = Math.max(map.get(str.charAt(j)) + 1, i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(str.charAt(j), j)
    }
    console.log(ans)
    return ans
}

lengthOfLongestSubstring('abba')

