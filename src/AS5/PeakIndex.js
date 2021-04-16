Public Class PeakIndex {

public int peakIndexInMountainArray(int[] A) {
        return findPeak(A, 0, A.length - 1);
    }
    public int findPeak(int[] A, int start, int end){
        if(start == end) return start;
        int mid = (start + end) / 2;
        if(A[mid] < A[mid+1]) return findPeak(A, mid + 1, end);
        else return findPeak(A, start, mid);
    }
}