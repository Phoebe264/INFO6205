Public Class SwapLists {

    public ListNode swapNodes(ListNode head, int k) {
        ListNode p=head,r=head,l=head,tm=new ListNode(),pre=new ListNode(),lp=pre,rp=pre;
        pre.next=head;
        while(k!=1){
            lp=p;p=p.next;k--;
        }
        l=p;
        while(p.next!=null){
            rp=r;r=r.next;p=p.next;
        }
        // 交换节点
        if(r!=l) {
            rp.next=l;
            lp.next=r;
            tm.next=r.next;
            r.next=l.next;
            l.next=tm.next;
        }
        return pre.next;
    }
}
