// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

//  [0001001010111010001]

// 示例 1:

// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
// 示例 2:

// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
//  

// 提示：

// 1 <= nums.length <= 105
// nums[i] 不是 0 就是 1

// 相同数量的0和1，把0替换成-1 也就是和为0，这样只要是连续和为0 就是含有相同数量01的子数组。
// 前缀和， 从0开始，记录到当前index的前缀和，如果到indexNew 的 前缀和 等于 index的前缀和，说明 indexNew - index 之间的前缀和等于0，
// length = indexNew - index ，更新Max(max, length)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let length = nums.length;
    let prefixSum = new Map();
    let sum = 0;
    let maxLength = 0;
    // if(length == 1){
    //     return 0
    // }
    prefixSum.set(0, {index:  -1});
    for(let i=0;i<length;i++){
        if(nums[i] == 0){
            sum += -1;
        } else {
            sum += nums[i];
        }
        if(!prefixSum.has(sum)){
            prefixSum.set(sum, { index: i})
        } else {
            let preIndex = prefixSum.get(sum).index;
            let length = i - preIndex;
            maxLength = Math.max(maxLength, length)
        }
    }
    // console.log(maxLength)
    return maxLength
};

findMaxLength([1])