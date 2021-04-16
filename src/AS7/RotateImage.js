Public Class RotateImage {

public void rotate(int[][] matrix) {
        int i,j,k,t,c;
        for (k=0;k<matrix.length/2;k++){
            i=k-1;
            for (t=0;t<matrix.length-1-2*k;t++){
                i++;j=k;c=3;
                int lasti=i,lastj=j,tem=0,r=matrix[i][j];
                int p=i;
                while (c>0){
                    tem=i;
                    i=matrix.length-1-j;
                    j=tem;
                    matrix[lasti][lastj] = matrix[i][j];
                    lasti=i;lastj=j;
                    c--;
                }
                matrix[i][j]=r;
                i=p;
            }
        }
    }

}