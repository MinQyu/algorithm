function solution(num_list) {
    let od = num_list.filter((n) => n % 2 === 1).reduce((occ, cur) => occ + cur, '');
    let ev = num_list.filter((n) => n % 2 === 0).reduce((occ, cur) => occ + cur, '');
    const answer = parseInt(od, 10) + parseInt(ev, 10);
    return answer;
}
