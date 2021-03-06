Public Class SwapNodes {

public ListNode swapPairs(ListNode head) {
        if(head == null||head.next == null)
            return head;
        ListNode pre = head;
        ListNode temp = pre.next;
        ListNode resHead = temp;
        ListNode link = head;
        while(temp!=null){
            pre.next = temp.next;
            temp.next = pre;
            pre = pre.next;
            if(pre == null){
                break;
            }
            temp = pre.next;
            if(temp!=null){
                link.next = temp;
                link = pre;
            }else{
                link.next = pre;
                break;
            }

        }
        return resHead;
    }
}