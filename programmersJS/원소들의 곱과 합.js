function solution(num_list) {
    const answer = num_list.reduce((acc, cur) => acc * cur, 1) < num_list.reduce((acc, cur) => acc + cur, 0)**2 ? 1 : 0;
    return answer;
}
