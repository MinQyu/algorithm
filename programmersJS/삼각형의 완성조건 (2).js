function solution(sides) {
    sides.sort((a, b) => a - b);
    return sides[0] + sides[0] - 1;
}