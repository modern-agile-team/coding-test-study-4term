function solution(board, moves) {
    const move = [];
    const stack = [0]; //초기값을 설정하지 않으면 14행에서 오류가 남 length가 0 에서 -1하기때문
    let cnt = 0;
    //1 moves의 위치를 인덱스로 사용한다
    for (let i = 0; i < moves.length; i++) {
        move[i] = moves[i]-1;
    }

    //2 move에 해당하는 자리에 borad 값이 있으면 0, stack에 저장, 중복이면 pop
    move.forEach((item) => {
        for (let i = 0; i < board.length; i++) {                 //board 길이 만큼 반복 
            if (board[i][item] !== 0){                          //board에 값이 있다면
                if (stack[stack.length-1] == board[i][item]) {   //만약 현재 stack의 값과 board[i][item] 값이 같다면 board[i][item] 초기화, 중복된 요소 제거, break
                    board[i][item] = 0;
                    stack.pop();
                    cnt += 2;
                    break;
                }
                stack.push(board[i][item]);                      //stack에 저장, board[i][item] 초기화
                board[i][item] = 0;
                break;
            }
        }
    });

    return cnt;
}