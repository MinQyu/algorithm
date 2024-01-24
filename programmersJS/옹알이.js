function solution(babbling) {
    const bab = ["aya", "ye", "woo", "ma"];
    for (i = 0; i < babbling.length; i++) {
        for (j = 0; j < 4; j++) {
            babbling[i].includes(bab[j]) ? babbling[i] = babbling[i].replace(bab[j], 1) : null;
        }
    }
    return babbling.filter(e => Number(e)).length;
}