/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0
    }
    let dp = new Array(len);
    for(let i=0;i<len;i++){
        dp[i] = new Array(2);
    }
    dp[0][0] = nums[0];
    dp[0][1] = nums[0];
    for(let i=1;i<len;i++){
        if(nums[i] >= 0){
            dp[i][0] = Math.min(nums[i], nums[i]*dp[i - 1][0]);
            dp[i][1] = Math.max(nums[i], nums[i]*dp[i-1][1]);
        } else{
            dp[i][0] = Math.min(nums[i], nums[i]*dp[i - 1][1]);
            dp[i][1] = Math.max(nums[i], nums[i]*dp[i-1][0]);
        }
    }
    let res = dp[0][1];
    for(let i=1;i<len;i++){
        res = Math.max(res, dp[i][1]);
    }
    return res
};