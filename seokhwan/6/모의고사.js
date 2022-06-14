function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  let res = [];

  for (i in answers) {
    if (answers[i] === first[i % 5]) {
      score[0]++;
    }
    if (answers[i] === second[i % 8]) {
      score[1]++;
    }
    if (answers[i] === third[i % 10]) {
      score[2]++;
    }
  }

  for (i in score) {
    if (Math.max(...score) === score[i]) {
      res.push(parseInt(i) + 1);
    }
  }
  return res;
}
