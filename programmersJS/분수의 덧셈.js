function solution(numer1, denom1, numer2, denom2) {
    let numer3 = numer1 * denom2 + numer2 * denom1,
        denom3 = denom1 * denom2;
    for (i = 2; i <= denom3; i++) {
        while (numer3 % i === 0 && denom3 % i === 0) {
            numer3 /= i;
            denom3 /= i;
        }
    }
    return [numer3, denom3];
}