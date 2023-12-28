function solution(n, k) {
    let answer = [];
    for(i=1; i<=n/k; i++){
        answer.push(k*i);
    }
    return answer;
}