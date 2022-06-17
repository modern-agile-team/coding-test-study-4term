//for문 이용
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer += -absolutes[i]);
  }
  return answer;
}

// reduce 이용
function solution(absolutes, signs) {
  return absolutes.reduce((ac, v, i) => ac + (signs[i] ? +v : -v), 0);
}
