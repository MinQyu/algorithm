function solution(n) {
  const MIN_COMPOSITE_NUMBER = 4;
  const isCompositeNumber = (numOfSub) => numOfSub >= 3;
  let answer = 0;
  const countNumOfSub = (num) => {
    const tmp = [];
    for (j = 1; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        tmp.push(j);
        if (num / j !== j) tmp.push(num / j);
      }
      if (tmp.length >= 3) break;
    }
    return tmp.length;
  };

  for (i = MIN_COMPOSITE_NUMBER; i <= n; i++) {
    if (isCompositeNumber(countNumOfSub(i))) answer++;
  }

  return answer;
}
