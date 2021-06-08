/**一、
 * 计算完整数组和 arr，两个标记left和right,
 * 一个保存子数组是否已经判断过的数组，hadCaculate[left][right]
 * left = 0;right = arr.length - 1;
 * 对于数组，两种情况：
 * 1、left + 1,得到[left+1, right]的数组
 * 2、right - 1,得到[left, right - 1]的数组
 * 而对于子数组，依旧可以使用这样的操作，迭代获得结果
 * 超时-------
 * 
 * 
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var subarraysDivByK = function(A, K) {
//     var findSubArray = function(sum, left, right){
//         if(left > len - 1 || right < 0 || left > right || hadCaculate.has(`${left},${right}`)){
//             return
//         }
//         // console.log(sum, left, right,hadCaculate[left][right])
//         if(sum % K == 0){
//             total++;
//         }
//         hadCaculate.set(`${left},${right}`, 1);
//         findSubArray(sum - A[left], left + 1, right);
//         findSubArray(sum - A[right], left, right - 1);
//     }
//     let len = A.length;
//     if(!len){
//         return 0
//     }
//     // let hadCaculate = new Array(len);
//     // for(let i=0;i<hadCaculate.length;i++){
//     //     hadCaculate[i] = new Array(len).fill(0);
//     // }
//     let hadCaculate = new Map();
//     let left = 0;
//     let right = len - 1;
//     let sum = A.reduce((last, cur)=>{ return last + cur }, 0);
//     let total = 0;
//     findSubArray(sum, left, right);
//     console.log(total)
//     return total;
// };
// let k =5;
// let arr = [4,5,0,-2,-3,1]
// subarraysDivByK(arr, k)

/**
 * 二、前缀和
 */

var subarraysDivByK = function(A, K) {
    let len = A.length;
    if(len == 0){
        return 0
    }
    let preSum = 0;
    let count = 0;
    let hashmap = new Map();
    hashmap.set(0, 1);
    for(let i=0;i<len;i++){
        preSum = (preSum + A[i]) % K;
        if(preSum < 0){
            preSum += K;
        }
        if(hashmap.has(preSum)){
            let val = hashmap.get(preSum);
            count += val;
            hashmap.set(preSum, val + 1);
        } else{
            hashmap.set(preSum, 1);
        }
    }
    console.log(count)
    return count
};
let k =5;
let arr = [4,5,0,-2,-3,1]
subarraysDivByK(arr, k)