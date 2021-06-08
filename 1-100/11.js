/**
 * @param {number[]} height
 * @return {number}
 */
//穷举
// var maxArea = function(height) {
//     let length = height.length;
//     let max = 0;
//     for(let i = 0;i < length - 1;i++){
//         for(let j = i+1;j< length;j++){
//             let area = Math.min(height[i], height[j]) *(j-i);
//             max = Math.max(max, area); 
//         }
//     }
//     return max
// };


//双指针
var maxArea = function(height) {
    let length = height.length;
    let left = 0;
    let right = length - 1;
    let max = 0;
    while(left < right){
        let area;
        if(height[left] < height[right]){
            area = height[left] * (right - left);
            left++;
        } else{
            area = height[right] * (right - left);
            right--;
        }
        max = Math.max(area, max);
    }
    return max
}
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));