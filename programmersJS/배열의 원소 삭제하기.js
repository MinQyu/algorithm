function solution(arr, delete_list) {
    let answer = arr;
    for(i=0; i<delete_list.length; i++){
        if(answer.includes(delete_list[i])){
            answer.splice(answer.indexOf(delete_list[i]), 1);
        }
    }
    return answer;
}