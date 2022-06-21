function solution(board, moves) {
  const result = [];
  let count = 0;
  let now;
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      now = board[i][move - 1];
      if (now) {
        if (result && result.slice(-1)[0] == now) {
          result.pop();
          count += 2;
        } else {
          result.push(now);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return count;
}
