public class Q3 {
//Time Complexity: 0(n) Space: 0(1)
}
    public int getMaxConsecutiveOnes(int[] nums)
    {
        int count=0;
        int maxConsOne=0;

        for(int i=0;i<nums.length;i++)
        {
            if(nums[i]==1)
            {
                count++;
                maxConsOne = Math.max(count, maxConsOne);
            }
            else
            {
                count=0;
            }
        }
        return maxConsOne;

    }