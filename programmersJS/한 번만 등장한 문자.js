function solution(s) {
  return s
    .split("")
    .sort()
    .reduce((acc, cur, i, arr) => {
      if (i == 0) return cur != arr[i + 1] ? acc + cur : acc;
      else return cur != arr[i - 1] && cur != arr[i + 1] ? acc + cur : acc;
    }, "");
}
