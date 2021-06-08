/** 动态规划 + 二分法
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    //初始化记录数组
    let arr = new Array(K+1);
    for(let i = 0; i<K+1; i++){
        arr[i] = Array.from({length: N + 1}, n => -1 );
    }

    function dp(K, N){
        // console.log(N, 'N')
        if(arr[K][N] != -1){
            return arr[K][N];
        }
        if(K == 1) return N;
        if(N == 0) return 0;
        let res = Infinity;
        let low = 1;
        let high = N;
        // console.log(low, 'low', high, 'high')
        while(low <= high){
            let mid = Math.floor((low + high)/2);
            // let mid = low + high;
            let broken = dp(K-1, mid - 1);
            let no_broken = dp(K, N - mid);
            if(broken > no_broken){
                high = mid - 1;
                res = Math.min(res, broken + 1);
            } else{
                low = mid + 1;
                res = Math.min(res, no_broken + 1);
            }
        }
        // for(let i=1;i<N+1;i++){
        //     // console.log(K, 'K', N, 'N', res);
        //     res = Math.min(res,  Math.max(dp(K, N-i), dp(K-1, i-1))+ 1);
        // }
        arr[K][N] = res;
        return res
    }

    let fin = dp(K, N)
    console.log(fin)
    return fin
};

superEggDrop(2, 6);

