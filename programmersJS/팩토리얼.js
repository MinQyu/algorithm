function solution(n) {
  const arr = Array.from({ length: 11 }, (_, i) => i + 1);
  let acc = 1;
  for (i = 0; i < 11; i++) {
    acc *= arr[i];
    if (acc > n) {
      return i;
    }
  }
}
