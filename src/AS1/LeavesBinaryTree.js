Public Class LeavesBinaryTree {

public List<List<Integer>> findLeaves(TreeNode root) {
        List<List<Integer>> res=new ArrayList<List<Integer>>();
        if(root==null){
            return res;
        }
        while(root.left!=null||root.right!=null){
            List<Integer> list=new ArrayList<Integer>();
            dfs(root,list);
            res.add(list);
        }
        List<Integer> list=new ArrayList<Integer>();
        list.add(root.val);
        res.add(list);
        return res;
    }
    private boolean dfs(TreeNode root,List<Integer> list){
        if(root==null){
            return false;
        }
        if(root.left==null&&root.right==null){
            list.add(root.val);
            return true;
        }
        boolean flag1=dfs(root.left,list);
        boolean flag2=dfs(root.right,list);
        if(flag1){
            root.left=null;
        }
        if(flag2){
            root.right=null;
        }
        return false;
    }
    }