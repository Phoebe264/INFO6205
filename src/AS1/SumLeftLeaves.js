Public Class SumLeftLeaves {

public int sumOfLeftLeaves(TreeNode root) {
        Stack<TreeNode> stack = new Stack();
        if (root == null) {
            return 0;
        }
        stack.push(root);
        int res = 0;
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if (node.left != null && node.left.left == null && node.left.right == null) {
                res += node.left.val;
            }
            if (node.left != null) {
                stack.push(node.left);
            }
            if (node.right != null) {
                stack.push(node.right);
            }
        }
        return res;
    }
}