function solution(s) {
  let answer = "";
  let i = parseInt(s.length / 2);

  if (s.length % 2) answer = s[i];
  else answer = s[i - 1] + s[i];
  return answer;
}
