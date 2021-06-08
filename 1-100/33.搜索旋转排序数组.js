/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    if(!len) return -1;
    let lo = 0;
    let hi = len;
    while(lo < hi){
        let mi = (lo + hi) >> 1;
        console.log(lo, mi, hi);
        if(target == nums[mi]) return mi;
        if(nums[lo] <= nums[mi]){
            if(target < nums[mi] && nums[lo] <= target){
                hi = mi;
            } else{
                lo = mi + 1;
            }
        } else{
            if(nums[mi] < target && target <= nums[hi - 1]){
                lo = mi + 1;
            } else{
                hi = mi;
            }
        }
    }
    return -1
};

let nums = [5,1,3];
let target = 3;
console.log(search(nums, target));
