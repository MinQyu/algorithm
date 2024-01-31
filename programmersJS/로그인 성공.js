function solution(id_pw, db) {
    let state = "fail";
    db = db.filter((e) => e[0] === id_pw[0]).flat();
    if (db.length) {
        state = (db[1] === id_pw[1]) ? "login" : "wrong pw";
    }
    return state;
}