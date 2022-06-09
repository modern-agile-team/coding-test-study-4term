function solution(n) {
  const arr = String(n).split("");
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }

  return answer;
}
