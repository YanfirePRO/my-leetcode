
/**遍历。。。超时了
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max_left = []; //当前位置左边最高的墙
    let max_right = []; //当前位置右边最高的墙
    max_left[0] = 0; //左边界值
    max_right[height.length - 2] = height[height.length - 1];//右边界值
    let min_height = 0;
    let height_sum = 0;
    for(let i=1;i<height.length;i++){
        max_left[i] = Math.max(max_left[i-1], height[i - 1]);
        // console.log(i, 'i', max_left[i], 'max_left')
        for(let j = height.length - 3; j >= i;j--){
            max_right[j] = Math.max(max_right[j + 1], height[j + 1])
            // console.log(j, 'j', max_right[j], 'max_right')
        }
        min_height = Math.min(max_left[i], max_right[i]);
        height_sum = min_height > height[i] ? height_sum + (min_height - height[i]) : height_sum;
    }

    return height_sum
};

//在方法1的基础上优化
//左边最高无需数组
//右边最高一次循环记录，不要嵌套
var trap = function(height) {
    let max_left = 0; //当前位置左边最高的墙
    let max_right = []; //当前位置右边最高的墙
    max_right[height.length - 2] = height[height.length - 1];//右边界值
    let min_height = 0;
    let height_sum = 0;
    for(let j = height.length - 3; j >= 1;j--){
        max_right[j] = Math.max(max_right[j + 1], height[j + 1])
    }
    for(let i=1;i<height.length;i++){
        max_left = Math.max(max_left, height[i - 1]);        
        min_height = Math.min(max_left, max_right[i]);
        height_sum = min_height > height[i] ? height_sum + (min_height - height[i]) : height_sum;
    }

    return height_sum
};


//在方法2的基础上，加入指针。
//难点在指针什么时候从左往右，什么时候从右往左
var trap = function(height) {
    let max_left = 0; //当前位置左边最高的墙
    let max_right = 0; //当前位置右边最高的墙
    let left = 1;
    let right = height.length - 2; //左右指针
   
    for(let j = height.length - 3; j >= 1;j--){
        max_right[j] = Math.max(max_right[j + 1], height[j + 1])
    }
    for(let i=1;i<height.length;i++){
        max_left = Math.max(max_left, height[i - 1]);        
        min_height = Math.min(max_left, max_right[i]);
        height_sum = min_height > height[i] ? height_sum + (min_height - height[i]) : height_sum;
    }

    return height_sum
};