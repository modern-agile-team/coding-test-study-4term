function solution(answers) {
  const answer = [];
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const number1 = answers.filter((a, i) => a === supo1[i % 5]).length;
  const number2 = answers.filter((a, i) => a === supo2[i % 8]).length;
  const number3 = answers.filter((a, i) => a === supo3[i % 10]).length;
  const max = Math.max(number1, number2, number3);

  if (number1 === max) answer.push(1);
  if (number2 === max) answer.push(2);
  if (number3 === max) answer.push(3);

  return answer;
}
