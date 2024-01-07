function solution(my_string, is_prefix) {
    const sub = my_string.slice(0, is_prefix.length)
    const answer = sub === is_prefix ? 1 : 0
    return answer;
}