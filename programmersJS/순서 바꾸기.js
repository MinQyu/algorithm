function solution(num_list, n) {
    let answer = num_list.slice(n, );
    let arr = num_list.slice(0, n);
    let len = arr.length
    for(i=0; i<len; i++){
        answer.push(arr.shift());
    }
    return answer;
}