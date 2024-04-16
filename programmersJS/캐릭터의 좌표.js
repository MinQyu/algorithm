function solution(keyinput, board) {
    let location = [0, 0];
    const xMax = (board[0] - 1) / 2, yMax = (board[1] - 1) / 2;
    for (i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "left" && location[0] > -xMax) {
            location[0] -= 1;
        } else if (keyinput[i] === "right" && location[0] < xMax) {
            location[0] += 1;
        } else if (keyinput[i] === "up" && location[1] < yMax) {
            location[1] += 1;
        } else if (keyinput[i] === "down" && location[1] > -yMax) {
            location[1] -= 1;
        }
    }
    return location;
}