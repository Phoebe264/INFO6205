Public Class Intersection {

 public int[] intersection(int[] nums1, int[] nums2) {
Arrays.sort(nums1);
        Arrays.sort(nums2);
        int[] num = {};
        for (int i = 0; i < nums1.length; i++) {
        	if(i==nums1.length-1 || nums1[i]<nums1[i+1]) {
         	   for (int j = 0; j < nums2.length; j++) {
        		   if(nums1[i]==nums2[j]) {
        			   num = Arrays.copyOf(num, num.length+1);
        			   num[num.length-1] = nums1[i];
        			   break;
        		   }
        	   }
        	}
        }
        return num;
    }
}