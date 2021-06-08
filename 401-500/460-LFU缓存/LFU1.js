/**自己写的粗暴方法，大方向是对的
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.useArr = [];
    this.useObj = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let index = this.useArr.indexOf(key);
    if(index !== -1){
        this.useArr.splice(index, 1);
        this.useArr.push(key);
        this.useObj[key].useNum++;
        return this.useObj[key].value
    } else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    let arr = this.useArr;
    let obj = this.useObj;
    if(!this.capacity){
        return
    }
    const maxLen = this.capacity;
    let index = arr.indexOf(key);
    //判断已经存在
    if(index !== -1){
        //重新插入
        let pre_arr = arr[index];
        obj[key].useNum++;
        obj[key].value = value;
        arr.splice(index, 1);
        arr.push(pre_arr);
    } else{
        //小于MAX_LENGTH
        if(arr && arr.length < maxLen){
            arr.push(key);
            obj[key] = {
                useNum: 1,
                value: value
            }
        } else{
            //去检查最不常使用的那个值
            let MIN_USE = {
                index: -1,
                val: Math.pow(2,20)
            }
            //数组下标越大，表示越最近使用
            for(let i = 0;i< maxLen;i++){
                if(obj[arr[i]] && obj[arr[i]].useNum < MIN_USE.val ){
                    MIN_USE.index = i;
                    MIN_USE.val = obj[arr[i]].useNum
                }
            }
            //取得最不常用的值，删除
            delete obj[arr[MIN_USE.index]];
            arr.splice(MIN_USE.index, 1);
            arr.push(key);
            obj[key] = {
                useNum: 1,
                value: value
            }
        }
    }
};