Public Class KClosest {

 public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int len = arr.length;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < len; i++) {
            map.put(arr[i], Math.abs(arr[i] - x));
        }
        Queue<Integer> queue = new PriorityQueue<>((o1, o2) -> {
            if (map.get(o1) - map.get(o2) != 0) {
                return map.get(o1) - map.get(o2);
            } else return o1 - o2;
        });
        for (int n: arr) {
            queue.offer(n);
        }
        List<Integer> list = new LinkedList<>();
        for (int i = 0; i < k; i++) {
            list.add(queue.poll());
        }
        list.sort((o1,o2)->o1-o2);
        return list;
    }
    }