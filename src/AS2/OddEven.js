Public Class OddEven {

public ListNode oddEvenList(ListNode head) {
        if (head == null) {
            return head;
        }
        ListNode odd = head;
        ListNode oddTail = odd;

        ListNode evenHead = head.next;
        ListNode even = evenHead;

        while (odd != null && even != null) {

            if (odd.next != null) {
                odd.next = odd.next.next;
                odd = odd.next;
            }

            if (even.next != null) {
                even.next = even.next.next;
                even = even.next;
            }

            if (odd != null) {
                oddTail = odd;
            }
        }
        oddTail.next = evenHead;
        return head;
    }
}