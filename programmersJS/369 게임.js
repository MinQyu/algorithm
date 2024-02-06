function solution(order) {
    const ref = "369";
    return order.toString().split('').filter(e => ref.includes(e)).length;
}