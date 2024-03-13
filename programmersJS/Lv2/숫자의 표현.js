function solution(n) {
  let answer = 0;
  for (i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) answer++;
  }
  return answer;
}
