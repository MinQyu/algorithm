function solution(strArr) {
    return strArr.filter((e, i, arr) => e.includes('ad') ? null : arr);
}
