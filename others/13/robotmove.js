/*面试题13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 1：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20 */

/*DFS 深度优先*/
/*位数和*/
var sum = function(num){
    let sum = 0;
    let cur;
    while(parseInt(num / 10)){
        cur = num % 10;
        num = parseInt(num / 10);
        sum = sum + cur;
    }
    return sum + num;
}

var movingCount = function(m, n, k) {
    let visited = new Array(m);
    // visited.forEach(element => {
    //     console.log(element)
    //     element = new Array(n)
    // });
    for(let i = 0;i<m;i++){
        visited[i] = new Array(n)
    }
    console.log('visited', visited[0][0])
    function dfs(i, j, si, sj){
        if(i < 0 || i >= m || j < 0 || j >= n || si + sj > k || visited[i][j]) return 0
        visited[i][j] = true;
        console.log('visited',i,j, visited[i][j])
        return 1 + dfs(i+1, j, sum(i+1), sum(j)) + dfs(i, j+1, sum(i), sum(j+1))
    }
    return dfs(0,0,0,0);
};

