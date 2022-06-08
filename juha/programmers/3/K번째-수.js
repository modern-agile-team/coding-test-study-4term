function solution(array, commands) {
  let answer = [];
  for (let i of commands) {
    let result = array.slice(i[0] - 1, i[1]).sort((a, b) => a - b);
    answer.push(result[i[2] - 1]);
  }
  return answer;
}
