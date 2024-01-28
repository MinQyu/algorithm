function solution(score) {
    score = score.map(e => (e[0] + e[1]) / 2);
    const avg = [...score].sort((a, b) => b - a);
    return score.map(e => avg.indexOf(e) + 1);
}