/*给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    console.log(board)
    console.log("---------------------------")
    if(!board.length){
        return
    }
    let m = board.length;
    let n = board[0].length;
    //边界0, m - 1, 0 , n - 1;
    for(let i = 0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i == 0 || j == 0 || j == n - 1 || i == m - 1){
                //此情况下为边界
                if(board[i][j] == 'O'){
                    dfs(board, i, j);
                }
            }
        }
    }

    //处理最后的值
    for(let i = 0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] == "O"){
                board[i][j] = "X";
            } 
            if(board[i][j] == "#"){
                board[i][j] = "O";
            }
        }
    }
    console.log(board)
};

var dfs = function(board, i, j){
    let m = board.length;
    let n = board[0].length;
    if(i > m - 1 || j > n - 1 || i < 0 || j < 0 || board[i][j] == "X" || board[i][j] == "#"){
        return
    }
    board[i][j] = "#";
    dfs(board, i - 1, j)
    dfs(board, i + 1, j)
    dfs(board, i, j - 1)
    dfs(board, i, j + 1)
}

//let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
// let board = [["O","O"],["O","O"]]
let board = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]
solve(board);