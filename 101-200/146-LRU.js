var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.list = new DoubleNodeList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hashMap.has(key)){
        let node = this.hashMap.get(key);
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if(this.hashMap.has(key)){
        let node = this.hashMap.get(key);
        this.list.val = value;
    } else{
        let node = new ListNode(value);
        if(this.capacity == this.hashMap.size){
            node.next = this.list.head.next;
            node.pred = this.list.head;
            this.list.head.next = node;
            node.next.pred = node;
            this.hashMap.set(key, node);
            this.list.trailer.pred = this.list.trailer.pred.pred;
            this.list.trailer.pred.next = this.list.trailer;
        }else{
            node.next = this.list.head.next;
            node.pred = this.list.head;
            this.list.head.next = node;
            node.next.pred = node;
            this.hashMap.set(key, node);
        }
    }
};

var ListNode = function(val){
    this.val = val;
    this.next = null;
    this.pred = null;
}

var DoubleNodeList = function(){
    this.head = new ListNode();
    this.trailer = new ListNode();
    this.head.next = this.trailer;
    this.trailer.pred = this.head;
}