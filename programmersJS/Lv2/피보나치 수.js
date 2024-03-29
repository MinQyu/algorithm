function solution(n) {
  let array = Array(n + 1).fill(0);
  array[1] = 1;
  for (i = 2; i <= n; i++) {
    array[i] = ((array[i - 1] % 1234567) + (array[i - 2] % 1234567)) % 1234567;
  }
  return array[n];
}
