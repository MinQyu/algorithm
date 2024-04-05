function solution(my_string) {
  return my_string.split(/[^0-9]/i).reduce((acc, cur) => acc + Number(cur), 0);
}
