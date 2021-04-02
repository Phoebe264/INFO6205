public static void main(String[] args) {
        Solution s = new Solution();

        //Q1
        ListNode n1 = new ListNode(4);
        n1.next = new ListNode(1);
        n1.next.next = new ListNode(8);
        n1.next.next.next = new ListNode(4);
        n1.next.next.next.next = new ListNode(5);

        ListNode n2 = new ListNode(5);
        n2.next = new ListNode(6);
        n2.next.next = new ListNode(1);
        n2.next.next.next = new ListNode(8);
        n2.next.next.next.next = new ListNode(4);
        n2.next.next.next.next.next = new ListNode(5);

        System.out.println("Output Q1");
        System.out.println("Converging: "+s.areConverging(n1, n2));

        //Q2
        TreeNode root = new TreeNode(1);

        root.left = new TreeNode(2);
        root.right = new TreeNode(3);

        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        root.right.right.left = new TreeNode(14);
        root.right.left.right = new TreeNode(13);


        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);


        root.left.left.left = new TreeNode(8);
        root.left.left.right = new TreeNode(9);


        root.left.right.left = new TreeNode(10);
        root.left.right.right = new TreeNode(11);

        System.out.println("Output Q2");
        s.printPerimeter(root);

        System.out.println("");
        //Q3
        int[] nums = {0,1,0,1,1,0,1,1,1,0,0,0};
        System.out.println("Output Q3");
        System.out.println("Num Of Cosecutivr Ones are: "+s.getMaxConsecutiveOnes(nums));
        //Q4
        int[] num = {2, 4, 4, 4, 6, 7, 7, 7, 8, 9, 9, 9};
        int A = 7;
        int index = s.getIndex(num, A);
        System.out.println("Output Q4");
        System.out.println("Index: "+index);



    }

}