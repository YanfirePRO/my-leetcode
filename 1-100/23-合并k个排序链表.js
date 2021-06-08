/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var mergeSort = function(lo, hi){
        if(hi - lo < 2){
            let head = new ListNode(-Infinity);
            head.next = lists[lo];
            return head
        }
        let mi = (lo + hi) >> 1;
        let left = mergeSort(lo, mi);
        let right = mergeSort(mi, hi);
        // console.log(left,"left")
        // console.log(right, "right")
        return merge(left, right);
    }
    var merge = function(left, right){
        let head = left;
        let lPr = left;
        let rPr = right.next;

        while(lPr.next && rPr){
            if(lPr.next.val < rPr.val){
                lPr = lPr.next;
            } else{
                let old = rPr;
                rPr = rPr.next;
                old.next = lPr.next;
                lPr.next = old;
            }
        }

        if(rPr){
            lPr.next = rPr;
        }
        return head;
    }
    if(!lists.length) return null;
    let lo = 0;
    let hi = lists.length;
    return mergeSort(lo, hi).next;
};