Public Class BinaryTree {

class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root==null) return true;
        int left = search(root.left);
        int right = search(root.right);
        return Math.abs(right-left)<=1 && isBalanced(root.left) && isBalanced(root.right);
    }
    private int search(TreeNode root){
        if(root==null) return 0;
        return Math.max(search(root.left),search(root.right))+1;
    }
}

}