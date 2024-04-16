function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const parsedDB = db.filter((e) => e[0] === id).flat();
  if (parsedDB.length > 0) {
    return parsedDB[1] === pw ? "login" : "wrong pw";
  } else {
    return "fail";
  }
}
