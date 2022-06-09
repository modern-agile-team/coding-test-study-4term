function solution(n) {
  let answer = String(n)
    .split("")
    .reduce((accumulator, current) => accumulator + parseInt(current), 0);
  return answer;
}

function solution2(n) {
  let answer = 0;
  while (n > 0) {
    answer += n % 10;
    n = parseInt(n / 10);
  }
  return answer;
}
