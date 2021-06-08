// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
//1、动态规划
/**
 * @param {string} 
 * @return {string}
 */

let s = "babad"
// var longestPalindrome = function(s) {
//     if(!s || s.length == 1){
//         return s
//     }

//     let left = 0, right = 0;
//     let length = s.length;
//     let a = [];
    
//     for(let i = length - 2;i >= 0;i--){
//         a[i] = [];
//         a[i][i] = true;
//         for(let j = i + 1; j < length;j++){
//             console.log("i", i, "j", j);
//            if(s[i] == s[j] && (j - i < 3 || a[i+1][j-1])){
//                a[i][j] = true;
//            }
//            console.log(s[i],"s[i]",s[j], "s[j]");

//            console.log(a[i][j],"a[i][j]");

//            if(a[i][j] && (right - left < j - i)){
//                 left = i;
//                 right = j;
//            }
//            console.log(left,"left",right, "right");
//         }
//     }
//     return s.substring(left, right + 1);
    
// };

//2、manacher算法

function toManacher(s){
    let s_new = "#";
    for(let i = 0;i<s.length;i++){
        s_new += s[i];
        s_new += "#";
    }
    return s_new
}

function manacher(s){
    let radius = [];
    let C = -1;
    let R = -1;
    let s_new = toManacher(s);
    let MAX = 0;
    let max_s = "";
    for(let i=0;i<s_new.length;i++){
        
        radius[i] = i > R ? 1 : Math.min(radius[2*C - i], R - i + 1);
        console.log(radius[i], i, "i")
        while(i + radius[i] < s_new.length && i - radius[i] > -1){
            if(s_new[i + radius[i]] == s_new[i - radius[i]]){
                radius[i]++;
                console.log(radius[i])
            } else{
                break;
            }
        }
        if(i + radius[i] > R){
            R = i + radius[i] - 1;
            C = i;
        }
        // MAX = Math.max(MAX, radius[i]);
        if(radius[i] > MAX){
            MAX = radius[i];
            console.log(MAX, "MAX")
            max_s = s_new.substring(i - radius[i] + 1, i + radius[i])
            console.log(s_new, "s_new")
            console.log(max_s, "max_s")
        }
    }
    let max_str = ""; 
    for(let i=1;i< max_s.length;i += 2){
        max_str += max_s[i];
    }
    return max_str
}

console.log(manacher(s))