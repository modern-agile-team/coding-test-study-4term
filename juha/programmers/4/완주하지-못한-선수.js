function solution(participant, completion) {
  const athletes = {};
  for (let name of participant) {
    athletes[name] = athletes[name] ? athletes[name] + 1 : 1;
  }

  for (let name of completion) {
    athletes[name] -= 1;
  }

  for (let key in athletes) {
    if (athletes[key]) {
      return key;
    }
  }
}
