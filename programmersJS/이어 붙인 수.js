function solution(num_list) {
    let od = '';
    let ev = '';
    for(i=0; i<num_list.length; i++){
        if(num_list[i]%2>0){
            od += num_list[i].toString();
        } else {
            ev += num_list[i].toString();
        }
    }
    const answer = parseInt(od, 10) + parseInt(ev, 10);
    return answer;
}