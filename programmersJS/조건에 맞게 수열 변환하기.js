function solution(arr, k) {
    let answer = arr;
    if(k%2 > 0){
        for(i=0; i<arr.length; i++){
            answer[i] *= k;
        }
    } else {
        for(i=0; i<arr.length; i++){
            answer[i] += k;
        }
    }
    return answer;
}