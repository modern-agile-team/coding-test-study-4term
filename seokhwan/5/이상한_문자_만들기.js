function solution(s) {
  let count = 0;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      count = 0;
      continue;
    }
    if (count % 2 === 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
    count++;
  }
  return answer;
}
