function solution(d, budget) {
  let count = 0;

  for (let e of d.sort((a, b) => a - b)) {
    budget -= e;
    if (budget >= 0) {
      count++;
    }
  }
  return count;
}
