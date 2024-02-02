function solution(hp) {
    const a = parseInt(hp / 5),
          b = parseInt((hp % 5) / 3),
          c = parseInt((hp % 5) % 3);
    return a + b + c;
}