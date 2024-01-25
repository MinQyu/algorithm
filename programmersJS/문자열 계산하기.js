function solution(my_string) {
    return my_string.split(' ').reduce((acc, cur, i, arr) => {
        if (cur == '+') {
            acc = Number(acc) + Number(arr[i + 1]);
        } else if (cur == '-') {
            acc = Number(acc) - Number(arr[i + 1]);
        }
        return acc;
    });
}