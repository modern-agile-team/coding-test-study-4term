function solution(array, commands){
    let answer = [];
    for(let i in commands){
        let arr = array
        .slice(commands[i][0] - 1, commands[i][1])  
        .sort((a,b) => a - b);
        answer[i] = arr[commands[i][2] - 1];
        }
        return answer;
    }
console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]] ))
// 제가 이 문제를 풀면서 알고리즘을 짜고 어떤 함수를 넣어서 코딩을 해야지 생각하는데
// commands[i][0] - 1 이런부분에서 세부적으로 구성하는 법이 어렵습니다.. 방향성을 잡아주실 수 있을까요?