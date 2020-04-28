var longestCommonSubsequence = function(text1, text2){
    let l1 = text1.length;
    let l2 = text2.length;
    let dp = new Array(l1 + 1).fill(new Array(l2 + 1));
    console.log(dp)
    for(let j=0;j<l2+1;j++){
        dp[0][j] = 0;
    }
    for(let i=0;i<l1+1;i++){
        dp[i][0] = 0;
    }
    // console.log(dp)
    for(let i=1;i<=l1;i++){
        for(let j=1;j<=l2;j++){
            console.log(dp[i][j])
            if(text1[i - 1] == text2[j - 1]){      
                dp[i][j] = dp[i-1][j-1] + 1;
                // console.log(dp[i-1][j-1], i-1, j-1)
                // console.log(dp[i][j])
                if(i == 14 && j == 10){
                    console.log("i:14,j:11")
                    console.log(text1[i - 1])
                    console.log(dp[13][11])
                }
            } else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                // if(i == 13 && j == 11){
                //     console.log(dp[i][j], i, j)
                // }
                if(i == 14 && j == 10){
                    console.log("i:14,j:11")
                    console.log(dp[13][11])
                }
            }

            if(dp[13][11]){
                console.log(dp[13][11],'------------------')
            }
        }
    }
    return dp[l1][l2]
}

console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd"))