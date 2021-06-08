/**
 * @param {number[]} stones
 * @return {boolean}
 */
//从k位置往前找
//先找k-1, k与k-1的差值stepsK = stones[k] - stones[k-1]
//再从k-1开始找, 与它距离在 stepsK - 1 <= steps(K - 1) <= stepsK + 1 的项。
//如果这个项的位置 1<= Kx < k - 1，那么满足条件
//如果没找到 或者 Kx = 0，那么不满足，直接退出。
//满足条件：steps 更新 steps = stones[K - 1] - stones[Kx];
//再从Kx的开始往前找, 与它距离在stepsKx - 1 到 stepsKx + 1之间的值。
var canCross = function(stones) {
    let len = stones.length;
    let last = stones[len - 1];
    let ret = false;
    for(let i=len - 2;i >= 0; i--){
        let steps = last - stones[i];
        let index = i;
        let cur_index = i;
        while(index> 0){
            let newStep = stones[cur_index] - stones[index - 1];
            if(newStep > steps + 1){
                break
            }
            if(newStep >= steps-1 && newStep <= steps + 1){
                steps = newStep;
                cur_index = index - 1;
            }
            index--;
        }
        if(index == 0 && steps == 1){
            ret = true
            break
        }
    }
    return ret
};


canCross([0,1])