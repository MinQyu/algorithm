function solution(numbers) {
    const arr = numbers.sort((a, b) => a - b);
    const a = arr[0] * arr[1], b = arr[arr.length-1] * arr[arr.length-2];
    return a > b ? a : b;
}