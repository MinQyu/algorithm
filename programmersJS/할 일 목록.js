function solution(todo_list, finished) {
    let answer = [];
    for(i=0; i<finished.length; i++){
        if(!finished[i]) {
            answer.push(todo_list[i]);
        }
    }
    return answer;
}