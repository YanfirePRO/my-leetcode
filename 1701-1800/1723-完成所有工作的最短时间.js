// 给你一个整数数组 jobs ，其中 jobs[i] 是完成第 i 项工作要花费的时间。

// 请你将这些工作分配给 k 位工人。所有工作都应该分配给工人，且每项工作只能分配给一位工人。工人的 工作时间 是完成分配给他们的所有工作花费时间的总和。请你设计一套最佳的工作分配方案，使工人的 最大工作时间 得以 最小化 。

// 返回分配方案中尽可能 最小 的 最大工作时间 。
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    jobs.sort((a,b)=>{
        return a - b < 0
    })
    console.log("jobs", jobs)
    let left = Math.max(...jobs);
    let right = jobs.reduce((total,item)=>{
        return total + item
    },0)
    // while(left<right){
    //     console.log(left, "left")
    //     console.log(right, "right")
    //     let mid = Math.floor((left + right)/2);
    //     console.log(mid, "mid")
    //     let taskSum = 0;
    //     let taskPerson = 1;
    //     let flag = true;
    //     for(let i=0;i<jobs.length;i++){
    //         console.log("i", i);
    //         if(jobs[i] > mid){
    //             flag = false;
    //             break
    //         }
    //         taskSum += jobs[i];
    //         console.log("taskSum", taskSum)
    //         console.log("taskPerson", taskPerson)
    //         if(taskSum > mid){
    //             if(taskPerson < k){
    //                 taskSum = jobs[i];
    //                 taskPerson++;
    //             }else{
    //                 flag = false;
    //                 break
    //             }
    //         }
    //     }
    //     console.log("flag", flag)
    //     if(flag){
    //         right = mid;
    //     } else {
    //         left = mid + 1;
    //     }
    // }
    console.log("此时的left", left)
    return left
};

let jobs = [1,2,4,7,8]; 
let k = 2;
minimumTimeRequired(jobs, k)
