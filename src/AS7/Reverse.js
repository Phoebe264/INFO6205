Public Class Reverse {

public String reverseWords(String s) {
        s = s.trim();
        String[] str = s.replaceAll(" + "," ").split(" ");
        StringBuilder sb = new StringBuilder();
        for (int i = str.length-1; i >= 1; i--) {
            sb.append(str[i]);
            sb.append(" ");
        }
        sb.append(str[0]);
        return sb.toString();
    }
}