function solution(score) {
  const averageScore = score.map((e) => (e[0] + e[1]) / 2);
  const sortedAverageScore = [...averageScore].sort((a, b) => b - a);
  return averageScore.map((e) => sortedAverageScore.indexOf(e) + 1);
}
