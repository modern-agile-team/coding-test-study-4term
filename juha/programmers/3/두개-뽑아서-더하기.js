function solution(numbers) {
  total = numbers.length;
  let answer = new Set();
  for (let i = 0; i < total - 1; i++) {
    for (let j = i + 1; j < total; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}
