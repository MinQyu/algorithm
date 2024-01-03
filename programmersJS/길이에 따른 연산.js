function solution(num_list) {
    const len = num_list.length;
    let answer = 0;
    if(len >= 11){
        for(i=0; i<len; i++){
            answer += num_list[i];    
        }
    } else {
        answer = 1;
        for(i=0; i<len; i++){
            answer *= num_list[i];    
        }
    }
    return answer;
}