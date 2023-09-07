// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

//  
// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]



//TIME_COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 function reverseLinked(head,right){
    let curr = head;
    let prev = null
    let nextEle = null;
    let idx=0;
    while(curr!=null){
        nextEle = curr.next;
        curr.next = prev;
        prev = curr;
        curr= nextEle;
        if(idx==right){break;}
        idx++;
    }
    if(curr!=null){head.next = curr;}
    return {
        rHead: prev
    }
} 
var reverseBetween = function(head, left, right) {
        let newHead = head;
        let prev = null;
        let idx=1;
        while(newHead!=null){
               if(idx===left){
                    const {rHead} = reverseLinked(newHead, right-left);
                    if(prev){ prev.next = rHead;}
                    else { head =  rHead;}
                    break; 
               } 
               prev = newHead;
               newHead = newHead.next;
               idx++;
        }
        return head;
};