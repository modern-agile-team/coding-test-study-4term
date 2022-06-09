function solution(array, commands) {
  let res = [];
  let arr;

  for (let i = 0; i < commands.length; i++) {
    arr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
    res[i] = arr[commands[i][2] - 1];
  }
  return res;
}
