function solution(numlist, n) {
    numlist = numlist.map(e => (e - n < 0) ? [Math.abs(e - n) + 0.5, e] : [e - n, e])
                     .sort((a, b) => a[0] - b[0]);
    return numlist.map(e => e[1]);
}