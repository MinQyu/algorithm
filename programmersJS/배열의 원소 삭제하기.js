function solution(arr, delete_list) {
    const answer = arr.filter(e => delete_list.includes(e) === false);
    return answer;
}
