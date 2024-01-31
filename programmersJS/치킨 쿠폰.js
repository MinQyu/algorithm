function solution(chicken) {
    let maxChicken = 0;
    while (parseInt(chicken / 10)) {
        maxChicken += parseInt(chicken / 10);
        chicken = chicken - parseInt(chicken / 10) * 10 + parseInt(chicken / 10);
    }
    return maxChicken;
}