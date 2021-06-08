/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function dListNode(val){
    this.val = val;
    this.pre = "";
    this.next = "";
}

var dListNodeList = function(node){
    this.head = new dListNode();
    this.end = new dListNode();
    this.head.next = this.end;
    this.end.pre = this.head;
}

var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) return null
    let dl1 = new dListNodeList();
    let dl2 = new dListNodeList();
    while(l1){
        let val = l1.val;
        // console.log("l1", val)
        l1 = l1.next;
        let new_l1 = new dListNode(val);
        let next = dl1.head.next;
        dl1.head.next = new_l1;
        next.pre = new_l1;
        new_l1.next = next;
        new_l1.pre = dl1.head;
    }
    while(l2){
        let val = l2.val;
        l2 = l2.next;
        let new_l2 = new dListNode(val);
        let next = dl2.head.next;
        dl2.head.next = new_l2;
        next.pre = new_l2;
        new_l2.next = next;
        new_l2.pre = dl1.head;
    }
    // console.log(dl1)
    let isCarry = 0;
    let ll; //存储结果
    let res = [];
    let cur_node1 = dl1.head.next;
    let cur_node2 = dl2.head.next;
    let cur_val;
    let val_sum;
    while(cur_node1 != dl1.end && cur_node2 != dl2.end){
        console.log("node1", cur_node1.val)
        console.log("node2", cur_node2.val)
        val_sum = cur_node1.val + cur_node2.val + isCarry;
        cur_val = val_sum % 10;
        isCarry = Math.floor(val_sum/10);
        // console.log('cur_val',cur_val);
        // console.log('isCarry',isCarry);
        cur_node1 = cur_node1.next;
        cur_node2 = cur_node2.next;
        res.push(cur_val)
    }
    // console.log(res,'res');
    if(cur_node1 != dl1.end){
        while(cur_node1 != dl1.end){
            if(isCarry){
                val_sum = cur_node1.val + isCarry;
                cur_val = val_sum % 10;
                isCarry = Math.floor(val_sum/10);
            } else{
                cur_val = cur_node1.val;
            }
            
            cur_node1 = cur_node1.next;
            res.push(cur_val)
            // console.log('res1',res);
        }
    }
    if(cur_node2 != dl2.end){
        while(cur_node2 != dl2.end){
            if(isCarry){
                val_sum = cur_node2.val + isCarry;
                cur_val = val_sum % 10;
                isCarry = Math.floor(val_sum/10);
            } else{
                cur_val = cur_node2.val;
            }        
            cur_node2 = cur_node2.next;
            res.push(cur_val)
            // console.log('res2',cur_val);
        }
    }
    if(cur_node1 == dl1.end && cur_node2 == dl2.end && isCarry){
        res.push(isCarry)
    }
    // console.log(res,'res');
    let ll_cur = res.shift();
    ll = new ListNode(ll_cur);
    let cur_n;
    while(res && res.length){
        cur_n = new ListNode(res.shift());
        // console
        cur_n.next = ll;
        ll = cur_n;
    }
    
    // console.log("ll", ll)
    return ll;
};
