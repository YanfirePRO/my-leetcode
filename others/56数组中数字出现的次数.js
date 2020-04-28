/*
* [1,2,10,4,1,4,3,3]
**/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    //异或操作，两个数相同，异或结果一定是0
    let len = nums.length;
    let res = 0;
    for(let i=0;i<len;i++){
        res = res ^ nums[i];
    }
    let posi = 1;
    while((res & posi) == 0){
        posi = posi << 1;
    }
    //分成两部分
    let div = 1;
    let resA = 0, resB = 0;
    for(let i=0;i<len;i++){
        if(posi & nums[i]){
            resA = nums[i] ^ resA;
        } else{
            resB = nums[i] ^ resB;
        }
    }
    return [resA, resB];
};

let nums = [1,2,10,4,1,4,3,3];
console.log(singleNumbers(nums))