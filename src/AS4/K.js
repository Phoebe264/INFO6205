Public Class K {

public int kthSmallest(int []a, int l, int r, int k) {
while(l <= r) {
int mid = partition(a, l, r);
if(mid == k-1)
return a[mid];
else if(mid > k-1)
r = mid - 1;
else
l = mid + 1;
}
return -1;
}

private int partition(int[]a, int l, int r) {
int pivot = a[r];
int i = l-1;
for(int j = l;j < r;j++) {
if(a[j] <= pivot)
swap(a, ++i, j);
}
swap(a, ++i, r);
return i;
}

void swap(int []a, int i, int j) {
int temp = a[i];
a[i] = a[j];
a[j] = temp;
}