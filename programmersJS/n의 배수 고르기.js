function solution(n, numlist) {
    const answer = numlist.filter(e => e % n === 0 ? e : null);
    return answer;
}