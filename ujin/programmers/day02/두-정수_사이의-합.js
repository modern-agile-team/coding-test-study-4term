function solution(a, b) {
  let abSum = 0;
  abSum = ((a + b) * (Math.abs(b - a) + 1)) / 2;
  return abSum;
}
