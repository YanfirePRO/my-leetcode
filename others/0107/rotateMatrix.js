/* 把N*N的矩阵旋转90度 */
/*1、用一个临时数组来保存*/
var rotate = function(matrix){
    let n = matrix.length;
    let matrix_new = new Array(matrix.length);
    for(let i = 0; i < matrix.length;i++){
        matrix_new[i] = new Array(matrix[i].length);
    }
    for(let i = 0; i < matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }
    for(let i = 0; i < matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            matrix[i][j] = matrix_new[i][j]
        }
    }
}

/*2、原地旋转 使用temp保存旋转前的值*/
var rotate = function(matrix){
    let temp;
    let n = matrix.length
    let lengthrow = n % 2 ? (n + 1) / 2 : (n / 2);
    let lengthcol = n % 2 ? (n - 1) / 2 : (n / 2) ;
    for(let i = 0;i< lengthrow;i++){
        for(let j=0;j< lengthcol;j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
    return matrix
}

/*3、旋转90度等同于 先上下水平翻转，再根据对角线折叠翻转*/