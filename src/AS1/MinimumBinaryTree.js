Public Class MinimumBinaryTree {

    public int minDepth(TreeNode root) {

        if(root == null){ return 0;}

               Queue<TreeNode> q = new LinkedList<TreeNode>();
        q.offer(root);
        int depth = 1;
        while(!q.isEmpty()){
            int count = q.size();
            while(count > 0){
                TreeNode tem=q.poll();
                if(tem.left == null && tem.right == null){return depth;}
                if(tem.left != null){
                    q.offer(tem.left);
                }
                if(tem.right != null){
                    q.offer(tem.right);
                }
                count--;
            }
            depth++;
        }
        return depth;
    }
}

