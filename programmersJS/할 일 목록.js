function solution(todo_list, finished) {
    return todo_list.filter((e, i, arr) => finished[i] ? null : arr);
}
