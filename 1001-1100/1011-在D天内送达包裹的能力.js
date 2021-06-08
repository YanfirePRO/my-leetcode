/*
** 重点是如何想到使用二分法来解决这个问题
** 这么来思考：设载重x的船来运送，刚好D天内能够运送完毕，也就是说存在一个区间
** (-infinity, x) 这之间，不存在一个载重x能够在D天内运送完毕
** [x, +infinity) 存在任意载重x都能在D天内运送完毕
** 所以，就是要找到那个 最小x 能够在D天内运送完毕，这就是使用二分法来解决的基础
** 假设载重x能够m天内运送完毕，m < D,说明需要在left区域内寻找, Xans < X
** m > D, 说明需要在right区域内寻找，Xans > X
** m == D，找到最小X，即Xans = X
*/

function shipWithinDays(weights, D){
    let left = Math.max(...weights);
    let right = weights.reduce((total, item)=>{  return total += item }, 0);
    let mid = left;
    while(left < right){
        mid = Math.floor((left + right)/2);
        let m = 1;
        let sum = 0;
        console.log("left", left)
        console.log("mid", mid)
        console.log("right", right)
        for(let i=0;i<weights.length;i++){
            sum += weights[i];
            if(sum > mid){
                sum = weights[i];
                m++;
            }
        }
        console.log("m", m)
        console.log("D", D)
        if(m <= D){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    console.log("载重为", mid)
    return left
}

let weights = [3,2,2,4,1,4]
let D = 3;
shipWithinDays(weights, D)