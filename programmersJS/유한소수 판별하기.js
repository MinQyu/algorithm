function solution(a, b) {
    const tmp = [];
    if (b % 2 !== 0 && b % 5 !== 0) {
        return 2;
    } else if (b < 5 || a === b) {
        return 1;
    } else {
        for (i = 2; i <= b; i++) {
            if (a % i === 0 && b % i === 0) {
                a /= i;
                b /= i;
            }
        }
        for (i = 2; i <= b; i++) {
            if (b % i === 0 && (i % 2 !== 0 && i % 5 !== 0)) {
                tmp.push(i);
            }
        }
        return tmp.length ? 2 : 1;
    }
}
