function solution(array, n) {
    return array.reduce(
        (acc, cur) => acc = (Math.abs(n - cur) < Math.abs(n - acc))
        || (Math.abs(n - cur) == Math.abs(n - acc)) && (cur < acc)
        ? cur : acc
    );
}