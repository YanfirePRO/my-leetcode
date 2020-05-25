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
var mergeTwoLists = function(l1, l2) {
    let head = l1;
    let lPr = l1;
    let rPr = l2;
    
    while(lPr.val && rPr.val){
        if(lPr.val < rPr.val){
            lPr = lPr.next;
        } else{
            let old = rPr;
            rPr = rPr.next;
            old.next = lPr.next;
            lPr.next = old;
        }
    }

    return head;
};
