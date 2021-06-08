/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let length = intervals.length;
    intervals.sort((a, b)=>{
        return a[0] - b[0] 
    })
    let left = 0;
    while(left < intervals.length - 1){
        //可以合并
        if(intervals[left][1] >= intervals[left + 1][0]){
            if(intervals[left][1] < intervals[left + 1][1]){
                intervals[left][1] = intervals[left + 1][1];
                intervals.splice(left+1, 1);
            } else{
                intervals.splice(left+1, 1);
            }
        } else{
            left++;
        }
        
    }
    // console.log(intervals)
    return intervals
};
merge([[1,4],[0,3],[3,5]])