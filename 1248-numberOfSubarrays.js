/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let oddArr = [-1];
  let res = 0;
  for(let i=0;i<nums.length;i++){
      if(isOdd(nums[i])){
          oddArr.push(i);
      }
  }
  oddArr.push(nums.length);
  for(let i=1;i + k < oddArr.length;i++){
      console.log(i, 'i', i+k, 'i+k');
      console.log(oddArr);
      res += (oddArr[i] - oddArr[i - 1]) * (oddArr[i + k] - oddArr[i + k - 1])
  }
  return res;
};

var isOdd = function(num){
    if(num % 2 == 1) return true;
    return false;
}

let nums = [2,2,2,1,2,2,1,2,2,2]
console.log(numberOfSubarrays(nums, 2))