Public Class MatrixZero {

public void setZeroes(int[][] matrix) {
        int col = matrix[0].length, row = matrix.length;
        int[] heng = new int[row];
        int[] vel = new int[col];
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                if(matrix[i][j] == 0){
                    vel[j] = 1;
                    heng[i] = 1;
                }
            }
        }
        for(int i = 0; i < row; i++){
            if(heng[i] == 1){
                int index = 0;
                while(index < col){
                    matrix[i][index] = 0;
                    index++;
                }
            }
        }
        for(int i = 0; i < col; i++){
            if(vel[i] == 1){
                int index = 0;
                while(index < row){
                    matrix[index][i] = 0;
                    index++;
                }
            }
        }
    }
    }