function solution(s) {
    return s.split('').sort().filter((e, i, arr) => arr.filter(k => k == e).length === 1).join('');
}