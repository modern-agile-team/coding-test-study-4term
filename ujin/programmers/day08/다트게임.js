function solution(dartResult) {
  const answer = [];
  let score = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        score = 10;
        i++;
      } else {
        score = Number(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      answer.push(score);
    } else if (dartResult[i] === "D") {
      answer.push(score ** 2);
    } else if (dartResult[i] === "T") {
      answer.push(score ** 3);
    } else if (dartResult[i] === "*") {
      answer[answer.length - 2] *= 2;
      answer[answer.length - 1] *= 2;
    } else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
