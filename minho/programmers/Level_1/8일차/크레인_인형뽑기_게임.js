/** @format */

function solution(board, moves) {
    let selected = [];
    let score = 0;
    moves.forEach((el) => {
        for (let count = 0; count < board.length; count++) {
            if (board[count][el - 1]) {
                // 위에서부터 인형 유무 확인
                if (board[count][el - 1] == selected.slice(-1)) {
                    // 넣을 인형이 전과 같은 경우
                    score += 2;
                    selected.splice(-1, 1);
                } else {
                    selected.push(board[count][el - 1]); // 넣을 인형이 전과 다른 경우
                }
                board[count].splice(el - 1, 1, 0); // board에서 인형 제거
                break; // 반복 탈출
            }
        }
    });
    return score;
}
