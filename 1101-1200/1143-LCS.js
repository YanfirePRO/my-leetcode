var longestCommonSubsequence = function(text1, text2){
    let l1 = text1.length;
    let l2 = text2.length;
    // let dp = new Array(l1 + 1).fill(new Array(l2 + 1).fill(0));
    let dp = Array.from(new Array(l1+1),() => new Array(l2+1).fill(0));
    console.log(dp)
    for(let i=1;i<=l1;i++){
        for(let j=1;j<=l2;j++){
            console.log(dp[i][j],'------', i, '--------', j);
            if(text1[i - 1] == text2[j - 1]){      
                dp[i][j] = dp[i-1][j-1] + 1;
            } else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        // if(dp[13][11]){
        //     console.log(dp[13][11])
        // }
    }
    return dp[l1][l2]
}
// var longestCommonSubsequence = function(text1, text2) {
//     let n = text1.length;
//     let m = text2.length;
//     let dp = Array.from(new Array(n+1),() => new Array(m+1).fill(0));
//     for(let i = 1;i <= n;i++){
//         for(let j = 1;j <= m;j++){
//             if(text1[i-1] == text2[j-1]){
//                 dp[i][j] = dp[i-1][j-1] + 1;
//             }else{
//                 dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
//             }
//         }
//     }
//     return dp[n][m];
// };


console.log(longestCommonSubsequence("program","algorithm"))