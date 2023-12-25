
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
     let head = new ListNode(0);
 
  let cur = head;
  let value = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + value;
    value = Math.floor(sum / 10);

    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (value > 0) {
    cur.next = new ListNode(value);
  }

  return head.next;
};

