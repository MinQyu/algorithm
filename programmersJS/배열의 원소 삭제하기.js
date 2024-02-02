function solution(arr, delete_list) {
    const set = new Set(arr);
    delete_list.forEach(e => set.delete(e));
    return [...set]
}
