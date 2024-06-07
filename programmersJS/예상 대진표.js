function solution(n, a, b) {
  let encounterRound = 1;
  const getNextPlayerNumber = (player) => {
    return Math.round(player / 2);
  };
  const checkEncounter = (a, b) =>
    a > b ? a - b == 1 && a % 2 == 0 : b - a == 1 && b % 2 == 0;
  while (!checkEncounter(a, b)) {
    a = getNextPlayerNumber(a);
    b = getNextPlayerNumber(b);
    encounterRound++;
  }
  return encounterRound;
}
