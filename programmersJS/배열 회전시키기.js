function solution(numbers, direction) {
    if (direction === 'right') {
        numbers.unshift(...numbers.splice(-1, 1));
    } else {
        numbers.push(...numbers.splice(0, 1));
    }
    return numbers;
}