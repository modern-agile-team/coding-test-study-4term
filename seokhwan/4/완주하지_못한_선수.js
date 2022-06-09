function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let player = new Object();
  let winPlayer = new Object();
  let answer;

  for (let i in participant) {
    player[i] = participant[i];
  }

  for (let i in completion) {
    winPlayer[i] = completion[i];
  }

  for (let [key, value] of Object.entries(player)) {
    if (player[key] !== winPlayer[key]) {
      answer = player[key];
      break;
    }
  }

  return answer;
}
