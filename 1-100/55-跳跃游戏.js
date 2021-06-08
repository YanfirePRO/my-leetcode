/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let length = nums.length;
    let set = new Set(); //记录数据是否重复计算
    let arr = new Array();
    let find = function(m){
        if(m == 0) return true;
        for(let i = m - 1; i >= 0;i-- ){
            if(nums[i] >= m - i){
                if(!set.has(i)){
                    set.add(i);
                    return find(i);
                }
            }
        }
        return false
    }
    return find(length - 1);
};

let nums = [3,2,2,0,4];
console.log(canJump(nums));


/**
 * 贪心算法
 */
var canJump = function(nums) {
    let length = nums.length;
    let max = 0;
    for(let i=0;i<length;i++){
        if(i <= max){
            max = Math.max(max, i + nums[i]);
            if(max >= length - 1){
                return true
            }
        }
    }
    return false
}
