// 1. 가장 낮은 금액부터 계산을 해야 최대한 많은 부서를 지원하니까 오름차순으로 정렬
// 2. 배열을 순회하면서 예산을 점점 차감 누적이기 떄문에 reduce사용
// 3. 차감한 횟수를 반환!

function solution(d, budget) {
    
    let answer = d.sort((a,b) => a-b).reduce((team, current, index) => {   //간결한 코드를 위해 sort().reduce()
        if (budget - current >= 0) {
            budget -= current;
            team++;
        }
     return team;
    }, 0); //인덱스가 0부터 시작하지 않기 때문에 0으로 초기값 설정을 해줘야 함!
    
    return answer;
}