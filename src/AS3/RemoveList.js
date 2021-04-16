Public Class RemoveList {

public ListNode removeElements(ListNode head, int val) {
        if (head == null)
            return head;
        if (head.val == val)
            return removeElements(head.next, val);
        head.next = removeElements(head.next, val);
        return head;
    }
    }