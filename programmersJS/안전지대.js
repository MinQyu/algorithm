function solution(board) {
    const n = board.length;
    const getXY = (index) => [index % n + 1, n - parseInt(index / n)];
    const getIndex = (XY) => (XY[0] > 0 && XY[1] > 0) ? (n - XY[1]) * n + XY[0] - 1 : -1;
    const getRange = (index) => {
        const [x, y] = getXY(index);
        return [
            [x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
            [x - 1, y], [x, y], [x + 1, y],
            [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]
        ].map(e => getIndex(e)).filter(e => e >= 0);
    }

    board = board.flat()
        .reduce((acc, cur, i, arr) => {
            let isSafe = cur ? 0 : 1;
            if(!cur) getRange(i).forEach(e => { if (arr[e]) isSafe = 0; });
            return acc + isSafe;
        }, 0);

    return board;
}
