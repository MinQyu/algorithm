function solution(s) {
  const answer = [];
  s = s.split(" ");
  s.forEach((str) => {
    const JadenCaseString = str
      .split("")
      .map((e, i) => (i === 0 ? e.toUpperCase() : e.toLowerCase()))
      .join("");
    answer.push(JadenCaseString);
  });
  return answer.join(" ");
}
