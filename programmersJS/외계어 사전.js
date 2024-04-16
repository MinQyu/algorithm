function solution(spell, dic) {
  let answer = 2;
  const getSortedString = (arr) => arr.sort().join("");
  const sortedSpell = getSortedString(spell);
  for (i = 0; i < dic.length; i++) {
    if (getSortedString(dic[i].split("")) === sortedSpell) {
      answer = 1;
      break;
    }
  }
  return answer;
}
