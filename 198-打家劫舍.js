/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     //以index下标开始的最大值
//     var findMax = function(index){
//         if(index > len - 1){
//             return 0
//         }
//         if(hasMax.has(index)){
//             return hasMax.get(index)
//         }
//         let j = index + 2;
//         let max = nums[index];
//         while(j < len){
//             max = Math.max(max, nums[index] + findMax(j));
//             // console.log(index, nums[index], j, max)
//             j++;
//         }
//         hasMax.set(index, max)
//         // console.log("当前的值", nums[index])
//         // console.log(index, max)
//         return max
//     }

//     let len = nums.length;
//     if(!len){
//         return 0
//     }
//     let hasMax = new Map();
//     let MAX_RES = 0;
//     for(let i=0;i<nums.length;i++){
//         MAX_RES = Math.max(MAX_RES, findMax(i)); 
//     }
//     console.log(MAX_RES)
//     return MAX_RES
// };

//动态规划
var rob = function(nums) {
    let len = nums.length;
    if(!len){
        return 0
    }
    if(len == 1){
        return nums[0]
    }
    //前k项最大值dp[k - 1]
    let last_max = nums[0];
    let new_max = Math.max(last_max, nums[1]);
    for(let i=2;i<len;i++){
        let max = new_max;
        new_max = Math.max(last_max + nums[i], new_max);
        last_max = max;
    }
    console.log(new_max)
    return new_max;
}


rob([1,2,3,1])