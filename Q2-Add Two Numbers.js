var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let temp = head;
  let carry = 0;
  let value = 0;
  while (l1 || l2 || value) {
    if (l1) {
      value += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      value += l2.val;
      l2 = l2.next;
    }
    value += carry;

    if (value >= 10) {
      value -= 10;
      carry = 1;
    }
    temp.val = value;
    if (l1 || l2 || carry) {
      temp.next = new ListNode(value);
      temp = temp.next;
    }
    value = carry;
    carry = 0;
  }
  return head;
};
