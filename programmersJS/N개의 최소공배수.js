function solution(arr) {
  const getGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const getLCM = (a, b) => {
    return a * (b / getGCD(a, b));
  };

  return arr.reduce((acc, cur) => getLCM(acc, cur));
}
