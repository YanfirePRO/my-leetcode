// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

//按排列方向取，只有0 和 numRows 行 需要改变方向
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

 let s="LEETCODEISHIRING";
 let numRows = 4;
var convert = function(s, numRows) {
    let cur_num = 0; //当前行
    let goging = false //当前向上
    let rows = [] //保存每行数据
    let str = "";
    for(let i = 0;i < s.length;i++){
        if(!rows[cur_num]){
            rows[cur_num] = "";
        }
        rows[cur_num] += s[i];
        console.log(rows)
        if(cur_num == 0 || cur_num == numRows - 1){
            goging = !goging;
        }
        cur_num += goging ? 1 : -1
    }
    console.log(rows, 'rows')
    for(let i=0;i<rows.length;i++){
        str += item;
    }
    return str;
};

console.log(convert(s, numRows))