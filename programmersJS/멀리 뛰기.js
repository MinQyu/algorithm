function solution(n) {
  const ways = Array.from({ length: n }, () => 0);
  [ways[1], ways[2]] = [1, 2];
  for (i = 3; i <= n; i++) {
    ways[i] = (ways[i - 2] % 1234567) + (ways[i - 1] % 1234567);
  }
  return ways[n] % 1234567;
}
