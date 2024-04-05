function solution(array, n) {
  const getDistanceFromN = (number) => Math.abs(n - number);
  return array.reduce(
    (acc, cur) =>
      (acc =
        getDistanceFromN(cur) < getDistanceFromN(acc) ||
        (getDistanceFromN(cur) == getDistanceFromN(acc) && cur < acc)
          ? cur
          : acc)
  );
}
