function solution(n) {
    for (i = 1; i <= n; i++) {
        while (i % 3 === 0 || i.toString().includes('3')) {
            i++;
            n++;
        }
    }
    return n;
}