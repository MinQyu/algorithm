function solution(n) {
    const answer = [];
    for (i = 2; i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            answer.push(i);
        }
    }
    return answer;
}