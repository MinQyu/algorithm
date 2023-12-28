function solution(num_list) {
    let mul = num_list[0];
    let pl = 0;
    for(i=1; i<num_list.length; i++){
        mul *= num_list[i];
    }
    for(i=0; i<num_list.length; i++){
        pl += num_list[i];
    }
    const answer = mul < pl**2 ? 1 : 0;
    return answer;
}