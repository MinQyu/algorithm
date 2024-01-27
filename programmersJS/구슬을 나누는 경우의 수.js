function solution(balls, share) {
    let num = 1;
    let dev = 1;
    for (i = balls; i > share; i--) {
        num *= i;
    }
    for (i = 1; i <= balls - share; i++) {
        dev *= i;
    }
    return parseInt(num / dev);
}