Public Class Pancake {

public List<Integer> pancakeSort(int[] arr) {

        List<Integer> list = new ArrayList();
        for(int i=arr.length; i>0; i--){
            int temp = findIndex(arr, i);
            if(temp!=i){
                list.add(temp);
                helper(arr, temp);
                list.add(i);
                helper(arr, i);
            }
        }
        return list;
    }

    public int findIndex(int[] arr, int target){
        int index = 0;
        for(int i=0; i<arr.length; i++)
            if(arr[i] == target){
                return i + 1;
            }
        return index;
    }

    public void helper(int[] A, int num){
        for(int i=0; i<num/2; i++){
            int temp = A[i];
            A[i] = A[num-i-1];
            A[num-i-1] = temp;
        }
    }
    }