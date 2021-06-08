/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(n != 1){
        if(set.has(n)){
            return false;
        }
        set.add(n);
        n = summer(n);
    }
    return true
};

var summer = function(n){
    let sum = 0;
    while (n > 0){
        let m = n % 10;
        sum += Math.pow(m, 2);
        n = Math.floor(n / 10);
    }
    return sum;
}

let nums = 19;
isHappy(nums)