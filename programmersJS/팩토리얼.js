function solution(n) {
  let tmp = 1;
  let i = 1;
  while (tmp * (i + 1) <= n) {
    i++;
    tmp *= i;
  }
  return i;
}
