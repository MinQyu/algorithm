function solution(my_string) {
    return my_string.split('').map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
}