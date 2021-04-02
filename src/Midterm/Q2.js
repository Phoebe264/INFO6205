public class Q2 {
//Time Complexity:0(n) Space:0(1)

   public static void printPerimeter(TreeNode root)
       {
           System.out.print(root.val+" ");
           printRightEdgeNodes(root.right);
           printLeafNodes(root);
           printLeftBottomUp(root.left);
       }

        private static void printLeafNodes(TreeNode root) {
           if(root==null)
               return;

           if(root.left==null && root.right==null)
           {
               System.out.print(root.val+" ");
               return;
           }
           printLeafNodes(root.right);
           printLeafNodes(root.left);
       }

        private static void printLeftBottomUp(TreeNode root)
       {
           if(root==null)
               return;

           // if leaf node, ignore while printing edges
           if(root.left==null && root.right==null)
           {
               return;
           }

           if(root.left!=null)
           {
               printLeftBottomUp(root.left);
           }
           else if(root.right!=null)
           {
               printLeftBottomUp(root.right);
           }

           System.out.print(root.val+" ");
       }


         private static void printLeftEdgeNodes(TreeNode root) {
           if(root==null)
               return;

           // if leaf node, ignore while printing edges
           if(root.left==null && root.right==null)
               return;

           System.out.print(root.val+" ");

           if(root.left==null)
           {
               printLeftEdgeNodes(root.right);
           }
           else
           {
               printLeftEdgeNodes(root.left);
           }

       }

         private static void printRightEdgeNodes(TreeNode root) {
           if(root==null)
               return;

           if(root.left==null && root.right==null)
               return;

           System.out.print(root.val+" ");

           if(root.right==null)
           {
               printLeftEdgeNodes(root.left);
           }
           else
           {
               printLeftEdgeNodes(root.right);
           }

       }