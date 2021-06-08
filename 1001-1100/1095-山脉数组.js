/** 究极二分
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let mi = findHigh(mountainArr);
    let len = mountainArr.length();
    let lo = 0;
    let hi = len;
    let indexFront = findTargetUp(target, mountainArr, lo, mi);
    if(indexFront > -1){
        return indexFront
    }
    let indexBehind = findTargetDown(target, mountainArr, mi, hi);
    return indexBehind;
};

var findHigh = function(mountainArr){
     //二分查找山脉数组最大值
     let len = mountainArr.length();
     let hi = len;
     let lo = 0;
     while((hi - lo) > 1){
        let mi = (lo + hi) >> 1;
        if(mountainArr.get(mi - 1) < mountainArr.get(mi)){
            lo = mi;
        } else{
            hi = mi;
        }
     }
     return lo;
}

var findTargetUp = function(target, mountainArr, lo, hi){
    while(hi - lo > 1){
        let mi = (lo + hi) >> 1;
        if(mountainArr.get(mi) == target){
            return mi;
        }
        if(mountainArr.get(mi) < target){
            lo = mi + 1;
        } else {
            hi = mi;
        }
    }
    return mountainArr.get(lo) == target ? lo : -1;
}

var findTargetDown = function(target, mountainArr, lo, hi){
    while(hi - lo > 1){
        let mi = (lo + hi) >> 1;
        if(mountainArr.get(mi) == target){
            return mi;
        }
        if(mountainArr.get(mi) < target){
            hi = mi;
        } else{
            lo = mi;
        }
    }
    return mountainArr.get(lo) == target ? lo : -1;
}
