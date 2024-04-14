function solution(array, n) {
  const getDistanceFromN = (number) => Math.abs(n - number);
  return array.reduce((acc, cur) => {
    const distanceFromCur = getDistanceFromN(cur);
    const distanceFromAcc = getDistanceFromN(acc);
    if (
      distanceFromCur < distanceFromAcc ||
      (distanceFromCur === distanceFromAcc && cur < acc)
    ) {
      return cur;
    } else {
      return acc;
    }
  });
}
