function solution(s) {
  let count = 0;
  let numOfZero = 0;
  let lengthOfString = 0;
  while (s !== "1") {
    lengthOfString = s.length;
    s = s.replaceAll("0", "").length;
    numOfZero += lengthOfString - s;
    s = s.toString(2);
    count++;
  }
  return [count, numOfZero];
}
