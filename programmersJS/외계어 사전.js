function solution(spell, dic) {
    let answer = 2;
    for (i = 0; i < dic.length; i++) {
        if (dic[i].split('').sort().join() === spell.sort().join()) {
            answer = 1;
            break;
        }
    }
    return answer;
}