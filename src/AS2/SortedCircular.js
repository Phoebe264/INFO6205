Public Class SortedCircular {

public Node insert(Node head, int insertVal) {
        if( null == head)
        {
            head = new Node(insertVal);
            head.next = head;
            return head;
        }

        Node current = head;
        while(current.next != head)
        {
            if(current.val <= insertVal && insertVal <= current.next.val) break;
            if(current.val > current.next.val && (insertVal >= current.val || insertVal <= current.next.val)) break;
            current = current.next;
        }

        Node tmp = new Node(insertVal, current.next);
        current.next = tmp;
        return head;
    }
}