/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arrMap = new Map();
    let index = 0
    while(index < nums.length){
        let v = nums[index];
        if(!arrMap.has(v)){
            arrMap.set(v, 1);
        } else {
            let count = arrMap.get(v) + 1;
            if(count == 3){
                arrMap.delete(v);
            } else {
                arrMap.set(v, count)
            }
        }
        index++;
    }
    return [...arrMap.keys()][0]
};

singleNumber([2,2,3,2])