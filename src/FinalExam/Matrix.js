public class Matrix {

    private int rows;
    private int cols;

    private boolean isReachable( char body[][], int reached[][], int x, int y) {
        return !(body[x][y] == 'X' || reached[x][y] != 0);
    }

    private boolean isValidMove(int x, int y) {
        return (x < rows && y < cols && x >= 0 && y >= 0);
    }

        public int findMaxTimeToReach(char body[][], int reached[][],
                    int i, int j, int x, int y, int maxTime, int max_time)
    {
        if (i == x && j == y) {
            return Integer.min(max_time, maxTime);
        }

        reached[i][j] = 1;

        if (isValidMove(i + 1, j) && isReachable(body, reached, i + 1, j))
        {
            max_time = findMaxTimeToReach(body, reached, i + 1, j, x, y,
                                        maxTime, max_time + 1);
        }

        if (isValidMove(i, j + 1) && isReachable(body, reached, i, j + 1))
        {
            max_time = findMaxTimeToReach(body, reached, i, j + 1, x, y,
                                        maxTime, max_time + 1);
        }

        if (isValidMove(i - 1, j) && isReachable(body, reached, i - 1, j))
        {
            max_time = findMaxTimeToReach(body, reached, i - 1, j, x, y,
                                        maxTime, max_time + 1);
        }

        if (isValidMove(i, j - 1) && isReachable(body, reached, i, j - 1))
        {
            max_time = findMaxTimeToReach(body, reached, i, j - 1, x, y,
                                        maxTime, max_time + 1);
        }
        reached[i][j] = 0;
        return max_time;
    }

    public String getResult(char[][] body, int maxTime){
        this.rows = body.length;
        this.cols = body[0].length;
        int[][] reached = new int[body.length][body[0].length];

        int max_time = findMaxTimeToReach(body, reached, 0, 0, body.length-1, body[0].length-1,
                                        maxTime, 0);

        if (max_time != maxTime)
        {
            return "Can Infect";
        }
        else {
            return "Cannot Infect";
        }
}
    public static void main(String[] args) {
        Solution solObj = new Solution();
        char[][] body = { {'0', '0', 'X', '0'},
                         {'X', '0', 'X', 'X'},
                        {'X', '0', '0', '0'}};
        if (!(body.length>=1 || body[0].length<=500))
        {
            System.out.println("Constraints does not meet!");
        }else{
            int maxTime = 1000000;
        System.out.println(solObj.getResult(body, 1000000));
        }

    }
}