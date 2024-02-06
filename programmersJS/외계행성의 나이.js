function solution(age) {
    const ref = "abcdefghij";
    return age.toString().split('').map(e => ref[e]).join('');
}