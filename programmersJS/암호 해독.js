function solution(cipher, code) {
    return cipher.split('').filter((e, i) => (i + 1) % code === 0 ? e : null).join('');
}