function solution(n) {
  const getNumOfOne = (n) =>
    n
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;
  const numOfOne = getNumOfOne(n);
  while (true) {
    n++;
    if (numOfOne === getNumOfOne(n)) break;
  }
  return n;
}
