function solution(brown, yellow) {
  //x^2 - (brown/2 + 2)x + brown + yellow = 0
  const a = 1;
  const b = -(brown / 2 + 2);
  const c = brown + yellow;
  const quadratic = (a, b, c) => {
    const discriminant = Math.sqrt(b ** 2 - 4 * a * c);
    const root1 = (-b + discriminant) / (2 * a);
    const root2 = (-b - discriminant) / (2 * a);
    return [root1, root2];
  };
  return quadratic(a, b, c);
}
