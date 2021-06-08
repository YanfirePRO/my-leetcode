/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let res = 0;
    var mergeSort = function(lo, hi){
        // console.log(lo, hi)
        if(hi - lo < 2){
            return nums[lo];
        }
        let mi = (hi + lo) >> 1;
        mergeSort(lo, mi);
        mergeSort(mi, hi);
        merge(lo, mi, hi);
    }

    var merge = function(lo, mi, hi){
        let cacheA = [];
        for(let i = lo;i<mi;i++){
            cacheA[i-lo] = nums[i];
        }
        for(let i = lo, j = 0, k = mi;(j < mi - lo || k < hi);){//i 原数组下标 j cacheA下标，即左向量下标 k右向量下标
            //左向量小于右向量
            // console.log("内部", i, j,k)
            // console.log("当前", mi-lo)
            if((j < mi - lo) && (!(k < hi) || cacheA[j] <= nums[k])){
                nums[i++] = cacheA[j++];
                res += k - mi;
            }
            //右向量小于左向量
            if((k < hi) && (nums[k] < cacheA[j])){
                nums[i++] = nums[k++];
            }
            if((k < hi) && !(j < mi - lo) ){
                nums[i++] = nums[k++];
            }
        }
    }
    let len = nums.length;
    let lo = 0;
    let hi = len;
    mergeSort(lo, hi);
    console.log(res)
    console.log(nums)
    return res;
};

reversePairs([1,3,2,3,1])