Public Class VaildAnagram {

public boolean isAnagram(String s, String t) {

        int[] map = new int['a' + 26];

        for (char c : s.toCharArray()) map[c]++;
        for (char c : t.toCharArray()) map[c]--;

        for (int i = 'a'; i < map.length; i++) {
            if (map[i] != 0) return false;
        }

        return true;
    }
}