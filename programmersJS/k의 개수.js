function solution(i, j, k) {
    let answer = 0;
    while (i <= j) {
        answer += i.toString().split('').filter(e => e == k).length;
        i++;
    }
    return answer;
}