function solution(s) {
  let numOfOpenBraket = 0;
  let numOfClosedBraket = 0;
  for (i = 0; i < s.length; i++) {
    s[i] === "(" ? numOfOpenBraket++ : numOfClosedBraket++;
    if (numOfOpenBraket < numOfClosedBraket) {
      break;
    }
  }
  return numOfOpenBraket === numOfClosedBraket;
}
