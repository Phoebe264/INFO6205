Public Class BinaryArray {

public static void main(String[] args) {
		int[] arr = {1, 1, 1, 0, 1, 1, 1};
		countOf1sInBinaryArray(arr);
	}

	public static void countOf1sInBinaryArray (int[] arr) {
		int left = 0;
		int right = arr.length-1;
		int count = 0;
		while(left<right) {
			if(arr[left] == 1) {
				count++;
			}
			if(arr[right] == 1) {
				count++;
			}
			left++;
			right--;
		}
		if(left == right){
			if(arr[left] == 1) {
				count++;
			}
		}
		System.out.println("Count of 1s is:" +count);
	}
}