/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let len = nums.length;
    let left = 1;
    let right = len - 1;
    let ans = -1;
    while(left <= right){
        let mid = (left + right) >> 1;
        let cnt = 0;
        for(let i=0;i<len;i++){
            if(nums[i] <= mid){
                cnt += 1;
            }
        }
        console.log("mid", mid, 'cnt', cnt)
        if(cnt <= mid){
            left = mid + 1;
        } else{
            right = mid - 1;
            ans = mid;
        }
    }
    console.log(ans)
    return ans
};

findDuplicate([1,1])