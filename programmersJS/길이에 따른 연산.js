function solution(num_list) {
    const answer = num_list.length > 10 ? num_list.reduce((acc, cur) => acc + cur, 0) : num_list.reduce((acc, cur) => acc * cur, 1);
    return answer;
}
