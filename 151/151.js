/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = "";
    let right = s.length;
    let revertArr = [];
    while(right > 0){
        right--;
        console.log(right, s[right])
        if(s[right] != " "){
            str = s[right] + str;
        } else{
            if(str != ""){
                revertArr.push(str);
                str = "";
            }
        }
        if(right == 0 && str){
            revertArr.push(str);
        }
    }

    return revertArr.join(" ");
};

let res = reverseWords("the sky is blue!")
console.log(res);