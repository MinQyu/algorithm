function solution(dots) {
    let v = 0, h = 0;
    for (i = 1; i < 4; i++) {
        if (dots[0][0] === dots[i][0]) {
            h = Math.abs((dots[0][1] - dots[i][1]));
        } else if (dots[0][1] === dots[i][1]) {
            v = Math.abs((dots[0][0] - dots[i][0]));
        }
    }
    return v * h;
}