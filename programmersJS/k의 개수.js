function solution(i, j, k) {
  const strK = k.toString();
  const tmpString = Array.from(
    { length: j - i + 1 },
    (_, index) => i + index
  ).join("");
  return tmpString.split("").filter((e) => e == strK).length;
}
