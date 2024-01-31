function solution(quiz) {
    const answer = [];
    const checkPlus = (arr) => Number(arr[0]) + Number(arr[1]) === Number(arr[2]) ? 'O' : 'X';
    const checkMinus = (arr) => Number(arr[0]) - Number(arr[1]) === Number(arr[2]) ? 'O' : 'X';
    quiz.forEach((e) => {
        if (e.includes('+')) {
            e = e.split(/ \+ | = /);
            answer.push(checkPlus(e));
        } else {
            e = e.split(/ - | = /);
            answer.push(checkMinus(e));
        }
    });
    return answer;
}