function solution(my_string) {
  return my_string.split(" ").reduce((acc, cur, i, arr) => {
    if (i == 0) {
      acc += Number(cur);
    } else {
      if (cur == "+") {
        acc += Number(arr[i + 1]);
      } else if (cur == "-") {
        acc -= Number(arr[i + 1]);
      }
    }
    return acc;
  }, 0);
}
