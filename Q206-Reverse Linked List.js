/**
 * Take Example: 1->2->3->4->5->NULL
 * 2->3->4->5->NULL
 * 3->4->5->NULL
 * 4->5->NULL
 * 5->NULL
 * in current value is 4, next node = 5, so 4 -> 5.next = null
 * which means 4.next.next = 4, 4.next = null => 5->4->NULL
 * return head
 * 
 * in current value is 3, next node = 4, so 3 -> 4.next = null
 * which means 3.next.next = 3, 3.next = null => 5->4->3->NULL
 * return head
 * ....
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};