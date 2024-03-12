function solution(s) {
  s = s.split(" ").map((e) => Number(e));
  const minNumber = Math.min(...s);
  const maxNumber = Math.max(...s);
  return minNumber.toString() + " " + maxNumber.toString();
}
