function solution(array) {
    array = array.map((e, i, arr) => [e, arr.filter(n => e === n).length])
                 .sort((a, b) => b[1] - a[1])
                 .filter((e, i, arr) => e[1] === arr[0][1]);
    return array.reduce((acc, cur) => cur[0] !== array[0][0] ? acc = -1 : acc, array[0][0]);
}