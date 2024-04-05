function solution(emergency) {
    const rank = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => rank.indexOf(e) + 1);
}