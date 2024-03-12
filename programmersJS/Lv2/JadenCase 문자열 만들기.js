function solution(s) {
  const answer = [];
  s = s.split(" ");
  s.forEach((str) => {
    const tmp = str
      .split("")
      .map((e, i) => (i === 0 ? e.toUpperCase() : e.toLowerCase()))
      .join("");
    answer.push(tmp);
  });
  return answer.join(" ");
}
