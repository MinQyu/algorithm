function solution(n) {
    let answer = 0;
    const countNumOfSub = (num) => {
        const tmp = [];
        for (j = 1; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                tmp.push(j);
                if (num / j !== j) tmp.push(num / j);
            }
            if (tmp.length >= 3) break;
        }
        return tmp.length;
    };

    for (i = 4; i <= n; i++) {
        if (countNumOfSub(i) >= 3) answer++;
    }

    return answer;
}
