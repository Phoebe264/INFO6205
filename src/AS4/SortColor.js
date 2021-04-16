Public Class SortColor {

public void sortColors(int[] nums) {
        int[] temp = new int[3];
        for (int num : nums) {
            temp[num]++;
        }

        int index = 0;
        for (int i = 0; i < temp.length; i++) {
            int count = temp[i];
            for (int j = 0; j < count; j++) {
                nums[index] = i;
                index++;
            }
        }
    }
}