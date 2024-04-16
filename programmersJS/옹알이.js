function solution(babbling) {
  const regex = /^(aya|ye|woo|ma)+$/;
  return babbling.filter((e) => regex.test(e)).length;
}
