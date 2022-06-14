function solution(rightAnswer) {
  const answers = {
    score: [0, 0, 0],
    submit: [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ],
  };
  answers.len = [
    answers.submit[0].length,
    answers.submit[1].length,
    answers.submit[2].length,
  ];
  const result = [1, 2, 3];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < rightAnswer.length; i++) {
      if (rightAnswer[i] === answers.submit[j][i % answers.len[j]]) {
        answers.score[j]++;
      }
    }
  }
  const maxScore = Math.max.apply(null, answers.score);
  return result.filter((i) => answers.score[i - 1] >= maxScore);
}
