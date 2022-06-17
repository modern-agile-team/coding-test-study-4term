function solution(n) {
  let answer = 0;
  let nStr = String(n);
  for (i = 0; i < nStr.length; i++) {
    answer += parseInt(nStr[i]);
  }
  return answer;
}
