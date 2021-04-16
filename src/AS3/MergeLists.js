Public Class MergeLists {

    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode head=new ListNode();
        head.next=list1;
        ListNode ptr1=head;
        int i=1;
        for(;i<=a;i++){
            ptr1=ptr1.next;
        }
        ListNode ptr2=ptr1.next;
        ptr1.next=list2;
        for(;i<=b+1;i++){
            ptr2=ptr2.next;
        }
        while(list2.next!=null){
            list2=list2.next;
        }
        list2.next=ptr2;
        return head.next;
    }
}