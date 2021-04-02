import java.util.HashSet;
import java.util.Set;

Public class Q1{
//Time Complexity: 2 Space: 36.5
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
 public boolean areConverging(ListNode n1,ListNode n2)
    {
        ListNode top=n1;
        ListNode bottom=n2;

        Set set = new HashSet<>();

        if(n1==null || n2==null)
        {
            return false;
        }

        while(top!=null)
        {
            set.add(top);
            top = top.next;
        }

        while(bottom!=null)
        {
            if(set.contains(bottom))
            {
                return true;
            }
            set.add(bottom);
            bottom = bottom.next;
        }

        return false;
    }

 }
