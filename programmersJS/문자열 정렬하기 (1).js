function solution(my_string) {
    return my_string.split('').filter(e => !isNaN(e)).map(e => Number(e)).sort((a, b) => a - b);
}