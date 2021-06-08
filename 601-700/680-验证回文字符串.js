/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length;
    if(!len){
        return false
    }
    let left = 0;
    let right = len - 1;
    let chance = 1;
    let res = find(s, left, right, chance);
    console.log(res)
};
var find = function(s, left, right, chance){
    console.log(left, right)
    if(left >= right){
        return true
    }
    if(s[left] == s[right]){
        left++;
        right--;
        return find(s, left, right, chance);
    } else{
        if(chance == 0){
            return false
        }
        return find(s, left + 1, right, chance-1) || find(s, left, right-1, chance-1);
    }
}
validPalindrome("aba")
