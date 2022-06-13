//for 사용
function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    result += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return result;
}

//reduce 사용
function solution(absolutes, signs) {
  return absolutes.reduce(
    (accu, absolute, i) => acc + absolute * (signs[i] ? 1 : -1),
    0
  );
}
