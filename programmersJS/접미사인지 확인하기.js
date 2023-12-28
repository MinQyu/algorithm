function solution(my_string, is_suffix) {
    const sub = my_string.slice(-is_suffix.length)
    const answer = sub === is_suffix ? 1 : 0
    return answer;
}