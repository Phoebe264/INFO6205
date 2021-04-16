Public Class LongestCommon {

public String longestCommonPrefix(String[] strs) {

        if(strs == null || strs.length == 0){
            return "";
        }

        if(strs.length == 1){
            return strs[0];
        }

        char[] chars = strs[0].toCharArray();

        int index = 0;

        while(index < chars.length){

            for(int i=1;i<strs.length;i++){
                String s = strs[i];

                if(s.length() <= index){
                    if(index == 0){
                        return "";
                    }
                    return strs[0].substring(0,index);
                }

                if(s.charAt(index) == chars[index]){

                    if(i == strs.length-1){

                        index++;
                    }
                }else{
                    if(index == 0){
                        return "";
                    }
                    return strs[0].substring(0,index);
                }
            }
        }
        if(index == 0){
            return "";
        }
        return strs[0];
    }
}