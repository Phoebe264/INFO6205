Public Class SplitLinked {

public ListNode[] splitListToParts(ListNode root, int k) {
        ListNode[] returnNode = new ListNode[k];
        if(root == null || k == 0) return returnNode;
        int len = getListLength(root);
        int subLen = len / k,p = len % k;
        int[] subLenArr = new int[k];
        for (int i = 0;i<k;i++) {
            if (i < p){
                subLenArr[i] = subLen+1;
            } else {
                subLenArr[i] = subLen;
            }
        }
        int i=0;
        ListNode head = root;
        while(root != null){
            subLenArr[i]--;
            if (subLenArr[i] == 0) {
                ListNode temp = root.next;
                root.next = null;
                returnNode[i++] = head;
                head = temp;
                root = temp;
            } else {
                root=root.next;
            }
        }
        if (head != null) {
            returnNode[i++] = head;
        }
        return returnNode;
    }

    public int getListLength(ListNode head){
        int len=0;
        while(head!=null){
            len++;
            head=head.next;
        }
        return len;
    }
    }