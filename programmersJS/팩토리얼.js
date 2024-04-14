function solution(n) {
  const ref = Array.from({ length: 11 }, (_, i) => i + 1);
  let answer = 0;
  ref.reduce((acc, cur, i) => {
    acc *= cur;
    if (acc > n && answer == 0) answer = i;
    return acc;
  });
  return answer;
}
