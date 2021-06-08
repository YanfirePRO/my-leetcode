/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dayAll = new Array(366);
    let daysSet = new Set(days);
    console.log(daysSet)
    var dp = function(i){
        if(i > 365){
            return 0
        }
        //记忆
        if(dayAll[i]){
            return dayAll[i];
        }
        if(daysSet.has(i)){
            dayAll[i] = Math.min(dp(i+1) + costs[0], dp(i+7) + costs[1], dp(i+30) + costs[2])
        } else{
            dayAll[i] = dp(i + 1);
        }
        return dayAll[i]
    }
    return dp(1);
};

let days = [1,2,3,4,5,6,7,8,9,10,30,31]; 
let costs = [2,7,15];
console.log(mincostTickets(days, costs));

