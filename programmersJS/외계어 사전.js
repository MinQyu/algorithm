function solution(spell, dic) {
  let answer = 2;
  const getSortedString = (arr) => arr.sort().join("");
  const sortedSpell = getSortedString(spell);
  dic.forEach((e) => {
    if (getSortedString(e.split("")) === sortedSpell) {
      answer = 1;
    }
  });
  return answer;
}
