function solution(arr, k) {
    const answer = arr.map(e => k % 2 === 1 ? e * k : e + k);
    return answer;
}
