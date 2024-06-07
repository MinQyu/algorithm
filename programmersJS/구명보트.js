function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => b - a);
  let numOfBoat = 0;
  let i = 0;
  let j = sortedPeople.length - 1;
  while (i <= j) {
    if (sortedPeople[i] + sortedPeople[j] <= limit) {
      i++;
      j--;
    } else {
      i++;
    }
    numOfBoat++;
  }
  return numOfBoat;
}
