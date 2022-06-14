function solution(d, budget) {
  let total = 0;
  let result = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (total + d[i] <= budget) {
      total += d[i];
      result += 1;
    } else {
      break;
    }
  }
  return result;
}
