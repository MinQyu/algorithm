function solution(num_list, n) {
    const answer = [];
    const len = num_list.length / n;
    for (i = 0; i < len; i++) {
        answer.push(num_list.splice(0, n));
    }
    return answer;
}