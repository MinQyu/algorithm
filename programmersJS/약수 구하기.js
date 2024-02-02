function solution(n) {
    const front = [1];
    const rear = (n === 1) ? [] : [n];
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            front.push(i);
            if (i < n / i) {
                rear.unshift(n / i);
            }
        }
    }
    return front.concat(rear);;
}