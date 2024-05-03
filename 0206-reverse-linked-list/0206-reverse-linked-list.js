/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        
        // Move prev and current pointers one step forward
        prev = current;
        current = nextNode;
    }
    
    // After the loop, 'prev' will be pointing to the new head of the reversed list
    return prev;
};