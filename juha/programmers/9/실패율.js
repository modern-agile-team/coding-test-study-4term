function solution(N, stages) {
  const answer = [];
  const result = new Array(N + 1);
  let total = stages.filter((stage) => stage >= 1).length;
  for (let i = 1; i <= N; i++) {
    const failure = stages.filter((stage) => stage === i).length;
    result[i] = [total ? failure / total : 0, i];
    total -= failure;
  }
  result.shift();
  result.sort((b, a) => a[0] - b[0]);
  result.forEach((failureRate) => {
    answer.push(failureRate[1]);
  });
  return answer;
}
