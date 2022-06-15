function solution(numbers) {
    let answer = [];
    for (let i = 0;  i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            if(answer.indexOf(sum) === -1){  // 코딩하다가 막혀서 구글링을 해봤는데 여기 문장이 이해가 안갑니다..!!
                answer.push(sum);
            }
        }
    }
    answer.sort((a,b)=> a-b);
    return answer;
}
console.log(solution([2,1,3,4,1]))