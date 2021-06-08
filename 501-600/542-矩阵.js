/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let queue = [];
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] == 0){
                queue.push({i,j});
            }
            if(matrix[i][j] == 1){
                matrix[i][j] = -1
            }
        }
    }
    // console.log(matrix)
    let x = [-1, 1, 0, 0];
    let y = [0, 0, -1, 1];
    while(queue.length){
        let cur = queue.shift();
        for(let i=0;i<4;i++){
            // console.log("cur",cur)
            let new_x = cur.i + x[i];
            let new_y = cur.j + y[i];
            // console.log("new_x",new_x)
            // console.log("new_y",new_y)
            
            if(new_x >= 0 && new_x < m && new_y >=0 && new_y < n && matrix[new_x][new_y] == -1){
                // console.log("matrix[new_x][new_y]",matrix[new_x][new_y])
                matrix[new_x][new_y] = matrix[cur.i][cur.j] + 1;
                // console.log("matrix[new_x][new_y]",matrix[new_x][new_y])
                queue.push({i: new_x, j: new_y});
            }
        }
    }
    // console.log(matrix)
    return matrix;
};

// updateMatrix([[0,0,0],[0,1,0],[1,1,1]]);