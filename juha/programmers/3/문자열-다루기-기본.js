function solution(s) {
  const answer =
    (s.length == 4 || s.length == 6) && s === s.replace(/[^0-9]/g, "");
  return answer;
}
