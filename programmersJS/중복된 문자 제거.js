function solution(my_string) {
    return my_string.split('').filter((e, i, arr) => arr.indexOf(e) === i).join('');
}