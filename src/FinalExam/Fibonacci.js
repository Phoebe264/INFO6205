public class Fibonacci {
    public int fib(int n){
        if(n<=1){
            return n;
        }
        else{
            return this.fib(n-1) + this.fib(n-2);
        }

}
    public static void main(String[] args) {
        Solution solObj = new Solution();
        System.out.println(solObj.fib(4));
    }
}