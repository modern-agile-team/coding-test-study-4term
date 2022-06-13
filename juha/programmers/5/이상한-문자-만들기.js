function solution(s) {
  let answer = "";
  const upperStr = s.toUpperCase();
  const lowerStr = s.toLowerCase();
  let cnt = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      cnt = 1;
      continue;
    }
    answer += cnt % 2 ? upperStr[i] : lowerStr[i];
    cnt += 1;
  }
  return answer;
}
