/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0] && grid[0].length || 0;
    let sum = 0;

    var find = function(i, j){
        if(i > m - 1 || j > n - 1 || i < 0 || j < 0) return
        if(grid[i][j] == 1){
            grid[i][j] = '#';
            find(i+1, j);
            find(i, j+1);
            find(i-1,j);
            find(i, j-1);
        }
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] == 1){
                sum++;
                find(i, j);
            }
        }
    }
    console.log(grid);
    return sum;
};

let grid = [["1","1","1"],["0","1","0"],["1","1","1"]];
console.log(numIslands(grid));