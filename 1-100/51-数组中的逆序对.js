/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let len = nums.length;
    let sum = 0;
    for(let i=0;i<len - 1;i++){
        for(let j=i+1;j<len;j++){
            console.log(i,j,len)
            console.log(nums[i],nums[j])
            console.log('------------------------')
            if(nums[i] > nums[j]){
                sum++;
            }
        }
    }
    console.log(sum)
    return sum;
};
let nums = [7,5,6,4];
reversePairs(nums)