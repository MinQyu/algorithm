function solution(my_string) {
    return my_string.split(/[a-z]/i).reduce((acc, cur) => acc + Number(cur), 0);
}