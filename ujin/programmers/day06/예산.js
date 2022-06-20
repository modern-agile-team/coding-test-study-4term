function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; answer <= budget; i++) {
    if (answer + d[i] <= budget) {
      answer += d[i];
      continue;
    }
    return i;
  }
}
