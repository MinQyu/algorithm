function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num.forEach((e, i) => numbers = numbers.replaceAll(e, i));
    return Number(numbers);
}