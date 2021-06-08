/**
 * 
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let len = s.length;
    if(!len){
        return ""
    }
    let stack_num = [];
    let stack_str = [];
    let point = 0;
    let res = ""
    while(point < len){
        console.log("point", point, s[point])
        if(s[point] == ']'){
            console.log("进入右括号处理")
            let flag = true
            let str = "";
            let strTotal = "";
            let strArr = [];
            while(flag){
                let pop = stack_str.pop();
                if(pop == '['){
                    flag = false;
                } else{
                    // str += pop;
                    strArr.push(pop);
                }
            }
            let num = parseInt(stack_num.pop());
            strArr = strArr.reverse();
            str = strArr.join('');
            for(let i=0;i<num;i++){
                strTotal += str;
            }
            // strTotal = strTotal.split('').reverse();
            // console.log(stack_str.length, strTotal)
            if(!stack_str.length && point == len - 1){
                res = strTotal;
                break
            }
            if(point == len - 1){
                res = stack_str.join('') + strTotal;
                break
            }
            stack_str.push(strTotal);
            console.log(stack_str);
            point++;
        } else{
            if(parseInt(s[point]) || parseInt(s[point]) == 0){
                console.log("进入数字处理")
                let flag = true;
                let num = "";
                while(flag){
                    if(parseInt(s[point]) || parseInt(s[point]) == 0){
                        num += s[point];
                        point++;
                    }else{
                        flag = false;
                    }
                }
                stack_num.push(num);
                // console.log(stack_num)
                // return stack_num
            } else{
                console.log("进入字符串处理")
                stack_str.push(s[point]);
                if(point == len - 1){
                    res = stack_str.join('');
                }
                point++;
            }
        }
    }
    console.log(res);
    return res;
};

decodeString("100[leetcode]");