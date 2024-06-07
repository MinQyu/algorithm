function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => b - a);
  let numOfBoat = 0;
  while (sortedPeople.length !== 0) {
    if (sortedPeople[0] + sortedPeople[people.length - 1] <= limit) {
      sortedPeople.shift();
      sortedPeople.pop();
    } else {
      sortedPeople.shift();
    }
    numOfBoat++;
  }
  return numOfBoat;
}
