function solution(A, B) {
    let count = 0,
        tmp = '';
    for (i = 0; i < A.length; i++) {
        if (A === B) break;
        tmp = A.slice(-1) + A.slice(0, -1);
        A = tmp;
        count++;
    }
    return A === B ? count : -1;
}