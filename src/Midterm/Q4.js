Public class Q4{
    // Time Complexity: 0  Space: O

public int getIndex(int[] nums, int x)
    {
        int left = 0;
        int right = nums.length - 1;

        int result = -1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (x == nums[mid])
            {
                result = mid;
                right = mid - 1;
            }

            else if (x < nums[mid]) {
                right = mid - 1;
            }

            else {
                left = mid + 1;
            }
        }

        return result;
    }