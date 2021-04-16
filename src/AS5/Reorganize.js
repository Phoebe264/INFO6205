Public Class Reorganize {

public String reorganizeString(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }
        int max = 0;
        char ch = 'a';
        for (Character character : map.keySet()) {
            if (map.get(character) > max) {
                ch = character;
                max = map.get(character);
            }
        }
        map.remove(ch);
        if (max > (s.length() + 1) / 2) {
            return "";
        }
        StringBuilder sb = new StringBuilder(s.length());
        for (int i = 0; i < max; i++) {
            sb.append(ch);
        }
        for (Character character : map.keySet()) {
            for (int i = 0; i < map.get(character); i++) {
                sb.append(character);
            }
        }
        map.clear();
        int time;
        for (int i = max; i < sb.length(); i++) {
            time = i / max;
            char c = sb.charAt(i);
            sb.deleteCharAt(i);
            sb.insert((i % max ) * (time + 1) + 1, c);
        }
        return sb.toString();
    }
}