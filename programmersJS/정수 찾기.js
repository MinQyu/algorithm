function solution(num_list, n) {
    let answer = 0;
    if(num_list.indexOf(n)>0) answer = 1;
    else answer = 0;
    return answer;
}